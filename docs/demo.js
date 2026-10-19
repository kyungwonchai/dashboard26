// demo.js - PPT STEP 01~11 전체 커리큘럼 데이터 및 단계별 가상 시뮬레이터

const CURRICULUM = [
  {
    step: "STEP 01",
    part: "PART 1 · 서버의 뼈대 세우기",
    title: "프로젝트 규칙 GEMINI.md",
    desc: "바이브코딩의 핵심은 '규칙을 먼저 파일로 정해두는 것'입니다. AI가 매번 규칙을 읽고 일관되게 행동하도록 프롬프트를 입력합니다.",
    prompt: `이 폴더에서 우리 파트가 함께 쓰는 '팀 업무 대시보드' 웹앱을 단계별로 만들 거야.\n먼저 프로젝트 규칙 파일 GEMINI.md를 만들어줘.\n- 기술: Python Flask + SQLite, 화면은 HTML·CSS·JavaScript, 차트는 Chart.js\n- 화면 글자와 코드 주석은 모두 한국어로\n- 작업 전에 무엇을 바꿀지 3줄 이내로 먼저 설명하기\n- 파일을 고치기 전에 backup 폴더에 날짜·시간별로 복사본 남기기\n- 기능을 추가해도 기존 기능과 데이터는 절대 지우지 않기\n- 실행 방법과 기능 목록은 README.md에 계속 기록하기\n- 아직 코드는 만들지 마`,
    mission: "팀 이름과 대시보드 이름을 내 파트 이름으로 GEMINI.md에 추가해보세요.",
    render: () => `
      <div style="padding:20px; text-align:center;">
        <div style="font-size:48px; margin-bottom:12px;">📄</div>
        <h3 style="font-size:18px; margin-bottom:8px;">GEMINI.md 규칙 파일 생성 완료</h3>
        <p style="color:var(--text-muted); font-size:13px; max-width:500px; margin:0 auto 20px;">
          아직 웹 서버 코드는 작성되지 않았으며, AI(Gemini CLI)가 지켜야 할 5대 원칙(3줄 설명, 백업, 한글화, 데이터보존)이 설정된 단계입니다.
        </p>
        <div style="background:#0e1017; border:1px solid #1f2438; border-radius:8px; padding:16px; text-align:left; max-width:500px; margin:0 auto; font-family:monospace; font-size:12px; color:#a78bfa;">
          ✔ 기술 스택: Python Flask + SQLite<br>
          ✔ 안전 장치: backup/ 폴더 자동 생성<br>
          ✔ 규칙 파일: GEMINI.md 등록 완료
        </div>
      </div>
    `
  },
  {
    step: "STEP 02",
    part: "PART 1 · 서버의 뼈대 세우기",
    title: "서버와 화면 틀 잡기",
    desc: "Flask 서버를 띄우고 좌측 메뉴바와 상단 4대 요약 카드(홈)의 뼈대를 잡습니다.",
    prompt: `GEMINI.md 규칙에 맞춰 Flask 서버와 대시보드 화면 틀을 만들어줘.\n- 가상환경(venv)을 만들고 필요한 패키지는 requirements.txt로 관리\n- app.py, templates/index.html, static/style.css, static/app.js 구조로\n- 왼쪽 메뉴: 홈, 팀 할 일, 업무일지, 팀 현황, 통계 (누르면 페이지 이동 없이 본문만 바뀌게)\n- 홈에는 요약 카드 4개: 팀 전체 할 일, 오늘 마감, 지연, 이번 주 완료 (지금은 예시 숫자)\n- 서버는 내 PC에서만 접속되게 127.0.0.1:5000으로 실행\n- 설치와 서버 실행을 직접 해주고, 내가 브라우저에 입력할 주소를 알려줘`,
    mission: "메뉴 아이콘과 테마 색상을 내 취향에 맞게 수정해보세요.",
    render: () => `
      <div>
        <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:14px; margin-bottom:20px;">
          <div style="background:#0e1017; padding:16px; border-radius:8px; border:1px solid #23283b;">
            <div style="font-size:12px; color:#888;">팀 전체 할 일</div>
            <div style="font-size:24px; font-weight:700; margin-top:4px;">12</div>
          </div>
          <div style="background:#0e1017; padding:16px; border-radius:8px; border:1px solid #23283b;">
            <div style="font-size:12px; color:#888;">오늘 마감</div>
            <div style="font-size:24px; font-weight:700; color:#ef4444; margin-top:4px;">3</div>
          </div>
          <div style="background:#0e1017; padding:16px; border-radius:8px; border:1px solid #23283b;">
            <div style="font-size:12px; color:#888;">지연 건수</div>
            <div style="font-size:24px; font-weight:700; color:#f59e0b; margin-top:4px;">2</div>
          </div>
          <div style="background:#0e1017; padding:16px; border-radius:8px; border:1px solid #23283b;">
            <div style="font-size:12px; color:#888;">이번 주 완료</div>
            <div style="font-size:24px; font-weight:700; color:#10b981; margin-top:4px;">8</div>
          </div>
        </div>
        <p style="color:#aaa; font-size:13px; text-align:center;">
          📌 [STEP 02 상태] UI 레이아웃 뼈대가 완성되었으며, 예시(Mock) 숫자가 표시되는 단계입니다.
        </p>
      </div>
    `
  },
  {
    step: "STEP 03",
    part: "PART 2 · 데이터를 서버로",
    title: "데이터베이스(SQLite) 설계",
    desc: "서버가 꺼져도 데이터가 영구 보존되도록 단일 파일형 데이터베이스인 SQLite(dashboard.db)를 생성하고 초기 가상 데이터를 넣습니다.",
    prompt: `SQLite 데이터베이스 dashboard.db를 만들어줘.\n- 팀원 표: 이름, 소속 파트\n- 할 일 표: 제목, 담당자, 우선순위(높음/보통/낮음), 마감일, 상태, 등록일, 완료일\n- 업무일지 표: 날짜, 팀원, 업무 구분, 내용, 소요 시간\n- 서버가 시작될 때 DB가 없으면 자동으로 만들고, 가상의 예시 데이터를 넣어줘 (팀원 4명, 할 일 8건, 업무일지 10건)\n- 만든 표 구조를 나한테 표 형태로 쉽게 설명해줘`,
    mission: "할 일 표에 '프로젝트명' 칸을 추가하고 팀원을 늘려보세요.",
    render: () => `
      <div style="font-size:13px;">
        <h4 style="color:#06b6d4; margin-bottom:10px;">💾 생성된 SQLite 테이블 구조 (dashboard.db)</h4>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
          <div style="background:#0e1017; padding:12px; border-radius:8px; border:1px solid #222;">
            <b>1. members (팀원 4명)</b>
            <p style="color:#888; font-size:11px; margin-top:4px;">채경원(파트장), 김민수(선임), 이지은(책임), 박준형(분석)</p>
          </div>
          <div style="background:#0e1017; padding:12px; border-radius:8px; border:1px solid #222;">
            <b>2. tasks (할 일 8건)</b>
            <p style="color:#888; font-size:11px; margin-top:4px;">우선순위, 마감일, 상태, 완료일 자동 기록</p>
          </div>
          <div style="background:#0e1017; padding:12px; border-radius:8px; border:1px solid #222;">
            <b>3. worklogs (업무일지 10건)</b>
            <p style="color:#888; font-size:11px; margin-top:4px;">날짜, 팀원, 구분(개발/기획/회의 등), 투입시간</p>
          </div>
          <div style="background:#0e1017; padding:12px; border-radius:8px; border:1px solid #222;">
            <b>4. backup/ (자동 백업)</b>
            <p style="color:#888; font-size:11px; margin-top:4px;">서버 시작 시 dashboard_YYYYMMDD_HHMMSS.db 자동 보관</p>
          </div>
        </div>
      </div>
    `
  },
  {
    step: "STEP 04",
    part: "PART 2 · 데이터를 서버로",
    title: "팀 할 일 공유 & '나는 누구?' 필터",
    desc: "할 일 CRUD(등록/수정/삭제) API를 연결하고, '나는 누구?' 기능으로 내 업무만 모아보는 개인화 기능을 구현합니다.",
    prompt: `'팀 할 일' 화면을 DB와 연결해줘.\n- 서버에 할 일 조회·추가·수정·삭제 API를 만들어줘\n- 할 일을 추가할 때 담당자, 우선순위, 마감일을 고를 수 있게\n- 체크하면 완료 처리하고 완료일 기록, 마감이 지난 진행 중 할 일은 '지연' 표시\n- 화면 오른쪽 위에 '나는 누구?' 팀원 선택(브라우저에 기억)과 '내 할 일만 보기' 버튼\n- 홈의 요약 카드 4개를 실제 DB 숫자와 연결\n- 기존 기능과 데이터는 그대로 유지해줘`,
    mission: "담당자를 다른 팀원에게 넘기는 '담당자 변경' 기능을 추가해보세요.",
    render: () => `
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <span style="font-size:13px; font-weight:700;">📋 인터랙티브 가상 할 일 목록 (직접 체크해보세요)</span>
          <button class="btn btn-copy" style="font-size:11px; padding:4px 8px;" onclick="addSimTask()">+ 가상 할 일 추가</button>
        </div>
        <div id="sim-task-list" style="display:flex; flex-direction:column; gap:6px;"></div>
      </div>
    `
  },
  {
    step: "STEP 05",
    part: "PART 2 · 데이터를 서버로",
    title: "팀 현황판 (실시간 진척)",
    desc: "팀원별 진행률 막대그래프, 지연 발생 시 빨간색 테두리 강조, 30초 주기 자동 새로고침을 구현합니다.",
    prompt: `'팀 현황' 화면에 팀원별 현황판을 만들어줘.\n- 팀원마다 카드 하나: 진행 중, 이번 주 완료, 지연 건수\n- 카드 안에 완료율 진행 막대\n- 지연이 있는 팀원 카드는 테두리를 빨간색으로 강조\n- 카드를 누르면 그 팀원의 할 일 목록을 펼쳐 보기\n- 화면은 30초마다 자동으로 최신 데이터로 새로고침\n- 기존 기능과 데이터는 그대로 유지해줘`,
    mission: "사무실 대형 모니터용 'TV 모드' 버튼을 추가해보세요.",
    render: () => `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <div style="background:#0e1017; padding:14px; border-radius:8px; border:1px solid #23283b;">
          <div style="display:flex; justify-content:space-between;">
            <b>채경원 (AI혁신파트)</b>
            <span style="color:#10b981; font-size:11px;">순항중</span>
          </div>
          <div style="margin:8px 0; font-size:11px; color:#888;">완료율 100%</div>
          <div style="width:100%; height:6px; background:#222; border-radius:3px;"><div style="width:100%; height:100%; background:#8b5cf6;"></div></div>
        </div>
        <div style="background:#0e1017; padding:14px; border-radius:8px; border:1px solid #ef4444; box-shadow:0 0 10px rgba(239,68,68,0.2);">
          <div style="display:flex; justify-content:space-between;">
            <b>김민수 (AI혁신파트)</b>
            <span style="color:#ef4444; font-size:11px; font-weight:700;">지연 발생🚨</span>
          </div>
          <div style="margin:8px 0; font-size:11px; color:#888;">완료율 50% (지연 1건)</div>
          <div style="width:100%; height:6px; background:#222; border-radius:3px;"><div style="width:50%; height:100%; background:#ef4444;"></div></div>
        </div>
      </div>
    `
  },
  {
    step: "STEP 06",
    part: "PART 3 · 업무 자동화",
    title: "업무일지 & 엑셀 일괄 업로드",
    desc: "openpyxl 라이브러리를 활용해 엑셀 양식 다운로드, 엑셀 파일 검증(미리보기), DB 일괄 등록을 구현합니다.",
    prompt: `'업무일지' 화면을 만들고 엑셀 업로드 기능을 붙여줘.\n- 입력 폼: 날짜, 팀원, 업무 구분, 내용, 소요 시간 → DB에 저장, 아래 표에 최신순 표시\n- '양식 다운로드' 버튼: 같은 열 구성의 빈 엑셀 양식 제공\n- '엑셀 업로드' 버튼: 양식에 맞는 엑셀을 올리면 미리보기 표를 먼저 보여주고, 확인을 누르면 DB에 저장\n- 형식이 틀린 행은 몇 번째 행이 왜 틀렸는지 알려줘\n- 엑셀 처리는 openpyxl을 사용\n- 기존 기능과 데이터는 그대로 유지해줘`,
    mission: "중복된 데이터가 있을 경우 건너뛰는 필터를 넣어보세요.",
    render: () => `
      <div style="font-size:12px; color:#aaa; line-height:1.6;">
        <div style="background:#0e1017; border:1px dashed #3b82f6; border-radius:8px; padding:16px; text-align:center;">
          <p style="color:#38bdf8; font-weight:600; margin-bottom:6px;">📊 엑셀 일괄 파싱 엔진 (openpyxl)</p>
          <p>엑셀 시트 행을 읽어 날짜 유효성, 누락 항목, 소요시간 오류를 사전에 감지하고<br>정상인 행만 미리보기 테이블로 검토 후 SQLite에 원클릭 커밋합니다.</p>
        </div>
      </div>
    `
  },
  {
    step: "STEP 07",
    part: "PART 3 · 업무 자동화",
    title: "통계 차트 (Chart.js)",
    desc: "서버에서 집계한 통계 데이터를 Chart.js로 막대(팀원별 완료), 도넛(업무별 시간), 선(주간 추이) 그래프로 시각화합니다.",
    prompt: `'통계' 화면에 차트를 만들어줘. Chart.js를 사용해줘.\n- 서버에 통계용 API를 따로 만들어서 집계는 서버에서 처리\n- 차트1: 팀원별 이번 주 완료 건수 (막대)\n- 차트2: 업무 구분별 소요 시간 비율 (도넛)\n- 차트3: 최근 4주 주간 완료 추이 (선)\n- 위쪽에 기간 선택: 이번 주 / 이번 달 / 전체\n- 기존 기능과 데이터는 그대로 유지해줘`,
    mission: "차트를 PNG 이미지로 바로 내려받는 버튼을 추가해보세요.",
    render: () => `
      <div style="height:200px;">
        <canvas id="sim-chart-canvas"></canvas>
      </div>
    `
  },
  {
    step: "STEP 08",
    part: "PART 3 · 업무 자동화",
    title: "주간보고 자동 정리 & 엑셀 내보내기",
    desc: "버튼 클릭 한 번으로 팀원별 완료, 진행, 지연 업무를 표준 양식 텍스트로 생성하고 복사 및 엑셀 다운로드를 제공합니다.",
    prompt: `팀 데이터로 주간보고 초안을 만드는 기능을 추가해줘.\n- '통계' 화면에 '주간보고 만들기' 버튼과 주 선택\n- 정해진 문장 틀로 정리: 팀원별 완료 업무, 진행 중 업무, 지연 업무, 업무 구분별 소요 시간\n- 결과를 화면에 미리보기로 보여주고 '복사' 버튼 제공\n- '엑셀 다운로드' 버튼: 팀원별 시트로 나눈 주간보고 엑셀\n- 기존 기능과 데이터는 그대로 유지해줘`,
    mission: "팀원별 시트가 자동으로 분리된 엑셀 보고서를 생성해보세요.",
    render: () => `
      <div style="background:#0e1017; padding:12px; border-radius:8px; font-family:monospace; font-size:11px; color:#38bdf8; max-height:180px; overflow-y:auto;">
        📢 [AI 혁신 파트] 주간 업무 보고<br>
        [채경원]<br>
        1. 완료 업무: SQLite DB 스키마 설계, 바이브코딩 가이드<br>
        2. 진행 업무: 대시보드 26 템플릿 완성<br>
        [김민수]<br>
        1. 완료 업무: 네트워크 0.0.0.0 바인딩<br>
        2. 지연 업무: 🚨 Chart.js 주간 트렌드 차트 연동
      </div>
    `
  },
  {
    step: "STEP 09",
    part: "PART 4 · 팀 배포와 운영",
    title: "사내망 팀원 접속 열기 (--team 모드)",
    desc: "0.0.0.0 호스트 바인딩 옵션을 추가하여 같은 와이파이/사내망의 팀원들이 내 PC의 IP로 대시보드에 접속하게 만듭니다.",
    prompt: `같은 네트워크에 있는 팀원도 접속할 수 있게 설정해줘.\n- 서버를 0.0.0.0으로 열 수 있는 '팀 공유 모드' 실행 옵션을 추가 (기본값은 지금처럼 내 PC 전용)\n- 팀 공유 모드로 켜지면 내 PC의 IP 주소로 된 접속 주소를 터미널과 화면 하단에 표시\n- 접속이 안 될 때 확인할 것(방화벽, 같은 네트워크 여부)을 README.md에 정리\n- 방화벽 설정은 직접 바꾸지 말고 방법만 알려줘\n- 기존 기능과 데이터는 그대로 유지해줘`,
    mission: "화면 하단에 내 IP로 바로 들어올 수 있는 접속 QR코드를 띄워보세요.",
    render: () => `
      <div style="text-align:center; padding:16px;">
        <span style="font-size:32px;">🌐</span>
        <h4 style="margin:8px 0;">팀 공유 모드 활성화 완료</h4>
        <p style="font-size:12px; color:#aaa;">사내망 IP: <code style="color:#38bdf8;">http://172.30.1.70:10211/</code></p>
        <p style="font-size:11px; color:#888; margin-top:4px;">팀원 브라우저에서 위 주소를 입력하면 즉시 같은 화면을 공유합니다.</p>
      </div>
    `
  },
  {
    step: "STEP 10",
    part: "PART 4 · 팀 배포와 운영",
    title: "원클릭 실행(start.bat) & 자동 백업",
    desc: "더블클릭만으로 서버가 켜지고 브라우저가 자동으로 열리는 배치파일과, 실행 시마다 backup/ 폴더에 날짜별 DB를 백업하는 체계를 구축합니다.",
    prompt: `누구나 쉽게 실행하고 데이터가 안전하게 남도록 만들어줘.\n- start.bat: 가상환경 확인·준비 → 서버 실행 → 브라우저로 대시보드 자동 열기\n- start_team.bat: 같은 동작을 팀 공유 모드로\n- 서버가 시작될 때마다 dashboard.db를 backup 폴더에 날짜·시간 이름으로 자동 백업하고, 최근 7개만 남기기\n- 처음 받은 PC에서도 동작하도록 설치·실행 방법을 README.md에 단계별로 정리\n- PC 켤 때 자동 실행하는 방법은 설정하지 말고 설명만 README.md에 적어줘`,
    mission: "서버를 안전하게 끄는 stop.bat과 즉시 백업 버튼을 화면에 추가해보세요.",
    render: () => `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:12px;">
        <div style="background:#0e1017; padding:12px; border-radius:8px;">
          <b>📁 start.bat</b>
          <p style="color:#888; margin-top:4px;">더블클릭 시 127.0.0.1:10211 자동 실행 및 크롬 팝업</p>
        </div>
        <div style="background:#0e1017; padding:12px; border-radius:8px;">
          <b>📁 start_team.bat</b>
          <p style="color:#888; margin-top:4px;">사내망 IP 자동 감지 후 0.0.0.0 팀 공유 모드 기동</p>
        </div>
      </div>
    `
  },
  {
    step: "STEP 11",
    part: "PART 4 · 팀 배포와 운영",
    title: "마무리 점검 & 인수인계",
    desc: "입력값 검증, 예외 처리, README.md와 GEMINI.md 최신화로 다음 담당자가 코드 없이도 운영할 수 있게 인수인계 상태를 완성합니다.",
    prompt: `대시보드 전체를 점검하고 정리해줘.\n- 빈 값, 잘못된 날짜, 너무 긴 글자 입력을 막는 검증 추가\n- 오류가 나도 화면이 멈추지 않고 안내 문구가 나오게\n- 여러 명이 동시에 저장할 때 생길 수 있는 문제를 점검하고 보완\n- README.md에 기능 목록, 화면별 사용법, 폴더 구조 설명 정리\n- GEMINI.md에 지금까지 정해진 규칙과 구조를 최신으로 업데이트\n- 무엇을 고쳤는지 변경 사항을 목록으로 알려줘`,
    mission: "나만의 추가 미션(이미지 보관함, 팀 일정 캘린더 등)을 완성해보세요.",
    render: () => `
      <div style="text-align:center; padding:16px;">
        <span style="font-size:40px;">🎉</span>
        <h3 style="color:#10b981; margin:8px 0;">대시보드 심화 26 완성체 구축 완료!</h3>
        <p style="font-size:12px; color:#aaa; max-width:480px; margin:0 auto;">
          실제 운영 가능한 SQLite 백엔드 + 자동 백업 + openpyxl 엑셀 엔진 + 이미지 보관함 + 일정 관리까지 모두 탑재된 최고 수준의 바이브코딩 결과물입니다.
        </p>
      </div>
    `
  }
];

