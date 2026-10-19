# ⚡ Gemini CLI 대시보드 심화 (dashboard26)

> **바이브코딩(Vibe Coding) 심화 실습을 위한 팀 업무 관제 풀스택 대시보드**  
> AI(Gemini CLI)와 대화하며 SQLite 백엔드, openpyxl 엑셀 자동화, Chart.js 통계 시각화, 이미지 보관함, 일정 캘린더까지 완성하는 실전 마스터 패키지입니다.

---

## 🌟 주요 기능 하이라이트
1. **홈 관제 센터**: 팀 전체 할 일, 오늘 마감, 지연 건수, 이번 주 완료 4대 지표 실시간 연동
2. **팀 할 일 관리 & '나는 누구?'**: 브라우저별 사용자 기억, 내 할 일만 보기, 마감 지연 감지 태그
3. **실시간 팀 현황판**: 팀원별 진척률 프로그레스 바, 지연 발생 시 레드 테두리 강조, 30초 자동 동기화, TV 모드 지원
4. **업무일지 & 엑셀 일괄 업로드**: openpyxl 엔진 탑재, 양식 다운로드, 유효성 검사 미리보기 후 SQLite 원클릭 등록
5. **Chart.js 통계 & 주간보고**: 팀원별 완료 막대 차트, 업무별 투입시간 도넛 차트, 4주 추이 선 그래프, 주간보고 원클릭 텍스트 복사 및 엑셀 다운로드
6. **[심화] 이미지 아카이브**: 스크린샷 및 도면 업로드/보관/삭제 물리 파일 및 DB 동기화
7. **[심화] 팀 일정 캘린더**: 회의, 출장, 마감 일정 통합 관리
8. **[운영] 자동 백업 & 사내망 공유**: `start.bat` (로컬) 및 `start_team.bat` (0.0.0.0 팀 공유 모드), `backup/` 최근 7회 롤링 백업

---

## 🚀 윈도우 환경 실행 방법 (초보자 1초 컷)

### 1) 내 PC 전용 모드
- `start.bat` 파일을 더블클릭합니다.
- 자동으로 가상환경이 확인되고 브라우저(`http://127.0.0.1:10211/`)가 열립니다.

### 2) 사내망 팀원 공유 모드
- `start_team.bat` 파일을 더블클릭합니다.
- 내 컴퓨터의 사내 IP(예: `http://172.30.1.70:10211/`)가 터미널에 표시되며, 팀원 브라우저에서 동일하게 접속하여 협업할 수 있습니다.

### 3) 서버 종료
- `stop.bat` 파일을 더블클릭하면 10211 포트의 Flask 서버가 안전하게 종료됩니다.

---

## 🐧 리눅스 / macOS 환경 실행 방법
```bash
# 가상환경 생성 및 패키지 설치
python3 -m venv venv
./venv/bin/pip install -r requirements.txt

# 서비스 시작 (manage.sh)
./manage.sh start

# 서비스 상태 확인
./manage.sh status

# 서비스 중지
./manage.sh stop
```

---

## 📚 교재 단계별 프롬프트 가이드 (STEP 01 ~ 11)
- 교재 PPT에 수록된 모든 Gemini CLI 프롬프트와 나만의 변형 미션은 프로젝트 내 `GEMINI.md`와 GitHub Pages 웹 튜토리얼(`docs/index.html`)에서 언제든지 복사하여 실습할 수 있습니다.
- 초보자 눈높이의 데이터베이스 해설은 `DATABASE_GUIDE.md`를 참고하세요.

---

## 📂 폴더 구조
```
dashboard26/
├── app.py                  # Flask 메인 서버 & REST API 백엔드
├── requirements.txt        # 의존성 패키지 (flask, openpyxl, pillow)
├── GEMINI.md               # 바이브코딩 프로젝트 규칙 지침서
├── README.md               # 본 설명서
├── DATABASE_GUIDE.md       # 초보자를 위한 SQLite DB 완벽 해설서
├── manage.sh               # 리눅스 서비스 관리 스크립트
├── start.bat               # 윈도우 로컬 원클릭 실행기
├── start_team.bat          # 윈도우 사내망 공유 실행기
├── stop.bat                # 윈도우 종료 스크립트
├── dashboard.db            # SQLite 단일 파일 데이터베이스
├── backup/                 # 날짜/시간별 DB 자동 백업 저장소
├── uploads/                # 첨부 이미지 파일 저장소
├── templates/
│   └── index.html          # 메인 대시보드 뷰
├── static/
│   ├── style.css           # Blueprint-Hub 다크 글래스모피즘 스타일
│   └── app.js              # SPA 라우팅 및 Chart.js 로직
└── docs/                   # GitHub Pages용 인터랙티브 가이드 & 시뮬레이터
    ├── index.html
    ├── style.css
    └── demo.js
```
