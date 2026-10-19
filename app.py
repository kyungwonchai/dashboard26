import os
import sys
import sqlite3
import shutil
import datetime
from flask import Flask, request, jsonify, render_template, send_from_directory, send_file
from werkzeug.utils import secure_filename
import openpyxl
from io import BytesIO

# 기본 설정 및 경로
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, 'dashboard.db')
BACKUP_DIR = os.path.join(BASE_DIR, 'backup')
UPLOAD_DIR = os.path.join(BASE_DIR, 'uploads')

os.makedirs(BACKUP_DIR, exist_ok=True)
os.makedirs(UPLOAD_DIR, exist_ok=True)

app = Flask(__name__, static_folder='static', template_folder='templates')
app.config['UPLOAD_FOLDER'] = UPLOAD_DIR
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB 제한

# -------------------------------------------------------------
# 1. 자동 백업 함수 (STEP 10 & GEMINI.md 규칙)
# -------------------------------------------------------------
def backup_database():
    """서버 실행 및 주요 변경 시 DB를 backup/ 폴더에 보관하고 최근 7개만 유지"""
    if os.path.exists(DB_PATH):
        now_str = datetime.datetime.now().strftime('%Y%m%d_%H%M%S')
        dest = os.path.join(BACKUP_DIR, f'dashboard_{now_str}.db')
        try:
            shutil.copy2(DB_PATH, dest)
            # 오래된 백업 정리 (최근 7개만 남기기)
            backups = sorted([f for f in os.listdir(BACKUP_DIR) if f.startswith('dashboard_') and f.endswith('.db')])
            if len(backups) > 7:
                for old in backups[:-7]:
                    os.remove(os.path.join(BACKUP_DIR, old))
        except Exception as e:
            print(f"[백업 실패 경고] {e}")