let currentIdx = 0;
let demoTasks = [
  { id: 1, title: "대시보드 심화 템플릿 완성", assignee: "채경원", done: false, overdue: false },
  { id: 2, title: "사내망 0.0.0.0 포트 오픈 테스트", assignee: "김민수", done: false, overdue: true },
  { id: 3, title: "주간보고 엑셀 시트 파싱", assignee: "이지은", done: true, overdue: false }
];

document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  selectStep(0);
  loadLecturerNoteOnline();
});

function renderSidebar() {
  const container = document.getElementById('steps-container');
  container.innerHTML = CURRICULUM.map((item, idx) => `
    <div class="step-card ${idx === currentIdx ? 'active' : ''}" onclick="selectStep(${idx})">
      <div class="step-header">
        <span>${item.part.split('·')[0].trim()}</span>
        <span>${item.step}</span>
      </div>
      <div class="step-name">${item.title}</div>
    </div>
  `).join('');
}

function selectStep(idx) {
  currentIdx = idx;
  const item = CURRICULUM[idx];

  // 사이드바 활성화 갱신
  document.querySelectorAll('.step-card').forEach((el, i) => {
    el.classList.toggle('active', i === idx);
  });

  document.getElementById('current-step-badge').textContent = item.step;
  document.getElementById('prompt-part-tag').textContent = item.part;
  document.getElementById('prompt-step-title').textContent = `${item.step}. ${item.title}`;
  document.getElementById('prompt-explanation').textContent = item.desc;
  document.getElementById('prompt-text').textContent = item.prompt;
  document.getElementById('mission-tip-text').textContent = item.mission;
  document.getElementById('sim-badge').textContent = `${item.step} 단계 상태`;

  // 뷰포트 렌더링
  const viewport = document.getElementById('sim-app-viewport');
  viewport.innerHTML = item.render();

  // 스텝별 부가 액션
  if (idx === 3) { // STEP 04 할일 목록 인터랙티브
    renderSimTasks();
  } else if (idx === 6) { // STEP 07 차트
    renderSimChart();
  }
}

