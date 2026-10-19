# GEMINI.md - 프로젝트 규칙 파일
# Gemini CLI 대시보드 심화 (dashboard26)

이 프로젝트는 초보자도 쉽게 따라 할 수 있는 바이브코딩 심화 과정으로,
팀 단위로 함께 쓰는 '팀 업무 대시보드' 웹앱 풀스택 패키지입니다.

---

## 1. 프로젝트 기본 정보
- **프로젝트명**: Gemini CLI 대시보드 심화 (dashboard26)
- **파트명**: AI 솔루션 혁신파트 (채경원)
- **개발 언어 및 프레임워크**:
  - 백엔드: Python Flask (경량 웹 프레임워크)
  - 데이터베이스: SQLite (`dashboard.db`) - 설치 불필요한 단일 파일형 DB
  - 프론트엔드: HTML5, CSS3 (Modern Glassmorphism #07080d), Vanilla JavaScript
  - 시각화: Chart.js (모던 반응형 차트 라이브러리)
  - 엑셀 입출력: openpyxl (엑셀 양식 자동생성 및 업로드 분석)
  - 이미지 처리: Pillow, 로컬 정적 디렉토리 서빙

---

## 2. Gemini CLI 절대 준수 5대 원칙 (AI 규칙)
1. **사전 설명 3줄 원칙**: 작업을 진행하기 전, 무엇을 왜 어떻게 바꿀지 초보자도 이해하기 쉬운 비유를 섞어 3줄 이내로 먼저 설명할 것.
2. **자동 백업 원칙**: 코드를 변경하거나 DB 스키마를 수정하기 전, 반드시 `backup/` 디렉토리에 날짜/시간별(`backup_YYYYMMDD_HHMMSS`) 복사본을 남길 것.
3. **기존 데이터 및 기능 보존**: 새로운 기능(일정, 이미지 등)을 추가할 때 기존 테이블, 컬럼, 저장된 데이터와 기존 UI 메뉴를 절대 삭제하거나 손상시키지 말 것.
4. **한글 우선 원칙**: 화면 UI 레이블, 버튼, 안내 문구, 에러 메시지 및 소스코드 주석은 100% 명확한 한국어로 작성할 것.
5. **기록 갱신 원칙**: 새로운 기능이 추가될 때마다 `README.md`와 `DATABASE_GUIDE.md`를 즉시 최신화할 것.

---

## 3. 폴더 구조
```
dashboard26/
├── app.py                  # Flask 메인 애플리케이션 및 REST API
├── requirements.txt        # 필요 라이브러리 목록
├── GEMINI.md               # 프로젝트 규칙 및 지침서 (본 파일)
├── README.md               # 초보자를 위한 단계별 설치/실행 가이드
├── DATABASE_GUIDE.md       # 초보자 눈높이 DB(SQLite) 완벽 해설서
├── manage.sh               # 서비스 제어 스크립트 (start/stop/restart/status)
├── start.bat               # 윈도우 원클릭 로컬 실행 스크립트
├── start_team.bat          # 윈도우 원클릭 사내망 팀공유 실행 스크립트
├── stop.bat                # 윈도우 안전 종료 스크립트
├── dashboard.db            # SQLite 데이터베이스 파일 (자동 생성)
├── backup/                 # DB 및 코드 자동 백업 저장소
├── uploads/                # 업로드된 이미지/문서 저장소
├── templates/
│   └── index.html          # 대시보드 메인 SPA 템플릿
├── static/
│   ├── style.css           # Blueprint-Hub 테마 글래스모피즘 CSS
│   └── app.js              # SPA 라우팅, 실시간 통신 및 Chart.js 로직
└── docs/                   # GitHub Pages용 인터랙티브 목차/단계별 시뮬레이션 웹페이지
    ├── index.html          # 단계별(STEP 01~11) 목차 튜토리얼 & 가상 시뮬레이터
    ├── style.css
    └── demo.js
```