# -------------------------------------------------------------
# 2. SQLite 데이터베이스 연결 및 초기화 (STEP 03 + 심화기능)
# -------------------------------------------------------------
def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db()
    cur = conn.cursor()

    # 1. 팀원 테이블
    cur.execute('''
    CREATE TABLE IF NOT EXISTS members (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        part TEXT NOT NULL,
        role TEXT DEFAULT '파트원',
        avatar_color TEXT DEFAULT '#8b5cf6',
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
    ''')

    # 2. 팀 할 일 테이블 (STEP 04 + 심화: 프로젝트명, 이미지첨부)
    cur.execute('''
    CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        assignee TEXT NOT NULL,
        part TEXT DEFAULT '공통',
        project TEXT DEFAULT '일반업무',
        priority TEXT CHECK(priority IN ('높음', '보통', '낮음')) DEFAULT '보통',
        due_date TEXT NOT NULL,
        status TEXT CHECK(status IN ('대기', '진행중', '완료')) DEFAULT '진행중',
        created_at TEXT NOT NULL,
        completed_at TEXT,
        image_url TEXT,
        FOREIGN KEY (assignee) REFERENCES members(name)
    )
    ''')

    # 3. 업무일지 테이블 (STEP 06)
    cur.execute('''
    CREATE TABLE IF NOT EXISTS worklogs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        log_date TEXT NOT NULL,
        member_name TEXT NOT NULL,
        category TEXT NOT NULL,
        content TEXT NOT NULL,
        hours REAL NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
    ''')

    # 4. 일정/캘린더 테이블 (심화 확장)
    cur.execute('''
    CREATE TABLE IF NOT EXISTS schedules (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        start_date TEXT NOT NULL,
        end_date TEXT,
        member_name TEXT NOT NULL,
        category TEXT DEFAULT '회의',
        color TEXT DEFAULT '#8b5cf6',
        memo TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
    ''')

    # 5. 이미지/자료 아카이브 테이블 (심화 확장: 보관, 미리보기, 삭제)
    cur.execute('''
    CREATE TABLE IF NOT EXISTS gallery (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        filename TEXT NOT NULL,
        uploader TEXT NOT NULL,
        memo TEXT,
        filesize INTEGER,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
    ''')

    conn.commit()

    # 초기 가상 데이터 주입 (DB가 비어있을 때)
    cur.execute("SELECT COUNT(*) FROM members")
    if cur.fetchone()[0] == 0:
        # 팀원 4명
        dummy_members = [
            ('채경원', 'AI혁신파트', '파트장', '#8b5cf6'),
            ('김민수', 'AI혁신파트', '선임연구원', '#06b6d4'),
            ('이지은', '솔루션파트', '책임엔지니어', '#ec4899'),
            ('박준형', '솔루션파트', '데이터분석가', '#10b981')
        ]
        cur.executemany("INSERT INTO members (name, part, role, avatar_color) VALUES (?, ?, ?, ?)", dummy_members)

        # 오늘 및 날짜 계산
        today = datetime.date.today()
        d_m3 = (today - datetime.timedelta(days=3)).strftime('%Y-%m-%d')
        d_m1 = (today - datetime.timedelta(days=1)).strftime('%Y-%m-%d')
        d_today = today.strftime('%Y-%m-%d')
        d_p2 = (today + datetime.timedelta(days=2)).strftime('%Y-%m-%d')
        d_p5 = (today + datetime.timedelta(days=5)).strftime('%Y-%m-%d')

        # 할 일 8건 (지연 2건, 오늘마감 2건, 진행중 2건, 완료 2건)
        dummy_tasks = [
            ('AI 바이브코딩 대시보드 심화 템플릿 완성', '채경원', 'AI혁신파트', '대시보드26', '높음', d_today, '진행중', d_m3, None, None),
            ('SQLite DB 스키마 및 자동 백업 설계', '채경원', 'AI혁신파트', '인프라구축', '높음', d_p2, '완료', d_m3, d_m1, None),
            ('Chart.js 기반 팀 통계 대시보드 연동', '김민수', 'AI혁신파트', '대시보드26', '보통', d_m1, '진행중', d_m3, None, None),  # 지연
            ('사내망 0.0.0.0 팀 공유 모드 네트워크 테스트', '김민수', 'AI혁신파트', '인프라구축', '보통', d_today, '진행중', d_m1, None, None),
            ('엑셀 업무일지 openpyxl 일괄 업로드 파서 구현', '이지은', '솔루션파트', '업무자동화', '높음', d_m1, '진행중', d_m3, None, None),  # 지연
            ('주간보고 엑셀 시트 자동생성 양식 포맷팅', '이지은', '솔루션파트', '업무자동화', '보통', d_p5, '완료', d_m3, d_today, None),
            ('부서별 완료율 및 지연 건수 인터랙티브 차트', '박준형', '솔루션파트', 'BI시각화', '보통', d_p2, '진행중', d_m1, None, None),
            ('팀원별 업무일지 소요시간 비율 집계 API', '박준형', '솔루션파트', 'BI시각화', '낮음', d_p5, '진행중', d_today, None, None)
        ]
        cur.executemany('''
        INSERT INTO tasks (title, assignee, part, project, priority, due_date, status, created_at, completed_at, image_url)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', dummy_tasks)

        # 업무일지 10건
        dummy_logs = [
            (d_today, '채경원', '개발', '대시보드 26 풀스택 아키텍처 및 DB 구조 설계', 4.0),
            (d_today, '채경원', '기획', '바이브코딩 초보자 가이드 및 GEMINI.md 지침 정리', 3.5),
            (d_today, '김민수', '개발', 'Chart.js 주간 트렌드 차트 및 반응형 UI 구현', 5.0),
            (d_m1, '김민수', '회의', '팀 공유 모드 방화벽 오픈 및 포트 바인딩 협의', 2.0),
            (d_m1, '이지은', '개발', 'openpyxl 엑셀 템플릿 다운로드 및 파싱 엔진', 6.0),
            (d_today, '이지은', '보고', '파트별 주간 업무 취합 및 자동화 보고서 테스트', 2.5),
            (d_m1, '박준형', '분석', '파트별 소요시간 데이터 분석 및 통계 API 작성', 4.5),
            (d_today, '박준형', '개발', '30초 주기 실시간 현황 자동 갱신 로직 검증', 3.0),
            (d_m3, '채경원', '교육', 'Gemini CLI 심화 과정 교재 프롬프트 검토', 4.0),
            (d_m3, '김민수', '연구', '경량 SQLite 트랜잭션 충돌 방지 기법 조사', 3.0)
        ]
        cur.executemany('''
        INSERT INTO worklogs (log_date, member_name, category, content, hours)
        VALUES (?, ?, ?, ?, ?)
        ''', dummy_logs)

        # 일정 3건
        dummy_schedules = [
            ('대시보드 심화 과정 발표 및 시연회', d_today, d_today, '채경원', '세미나', '#8b5cf6', '온/오프라인 동시 진행'),
            ('파트 주간 실적 보고 회의', d_p2, d_p2, '이지은', '회의', '#ec4899', '회의실 A 및 줌 연결'),
            ('신규 AI 솔루션 인프라 점검', d_p5, d_p5, '김민수', '점검', '#06b6d4', '서버 재부팅 및 백업 검증')
        ]
        cur.executemany('''
        INSERT INTO schedules (title, start_date, end_date, member_name, category, color, memo)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        ''', dummy_schedules)

        conn.commit()

    conn.close()

# -------------------------------------------------------------
# 3. 뷰 라우트
# -------------------------------------------------------------
@app.route('/')
@app.route('/dashboard26/')
def index():
    return render_template('index.html')

@app.route('/uploads/<path:filename>')
@app.route('/dashboard26/uploads/<path:filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# -------------------------------------------------------------
# 4. REST API 엔드포인트
# -------------------------------------------------------------

# [요약 통계 카드 API (홈)]
@app.route('/api/summary', methods=['GET'])
@app.route('/dashboard26/api/summary', methods=['GET'])
def get_summary():
    conn = get_db()
    cur = conn.cursor()
    today_str = datetime.date.today().strftime('%Y-%m-%d')

    cur.execute("SELECT COUNT(*) FROM tasks")
    total_tasks = cur.fetchone()[0]

    cur.execute("SELECT COUNT(*) FROM tasks WHERE status != '완료' AND due_date = ?", (today_str,))
    due_today = cur.fetchone()[0]

    cur.execute("SELECT COUNT(*) FROM tasks WHERE status != '완료' AND due_date < ?", (today_str,))
    overdue = cur.fetchone()[0]

    # 이번 주 완료 계산 (월~일)
    today = datetime.date.today()
    start_of_week = (today - datetime.timedelta(days=today.weekday())).strftime('%Y-%m-%d')
    cur.execute("SELECT COUNT(*) FROM tasks WHERE status = '완료' AND completed_at >= ?", (start_of_week,))
    week_completed = cur.fetchone()[0]

    conn.close()
    return jsonify({
        'total': total_tasks,
        'due_today': due_today,
        'overdue': overdue,
        'week_completed': week_completed
    })

# [팀원 API]
@app.route('/api/members', methods=['GET', 'POST'])
@app.route('/dashboard26/api/members', methods=['GET', 'POST'])
def handle_members():
    conn = get_db()
    cur = conn.cursor()
    if request.method == 'POST':
        data = request.json or {}
        name = data.get('name', '').strip()
        part = data.get('part', '기본파트').strip()
        role = data.get('role', '파트원').strip()
        color = data.get('color', '#8b5cf6')
        if not name:
            return jsonify({'error': '팀원 이름을 입력해주세요.'}), 400
        try:
            cur.execute("INSERT INTO members (name, part, role, avatar_color) VALUES (?, ?, ?, ?)", (name, part, role, color))
            conn.commit()
            return jsonify({'message': f'{name} 팀원이 추가되었습니다.'})
        except sqlite3.IntegrityError:
            return jsonify({'error': '이미 존재하는 팀원 이름입니다.'}), 400
        finally:
            conn.close()

    cur.execute("SELECT * FROM members ORDER BY id ASC")
    members = [dict(row) for row in cur.fetchall()]
    conn.close()
    return jsonify(members)

# [할 일 API (CRUD)]
@app.route('/api/tasks', methods=['GET', 'POST'])
@app.route('/dashboard26/api/tasks', methods=['GET', 'POST'])
def handle_tasks():
    conn = get_db()
    cur = conn.cursor()

    if request.method == 'POST':
        data = request.json or {}
        title = data.get('title', '').strip()
        assignee = data.get('assignee', '').strip()
        part = data.get('part', '공통')
        project = data.get('project', '일반업무')
        priority = data.get('priority', '보통')
        due_date = data.get('due_date', datetime.date.today().strftime('%Y-%m-%d'))
        image_url = data.get('image_url')

        if not title or not assignee:
            return jsonify({'error': '제목과 담당자를 입력해주세요.'}), 400

        created_at = datetime.date.today().strftime('%Y-%m-%d')
        cur.execute('''
        INSERT INTO tasks (title, assignee, part, project, priority, due_date, status, created_at, completed_at, image_url)
        VALUES (?, ?, ?, ?, ?, ?, '진행중', ?, NULL, ?)
        ''', (title, assignee, part, project, priority, due_date, created_at, image_url))
        conn.commit()
        task_id = cur.lastrowid
        conn.close()
        return jsonify({'message': '할 일이 등록되었습니다.', 'id': task_id})

    # GET 요청 (필터: assignee, status, priority, search)
    assignee = request.args.get('assignee')
    status = request.args.get('status')
    search = request.args.get('search')

    query = "SELECT * FROM tasks WHERE 1=1"
    params = []

    if assignee and assignee != '전체':
        query += " AND assignee = ?"
        params.append(assignee)
    if status and status != '전체':
        query += " AND status = ?"
        params.append(status)
    if search:
        query += " AND (title LIKE ? OR project LIKE ?)"
        params.extend([f"%{search}%", f"%{search}%"])

    query += " ORDER BY CASE WHEN status = '진행중' THEN 0 ELSE 1 END, due_date ASC, id DESC"
    cur.execute(query, params)
    tasks = [dict(row) for row in cur.fetchall()]
    conn.close()
    return jsonify(tasks)

@app.route('/api/tasks/<int:task_id>', methods=['PATCH', 'DELETE', 'PUT'])
@app.route('/dashboard26/api/tasks/<int:task_id>', methods=['PATCH', 'DELETE', 'PUT'])
def task_detail(task_id):
    conn = get_db()
    cur = conn.cursor()

    if request.method == 'DELETE':
        cur.execute("DELETE FROM tasks WHERE id = ?", (task_id,))
        conn.commit()
        conn.close()
        return jsonify({'message': '할 일이 삭제되었습니다.'})

    data = request.json or {}
    if 'status' in data:
        status = data['status']
        completed_at = datetime.date.today().strftime('%Y-%m-%d') if status == '완료' else None
        cur.execute("UPDATE tasks SET status = ?, completed_at = ? WHERE id = ?", (status, completed_at, task_id))
    
    if 'assignee' in data:
        cur.execute("UPDATE tasks SET assignee = ? WHERE id = ?", (data['assignee'], task_id))

    if 'priority' in data:
        cur.execute("UPDATE tasks SET priority = ? WHERE id = ?", (data['priority'], task_id))

    if 'due_date' in data:
        cur.execute("UPDATE tasks SET due_date = ? WHERE id = ?", (data['due_date'], task_id))

    conn.commit()
    conn.close()
    return jsonify({'message': '할 일이 업데이트되었습니다.'})

# [팀 현황판 API (STEP 05)]
@app.route('/api/team-status', methods=['GET'])
@app.route('/dashboard26/api/team-status', methods=['GET'])
def team_status():
    conn = get_db()
    cur = conn.cursor()
    today_str = datetime.date.today().strftime('%Y-%m-%d')
    start_of_week = (datetime.date.today() - datetime.timedelta(days=datetime.date.today().weekday())).strftime('%Y-%m-%d')

    cur.execute("SELECT * FROM members ORDER BY part ASC, name ASC")
    members = [dict(row) for row in cur.fetchall()]

    result = []
    for m in members:
        name = m['name']
        cur.execute("SELECT COUNT(*) FROM tasks WHERE assignee = ? AND status != '완료'", (name,))
        in_progress = cur.fetchone()[0]

        cur.execute("SELECT COUNT(*) FROM tasks WHERE assignee = ? AND status = '완료' AND completed_at >= ?", (name, start_of_week))
        week_completed = cur.fetchone()[0]

        cur.execute("SELECT COUNT(*) FROM tasks WHERE assignee = ? AND status != '완료' AND due_date < ?", (name, today_str))
        overdue = cur.fetchone()[0]

        cur.execute("SELECT COUNT(*) FROM tasks WHERE assignee = ?", (name,))
        total = cur.fetchone()[0]

        cur.execute("SELECT COUNT(*) FROM tasks WHERE assignee = ? AND status = '완료'", (name,))
        all_completed = cur.fetchone()[0]

        rate = int((all_completed / total * 100)) if total > 0 else 0

        # 해당 팀원의 최근 할 일 5개
        cur.execute("SELECT * FROM tasks WHERE assignee = ? ORDER BY id DESC LIMIT 5", (name,))
        recent_tasks = [dict(r) for r in cur.fetchall()]

        result.append({
            'member': m,
            'in_progress': in_progress,
            'week_completed': week_completed,
            'overdue': overdue,
            'rate': rate,
            'tasks': recent_tasks
        })

    conn.close()
    return jsonify(result)

# [업무일지 API (STEP 06)]
@app.route('/api/worklogs', methods=['GET', 'POST'])
@app.route('/dashboard26/api/worklogs', methods=['GET', 'POST'])
def handle_worklogs():
    conn = get_db()
    cur = conn.cursor()

    if request.method == 'POST':
        data = request.json or {}
        log_date = data.get('log_date', datetime.date.today().strftime('%Y-%m-%d'))
        member_name = data.get('member_name', '').strip()
        category = data.get('category', '개발')
        content = data.get('content', '').strip()
        try:
            hours = float(data.get('hours', 1.0))
        except ValueError:
            hours = 1.0

        if not member_name or not content:
            return jsonify({'error': '팀원 이름과 업무 내용을 입력해주세요.'}), 400

        cur.execute('''
        INSERT INTO worklogs (log_date, member_name, category, content, hours)
        VALUES (?, ?, ?, ?, ?)
        ''', (log_date, member_name, category, content, hours))
        conn.commit()
        conn.close()
        return jsonify({'message': '업무일지가 저장되었습니다.'})

    cur.execute("SELECT * FROM worklogs ORDER BY log_date DESC, id DESC LIMIT 100")
    logs = [dict(row) for row in cur.fetchall()]
    conn.close()
    return jsonify(logs)

# [엑셀 양식 다운로드 (STEP 06)]
@app.route('/api/worklogs/excel-template', methods=['GET'])
@app.route('/dashboard26/api/worklogs/excel-template', methods=['GET'])
def download_excel_template():
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "업무일지_양식"
    ws.append(["날짜(YYYY-MM-DD)", "팀원명", "업무구분(개발/기획/회의/보고/연구/기타)", "업무내용", "소요시간(숫자)"])
    ws.append([datetime.date.today().strftime('%Y-%m-%d'), "채경원", "개발", "대시보드 SQLite 연동 및 엑셀 기능 구현", 4.0])
    
    out = BytesIO()
    wb.save(out)
    out.seek(0)
    return send_file(out, download_name="업무일지_업로드양식.xlsx", as_attachment=True, mimetype="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")

# [엑셀 업로드 및 일괄 등록 (STEP 06)]
@app.route('/api/worklogs/excel-upload', methods=['POST'])
@app.route('/dashboard26/api/worklogs/excel-upload', methods=['POST'])
def upload_excel_worklogs():
    if 'file' not in request.files:
        return jsonify({'error': '파일이 제공되지 않았습니다.'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': '선택된 파일이 없습니다.'}), 400

    try:
        wb = openpyxl.load_workbook(file, data_only=True)
        ws = wb.active
        rows = list(ws.iter_rows(values_only=True))
        if len(rows) < 2:
            return jsonify({'error': '데이터 행이 비어 있습니다.'}), 400

        preview = []
        errors = []
        commit_now = request.form.get('commit', 'false').lower() == 'true'

        conn = get_db()
        cur = conn.cursor()

        valid_entries = []
        for idx, row in enumerate(rows[1:], start=2):
            if not any(row):
                continue
            log_date = str(row[0]).strip()[:10] if len(row) > 0 and row[0] else ''
            member = str(row[1]).strip() if len(row) > 1 and row[1] else ''
            category = str(row[2]).strip() if len(row) > 2 and row[2] else '기타'
            content = str(row[3]).strip() if len(row) > 3 and row[3] else ''
            hours_val = row[4] if len(row) > 4 else 1.0

            try:
                hours = float(hours_val)
            except (ValueError, TypeError):
                errors.append(f"{idx}행: 소요시간({hours_val})이 올바른 숫자가 아닙니다.")
                continue

            if not member or not content:
                errors.append(f"{idx}행: 팀원명 또는 내용이 누락되었습니다.")
                continue

            valid_entries.append((log_date, member, category, content, hours))
            preview.append({
                'row': idx,
                'log_date': log_date,
                'member': member,
                'category': category,
                'content': content,
                'hours': hours
            })

        if commit_now and not errors:
            cur.executemany('''
            INSERT INTO worklogs (log_date, member_name, category, content, hours)
            VALUES (?, ?, ?, ?, ?)
            ''', valid_entries)
            conn.commit()
            conn.close()
            return jsonify({'success': True, 'count': len(valid_entries), 'message': f'{len(valid_entries)}건이 DB에 저장되었습니다.'})

        conn.close()
        return jsonify({
            'preview': preview,
            'errors': errors,
            'total_valid': len(valid_entries)
        })
    except Exception as e:
        return jsonify({'error': f'엑셀 분석 오류: {str(e)}'}), 500

# [통계 차트 API (STEP 07)]
@app.route('/api/stats', methods=['GET'])
@app.route('/dashboard26/api/stats', methods=['GET'])
def get_stats():
    period = request.args.get('period', 'week')  # week, month, all
    conn = get_db()
    cur = conn.cursor()

    # 1. 팀원별 완료 건수
    cur.execute('''
    SELECT assignee, COUNT(*) as cnt 
    FROM tasks 
    WHERE status = '완료' 
    GROUP BY assignee 
    ORDER BY cnt DESC
    ''')
    assignee_stats = [dict(r) for r in cur.fetchall()]

    # 2. 업무 구분별 소요 시간 비율
    cur.execute('''
    SELECT category, SUM(hours) as total_hours 
    FROM worklogs 
    GROUP BY category 
    ORDER BY total_hours DESC
    ''')
    category_stats = [dict(r) for r in cur.fetchall()]

    # 3. 최근 4주 주간 완료 추이
    today = datetime.date.today()
    weekly_trend = []
    for w in range(3, -1, -1):
        start = today - datetime.timedelta(days=today.weekday() + w * 7)
        end = start + datetime.timedelta(days=6)
        s_str, e_str = start.strftime('%Y-%m-%d'), end.strftime('%Y-%m-%d')
        cur.execute("SELECT COUNT(*) FROM tasks WHERE status = '완료' AND completed_at BETWEEN ? AND ?", (s_str, e_str))
        count = cur.fetchone()[0]
        weekly_trend.append({
            'label': f'{start.strftime("%m/%d")}~{end.strftime("%m/%d")}',
            'completed': count
        })

    conn.close()
    return jsonify({
        'assignee_stats': assignee_stats,
        'category_stats': category_stats,
        'weekly_trend': weekly_trend
    })

# [주간보고 생성 및 엑셀 다운로드 (STEP 08)]
@app.route('/api/weekly-report', methods=['GET'])
@app.route('/dashboard26/api/weekly-report', methods=['GET'])
def weekly_report():
    conn = get_db()
    cur = conn.cursor()

    cur.execute("SELECT * FROM members ORDER BY name ASC")
    members = [dict(r) for r in cur.fetchall()]

    report = []
    for m in members:
        name = m['name']
        cur.execute("SELECT title FROM tasks WHERE assignee = ? AND status = '완료'", (name,))
        done_tasks = [r['title'] for r in cur.fetchall()]

        cur.execute("SELECT title FROM tasks WHERE assignee = ? AND status != '완료' AND due_date >= date('now')", (name,))
        ongoing_tasks = [r['title'] for r in cur.fetchall()]

        cur.execute("SELECT title FROM tasks WHERE assignee = ? AND status != '완료' AND due_date < date('now')", (name,))
        delayed_tasks = [r['title'] for r in cur.fetchall()]

        cur.execute("SELECT category, SUM(hours) as th FROM worklogs WHERE member_name = ? GROUP BY category", (name,))
        hours_by_cat = {r['category']: r['th'] for r in cur.fetchall()}

        report.append({
            'member': name,
            'part': m['part'],
            'done': done_tasks,
            'ongoing': ongoing_tasks,
            'delayed': delayed_tasks,
            'hours': hours_by_cat
        })

    conn.close()
    return jsonify(report)

@app.route('/api/weekly-report/excel', methods=['GET'])
@app.route('/dashboard26/api/weekly-report/excel', methods=['GET'])
def download_weekly_report_excel():
    wb = openpyxl.Workbook()
    wb.remove(wb.active)  # 기본 시트 제거

    conn = get_db()
    cur = conn.cursor()
    cur.execute("SELECT DISTINCT name FROM members ORDER BY name ASC")
    members = [r['name'] for r in cur.fetchall()]

    for name in members:
        ws = wb.create_sheet(title=f"{name}_보고")
        ws.append(["구분", "업무 내용", "상태"])

        cur.execute("SELECT title, '완료' as st FROM tasks WHERE assignee = ? AND status = '완료'", (name,))
        for r in cur.fetchall():
            ws.append(["완료 업무", r['title'], r['st']])

        cur.execute("SELECT title, '진행중' as st FROM tasks WHERE assignee = ? AND status != '완료' AND due_date >= date('now')", (name,))
        for r in cur.fetchall():
            ws.append(["진행 업무", r['title'], r['st']])

        cur.execute("SELECT title, '지연' as st FROM tasks WHERE assignee = ? AND status != '완료' AND due_date < date('now')", (name,))
        for r in cur.fetchall():
            ws.append(["지연 업무", r['title'], r['st']])

    conn.close()
    out = BytesIO()
    wb.save(out)
    out.seek(0)
    return send_file(out, download_name=f"팀주간보고_{datetime.date.today().strftime('%Y%m%d')}.xlsx", as_attachment=True, mimetype="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")

# [심화 확장: 이미지/자료 갤러리 아카이브 API (보관 및 삭제)]
@app.route('/api/gallery', methods=['GET', 'POST'])
@app.route('/dashboard26/api/gallery', methods=['GET', 'POST'])
def handle_gallery():
    conn = get_db()
    cur = conn.cursor()

    if request.method == 'POST':
        if 'image' not in request.files:
            return jsonify({'error': '이미지 파일이 없습니다.'}), 400
        file = request.files['image']
        title = request.form.get('title', '무제 이미지').strip()
        uploader = request.form.get('uploader', '채경원').strip()
        memo = request.form.get('memo', '').strip()

        if file.filename == '':
            return jsonify({'error': '선택된 파일이 없습니다.'}), 400

        ext = os.path.splitext(file.filename)[1].lower()
        if ext not in ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']:
            return jsonify({'error': '허용되지 않는 이미지 형식입니다.'}), 400

        fname = f"{datetime.datetime.now().strftime('%Y%m%d_%H%M%S')}_{secure_filename(file.filename)}"
        save_path = os.path.join(app.config['UPLOAD_FOLDER'], fname)
        file.save(save_path)
        filesize = os.path.getsize(save_path)

        cur.execute('''
        INSERT INTO gallery (title, filename, uploader, memo, filesize)
        VALUES (?, ?, ?, ?, ?)
        ''', (title, fname, uploader, memo, filesize))
        conn.commit()
        item_id = cur.lastrowid
        conn.close()
        return jsonify({'message': '이미지가 저장되었습니다.', 'id': item_id, 'filename': fname})

    cur.execute("SELECT * FROM gallery ORDER BY id DESC")
    items = [dict(r) for r in cur.fetchall()]
    conn.close()
    return jsonify(items)

@app.route('/api/gallery/<int:item_id>', methods=['DELETE'])
@app.route('/dashboard26/api/gallery/<int:item_id>', methods=['DELETE'])
def delete_gallery_item(item_id):
    conn = get_db()
    cur = conn.cursor()
    cur.execute("SELECT filename FROM gallery WHERE id = ?", (item_id,))
    row = cur.fetchone()
    if not row:
        conn.close()
        return jsonify({'error': '항목을 찾을 수 없습니다.'}), 404

    fname = row['filename']
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], fname)
    if os.path.exists(filepath):
        try:
            os.remove(filepath)
        except Exception:
            pass

    cur.execute("DELETE FROM gallery WHERE id = ?", (item_id,))
    conn.commit()
    conn.close()
    return jsonify({'message': '이미지가 영구 삭제되었습니다.'})

# [심화 확장: 팀 일정 캘린더 API]
@app.route('/api/schedules', methods=['GET', 'POST'])
@app.route('/dashboard26/api/schedules', methods=['GET', 'POST'])
def handle_schedules():
    conn = get_db()
    cur = conn.cursor()

    if request.method == 'POST':
        data = request.json or {}
        title = data.get('title', '').strip()
        start_date = data.get('start_date', datetime.date.today().strftime('%Y-%m-%d'))
        end_date = data.get('end_date', start_date)
        member_name = data.get('member_name', '공통')
        category = data.get('category', '회의')
        color = data.get('color', '#8b5cf6')
        memo = data.get('memo', '')

        if not title:
            return jsonify({'error': '일정 제목을 입력해주세요.'}), 400

        cur.execute('''
        INSERT INTO schedules (title, start_date, end_date, member_name, category, color, memo)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        ''', (title, start_date, end_date, member_name, category, color, memo))
        conn.commit()
        conn.close()
        return jsonify({'message': '일정이 추가되었습니다.'})

    cur.execute("SELECT * FROM schedules ORDER BY start_date ASC")
    schedules = [dict(r) for r in cur.fetchall()]
    conn.close()
    return jsonify(schedules)

@app.route('/api/schedules/<int:sched_id>', methods=['DELETE'])
@app.route('/dashboard26/api/schedules/<int:sched_id>', methods=['DELETE'])
def delete_schedule(sched_id):
    conn = get_db()
    cur = conn.cursor()
    cur.execute("DELETE FROM schedules WHERE id = ?", (sched_id,))
    conn.commit()
    conn.close()
    return jsonify({'message': '일정이 삭제되었습니다.'})

# [DB 백업 목록 및 수동 백업 트리거 API]
@app.route('/api/backup/list', methods=['GET'])
@app.route('/dashboard26/api/backup/list', methods=['GET'])
def get_backups():
    files = sorted([f for f in os.listdir(BACKUP_DIR) if f.startswith('dashboard_') and f.endswith('.db')], reverse=True)
    list_info = []
    for f in files:
        fpath = os.path.join(BACKUP_DIR, f)
        stat = os.stat(fpath)
        list_info.append({
            'filename': f,
            'size': stat.st_size,
            'modified': datetime.datetime.fromtimestamp(stat.st_mtime).strftime('%Y-%m-%d %H:%M:%S')
        })
    return jsonify(list_info)

@app.route('/api/backup/trigger', methods=['POST'])
@app.route('/dashboard26/api/backup/trigger', methods=['POST'])
def trigger_backup():
    backup_database()
    return jsonify({'message': '데이터베이스 백업이 완료되었습니다.'})

# -------------------------------------------------------------
# 5. 서버 기동
# -------------------------------------------------------------
if __name__ == '__main__':
    init_db()
    backup_database()

    # 사내망 팀 공유 모드 지원 (CLI 인자 --team 또는 환경변수 TEAM_SHARE=1)
    team_mode = '--team' in sys.argv or os.environ.get('TEAM_SHARE') == '1'
    host = '0.0.0.0' if team_mode else '127.0.0.1'
    port = int(os.environ.get('PORT', 10211))

    print("=" * 60)
    print(f"🚀 [Gemini CLI 대시보드 심화] 서버가 시작되었습니다.")
    print(f"📌 모드: {'[팀 공유 모드 (외부망/사내망 접속 가능)]' if team_mode else '[내 PC 전용 모드]'}")
    print(f"🔗 로컬 접속: http://127.0.0.1:{port}/")
    print(f"🔗 kwBoard Nginx 라우팅: /dashboard26/")
    print(f"📂 백업 저장소: {BACKUP_DIR}")
    print("=" * 60)

    app.run(host=host, port=port, debug=False)