function copyPrompt() {
  const text = document.getElementById('prompt-text').textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert('📋 Gemini CLI 프롬프트가 복사되었습니다!\n터미널에 붙여넣어 바로 실행해보세요.');
  });
}

function renderSimTasks() {
  const box = document.getElementById('sim-task-list');
  if (!box) return;
  box.innerHTML = demoTasks.map(t => `
    <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 12px; background:#0e1017; border-radius:6px; font-size:12px; border-left:3px solid ${t.done ? '#10b981' : t.overdue ? '#ef4444' : '#8b5cf6'};">
      <div style="display:flex; align-items:center; gap:8px;">
        <input type="checkbox" ${t.done ? 'checked' : ''} onchange="toggleSimDone(${t.id})" style="cursor:pointer;">
        <span style="${t.done ? 'text-decoration:line-through; color:#666;' : ''}">${t.title}</span>
      </div>
      <div>
        <span style="color:#aaa; font-size:11px; margin-right:8px;">${t.assignee}</span>
        ${t.done ? '<span style="color:#10b981; font-size:10px;">완료</span>' : t.overdue ? '<span style="color:#ef4444; font-size:10px; font-weight:700;">지연🚨</span>' : '<span style="color:#8b5cf6; font-size:10px;">진행중</span>'}
      </div>
    </div>
  `).join('');
}

function toggleSimDone(id) {
  const t = demoTasks.find(x => x.id === id);
  if (t) {
    t.done = !t.done;
    renderSimTasks();
  }
}

function addSimTask() {
  const title = prompt("새 할 일 제목을 입력하세요:", "팀 주간 회의 자료 준비");
  if (!title) return;
  demoTasks.push({
    id: Date.now(),
    title: title,
    assignee: "채경원",
    done: false,
    overdue: false
  });
  renderSimTasks();
}

function renderSimChart() {
  const ctx = document.getElementById('sim-chart-canvas')?.getContext('2d');
  if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['채경원', '김민수', '이지은', '박준형'],
      datasets: [{
        label: '이번 주 완료 건수',
        data: [5, 3, 4, 2],
        backgroundColor: '#8b5cf6',
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { ticks: { color: '#888' }, grid: { color: 'rgba(255,255,255,0.05)' } },
        x: { ticks: { color: '#888' }, grid: { display: false } }
      }
    }
  });
}

function resetDemoData() {
  demoTasks = [
    { id: 1, title: "대시보드 심화 템플릿 완성", assignee: "채경원", done: false, overdue: false },
    { id: 2, title: "사내망 0.0.0.0 포트 오픈 테스트", assignee: "김민수", done: false, overdue: true },
    { id: 3, title: "주간보고 엑셀 시트 파싱", assignee: "이지은", done: true, overdue: false }
  ];
  selectStep(currentIdx);
  alert('🔄 가상 데이터가 초기화되었습니다.');
}

// ========================================================
// Q&A 및 강사 특별 노트 (우리 집 서버 실시간 연동)
// ========================================================
const HOME_SERVER_QNA_API = "https://kwopi.duckdns.org/dashboard26/api/qna";
const HOME_SERVER_NOTE_API = "https://kwopi.duckdns.org/dashboard26/api/note";

let currentLecturerNote = {
  title: "바이브코딩 대시보드 심화 실습 핵심 요약 & 강사 특별 노트",
  content: `반갑습니다 수강생 여러분! 강사 채경원입니다.

오늘 실습하는 [Gemini CLI 대시보드 심화 26] 과정의 핵심 철학과 꼭 기억해야 할 3가지를 정리해 드립니다.

1. 프롬프트의 4대 핵심 구조:
   - 어디에 (@app.py 등 대상 파일 명시)
   - 무엇을 (추가하거나 수정할 기능)
   - 어떻게 (디자인, 에러 처리, 조건)
   - 유지할 것 (기존 DB와 데이터는 지우지 말 것)

2. 사내망 배포 시 주의사항:
   - start_team.bat으로 실행하면 내 PC의 사내망 IP로 0.0.0.0 바인딩됩니다.
   - 팀원이 접속하지 못할 때는 윈도우 고급 방화벽 인바운드에서 TCP 10211 포트를 열어주세요.

3. 데이터 안전의 제1원칙:
   - 모든 수정 전에는 backup/ 폴더의 백업 상태를 확인하세요.
   - 서버를 재시작할 때마다 최근 7개의 SQLite 파일이 자동으로 보존됩니다.

궁금한 점은 언제든 상단 [문의 & 질문함] 버튼을 눌러 남겨주세요. 실시간으로 답변해 드립니다!
화이팅입니다!`,
  updated_at: "2026-10-19 17:50"
};

// 📜 강사 특별 노트 제어
function openNoteModal() {
  document.getElementById('note-modal').classList.add('active');
  loadLecturerNoteOnline();
}

function closeNoteModal() {
  document.getElementById('note-modal').classList.remove('active');
}

async function loadLecturerNoteOnline() {
  try {
    const res = await fetch(HOME_SERVER_NOTE_API, { mode: 'cors' });
    if (res.ok) {
      currentLecturerNote = await res.json();
    }
  } catch (err) {
    console.log("홈 서버 노트 연동 캐시 사용:", err);
  }

  // 화면 반영
  const bannerTitle = document.getElementById('banner-note-title');
  const bannerSnippet = document.getElementById('banner-note-snippet');
  const modalTitle = document.getElementById('modal-note-title');
  const modalBody = document.getElementById('modal-note-body');
  const modalUpdated = document.getElementById('modal-note-updated');

  if (bannerTitle) bannerTitle.textContent = currentLecturerNote.title;
  if (bannerSnippet) {
    const firstLine = currentLecturerNote.content.split('\n')[0] || '';
    bannerSnippet.textContent = firstLine.substring(0, 70) + '...';
  }
  if (modalTitle) modalTitle.textContent = currentLecturerNote.title;
  if (modalBody) modalBody.textContent = currentLecturerNote.content;
  if (modalUpdated) modalUpdated.textContent = `최근 갱신: ${currentLecturerNote.updated_at}`;
}

function copyNoteContent() {
  const content = `${currentLecturerNote.title}\n\n${currentLecturerNote.content}`;
  navigator.clipboard.writeText(content).then(() => {
    alert('📋 강사 특별 노트 내용이 클립보드에 복사되었습니다!');
  });
}

// Q&A 질문함 제어
let localQnAList = JSON.parse(localStorage.getItem('dash26_qna') || 'null') || [
  {
    id: 1,
    created_at: "2026-10-19 17:30",
    author: "채경원 (강사)",
    type: "강사메모",
    content: "반갑습니다 여러분! 대시보드26 실습 중 질문이나 막히는 점은 언제든 편하게 여기에 남겨주세요. 실시간으로 확인하고 답변해드립니다.",
    reply: "확인 완료 · 공지 고정"
  },
  {
    id: 2,
    created_at: "2026-10-19 17:32",
    author: "김선임 (수강생)",
    type: "질문",
    content: "start_team.bat으로 사내망 공유할 때 팀원 PC에서 안 들어가지면 방화벽 인바운드에서 포트 10211만 열어주면 되나요?",
    reply: "네 맞습니다! 윈도우 고급 방화벽에서 '인바운드 규칙 -> 새 규칙 -> 포트 -> TCP 10211 허용'을 등록하시면 옆자리 팀원도 바로 접속됩니다."
  }
];

function openQnAModal() {
  document.getElementById('qna-modal').classList.add('active');
  loadQnAList();
}

function closeQnAModal() {
  document.getElementById('qna-modal').classList.remove('active');
}

async function loadQnAList() {
  const container = document.getElementById('qna-list');
  if (!container) return;

  // 1. 우리 집 서버에서 실시간 Q&A 가져오기 시도
  try {
    const res = await fetch(HOME_SERVER_QNA_API, { mode: 'cors' });
    if (res.ok) {
      const data = await res.json();
      renderQnAItems(data);
      return;
    }
  } catch (e) {
    // 외부망 직접 호출 제한 시 로컬 스토리지 데이터로 부드럽게 폴백
    console.log("홈 서버 연동 폴백(브라우저 캐시 모드):", e);
  }

  renderQnAItems(localQnAList);
}

function renderQnAItems(items) {
  const container = document.getElementById('qna-list');
  if (!container) return;

  if (!items || items.length === 0) {
    container.innerHTML = `<p style="text-align:center; padding:20px; color:var(--text-dim); font-size:12px;">등록된 문의나 메모가 없습니다.</p>`;
    return;
  }

  container.innerHTML = items.map(item => {
    const isMemo = item.type === "강사메모";
    return `
      <div style="background:#0e1017; border:1px solid ${isMemo ? 'var(--accent)' : 'var(--border)'}; border-radius:8px; padding:12px 14px; font-size:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-size:10px; padding:2px 6px; border-radius:4px; font-weight:700; background:${isMemo ? 'rgba(139,92,246,0.2)' : 'rgba(6,182,212,0.2)'}; color:${isMemo ? '#a78bfa' : '#38bdf8'};">
              ${item.type}
            </span>
            <b style="color:var(--text);">${escapeHtml(item.author)}</b>
          </div>
          <span style="color:var(--text-dim); font-size:11px;">${item.createdAt}</span>
        </div>
        <p style="color:var(--text-muted); line-height:1.5; margin:6px 0;">${escapeHtml(item.content)}</p>
        ${item.reply ? `
          <div style="margin-top:8px; padding:8px 10px; background:rgba(16,185,129,0.08); border-left:3px solid #10b981; border-radius:4px; font-size:11px; color:#a7f3d0;">
            <b>답변:</b> ${escapeHtml(item.reply)}
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

async function submitQnA(e) {
  e.preventDefault();
  const author = document.getElementById('qna-author').value.trim();
  const type = document.getElementById('qna-type').value;
  const content = document.getElementById('qna-content').value.trim();

  if (!author || !content) return;

  const newItem = {
    id: Date.now(),
    created_at: new Date().toISOString().replace('T', ' ').substring(0, 16),
    author: author,
    type: type,
    content: content,
    reply: ""
  };

  try {
    const res = await fetch(HOME_SERVER_QNA_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ author, type, content }),
      mode: 'cors'
    });
    if (res.ok) {
      alert('우리 집 DB에 질문이 실시간으로 등록되었습니다! 강사님이 확인 후 곧 답변을 달아드립니다.');
      document.getElementById('qna-content').value = '';
      loadQnAList();
      return;
    }
  } catch (err) {
    console.log("홈 서버 직접 통신 폴백:", err);
  }

  // 폴백 로컬 저장
  localQnAList.unshift(newItem);
  localStorage.setItem('dash26_qna', JSON.stringify(localQnAList));
  document.getElementById('qna-content').value = '';
  loadQnAList();
  alert('질문이 등록되었습니다! (강사님 승인 후 답변이 업데이트됩니다)');
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[m]);
}

