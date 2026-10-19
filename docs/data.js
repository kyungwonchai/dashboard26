// data.js - 우리 집 SQLite DB와 100% 완전 동기화된 마스터 데이터셋
window.DASH26_SYNC_DATA = {
  "updatedAt": "2026-10-19 18:41:35",
  "note": {
    "id": 1,
    "title": "바이브코딩 대시보드 심화 실습 핵심 요약 & 강사 특별 노트",
    "content": "반갑습니다 수강생 여러분! 강사 채경원입니다.\n\n오늘 실습하는 [Gemini CLI 대시보드 심화 26] 과정의 핵심 철학과 꼭 기억해야 할 핵심 지침 및 실시간 질의응답 연동 가이드입니다.\n\n==================================================\n📌 [강사 철학 노트 1] 프롬프트 4대 핵심 구조\n==================================================\n1. 어디에 (@app.py, @index.html 등 대상 파일 명시)\n2. 무엇을 (추가하거나 수정할 기능)\n3. 어떻게 (디자인, 에러 처리, 조건)\n4. 유지할 것 (기존 DB와 데이터는 절대 지우지 말 것)\n\n==================================================\n📌 [강사 철학 노트 2] 사내망 팀원 배포 (--team 모드)\n==================================================\n- start_team.bat으로 실행하면 사내망 IP로 0.0.0.0 바인딩됩니다.\n- 팀원이 접속하지 못할 때는 윈도우 고급 방화벽 인바운드에서 TCP 10211 포트를 열어주세요.\n\n==================================================\n📌 [강사 철학 노트 3] 데이터 안전 제1원칙 (자동 백업)\n==================================================\n- 모든 코드 수정 전에는 backup/ 폴더의 백업 상태를 확인하세요.\n- 서버를 재시작할 때마다 최근 7개의 SQLite 파일이 자동으로 회전 보존됩니다.\n\n==================================================\n📋 [특별 가이드] 실시간 Q&A 구글 스프레드시트 연동 방법\n==================================================\n가입/서버 포트 개방 없이 구글 스프레드시트를 무료 실시간 DB로 연결하는 3단계:\n\n1단계. 구글 스프레드시트 생성 (1분)\n- sheets.google.com 접속 -> 새 시트 만들기 (이름: 대시보드26_문의보관함)\n- 1행 헤더 입력:\n  A1: id | B1: createdAt | C1: author | D1: type | E1: content | F1: reply\n\n2단계. Apps Script 코드 붙여넣기 (1분)\n- 상단 메뉴 [확장 프로그램] -> [Apps Script] 클릭\n- 기존 코드를 지우고 아래 코드 복사/붙여넣기:\n\nfunction doGet(e) {\n  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();\n  var data = sheet.getDataRange().getValues();\n  var result = [];\n  for (var i = 1; i < data.length; i++) {\n    if (!data[i][0]) continue;\n    result.push({\n      id: data[i][0],\n      createdAt: Utilities.formatDate(new Date(data[i][1]), \"Asia/Seoul\", \"yyyy-MM-dd HH:mm\"),\n      author: data[i][2],\n      type: data[i][3],\n      content: data[i][4],\n      reply: data[i][5] || \"\"\n    });\n  }\n  return ContentService.createTextOutput(JSON.stringify(result.reverse()))\n    .setMimeType(ContentService.MimeType.JSON);\n}\n\nfunction doPost(e) {\n  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();\n  var data = JSON.parse(e.postData.contents);\n  var newId = new Date().getTime();\n  sheet.appendRow([newId, new Date(), data.author || \"익명\", data.type || \"질문\", data.content || \"\", \"\"]);\n  return ContentService.createTextOutput(JSON.stringify({ status: \"success\", id: newId }))\n    .setMimeType(ContentService.MimeType.JSON);\n}\n\n3단계. 배포 및 연동 (1분)\n- 우측 상단 [배포] -> [새 배포] 클릭\n- 유형: 웹 앱(Web App) 선택\n- 다음 사용자로 실행: 나(내 계정)\n- 액세스 권한: 모든 사용자 (Anyone) 선택 후 [배포] 클릭\n- 생성된 웹 앱 URL(https://script.google.com/macros/s/.../exec) 복사!\n\n궁금한 점은 언제든 상단 [문의 & 질문함] 버튼을 눌러 남겨주세요.\n화이팅입니다!",
    "updated_at": "2026-10-19 18:31"
  },
  "members": [
    {
      "id": 1,
      "name": "채경원",
      "part": "AI혁신파트",
      "role": "파트장",
      "avatar_color": "#8b5cf6",
      "created_at": "2026-10-19 08:06:44"
    },
    {
      "id": 2,
      "name": "김민수",
      "part": "AI혁신파트",
      "role": "선임연구원",
      "avatar_color": "#06b6d4",
      "created_at": "2026-10-19 08:06:44"
    },
    {
      "id": 3,
      "name": "이지은",
      "part": "솔루션파트",
      "role": "책임엔지니어",
      "avatar_color": "#ec4899",
      "created_at": "2026-10-19 08:06:44"
    },
    {
      "id": 4,
      "name": "박준형",
      "part": "솔루션파트",
      "role": "데이터분석가",
      "avatar_color": "#10b981",
      "created_at": "2026-10-19 08:06:44"
    }
  ],
  "tasks": [
    {
      "id": 1,
      "title": "AI 바이브코딩 대시보드 심화 템플릿 완성",
      "assignee": "채경원",
      "part": "AI혁신파트",
      "project": "대시보드26",
      "priority": "높음",
      "due_date": "2026-10-19",
      "status": "진행중",
      "created_at": "2026-10-16",
      "completed_at": null,
      "image_url": null
    },
    {
      "id": 2,
      "title": "SQLite DB 스키마 및 자동 백업 설계",
      "assignee": "채경원",
      "part": "AI혁신파트",
      "project": "인프라구축",
      "priority": "높음",
      "due_date": "2026-10-21",
      "status": "완료",
      "created_at": "2026-10-16",
      "completed_at": "2026-10-18",
      "image_url": null
    },
    {
      "id": 3,
      "title": "Chart.js 기반 팀 통계 대시보드 연동",
      "assignee": "김민수",
      "part": "AI혁신파트",
      "project": "대시보드26",
      "priority": "보통",
      "due_date": "2026-10-18",
      "status": "진행중",
      "created_at": "2026-10-16",
      "completed_at": null,
      "image_url": null
    },
    {
      "id": 4,
      "title": "사내망 0.0.0.0 팀 공유 모드 네트워크 테스트",
      "assignee": "김민수",
      "part": "AI혁신파트",
      "project": "인프라구축",
      "priority": "보통",
      "due_date": "2026-10-19",
      "status": "진행중",
      "created_at": "2026-10-18",
      "completed_at": null,
      "image_url": null
    },
    {
      "id": 5,
      "title": "엑셀 업무일지 openpyxl 일괄 업로드 파서 구현",
      "assignee": "이지은",
      "part": "솔루션파트",
      "project": "업무자동화",
      "priority": "높음",
      "due_date": "2026-10-18",
      "status": "진행중",
      "created_at": "2026-10-16",
      "completed_at": null,
      "image_url": null
    },
    {
      "id": 6,
      "title": "주간보고 엑셀 시트 자동생성 양식 포맷팅",
      "assignee": "이지은",
      "part": "솔루션파트",
      "project": "업무자동화",
      "priority": "보통",
      "due_date": "2026-10-24",
      "status": "완료",
      "created_at": "2026-10-16",
      "completed_at": "2026-10-19",
      "image_url": null
    },
    {
      "id": 7,
      "title": "부서별 완료율 및 지연 건수 인터랙티브 차트",
      "assignee": "박준형",
      "part": "솔루션파트",
      "project": "BI시각화",
      "priority": "보통",
      "due_date": "2026-10-21",
      "status": "진행중",
      "created_at": "2026-10-18",
      "completed_at": null,
      "image_url": null
    },
    {
      "id": 8,
      "title": "팀원별 업무일지 소요시간 비율 집계 API",
      "assignee": "박준형",
      "part": "솔루션파트",
      "project": "BI시각화",
      "priority": "낮음",
      "due_date": "2026-10-24",
      "status": "진행중",
      "created_at": "2026-10-19",
      "completed_at": null,
      "image_url": null
    }
  ],
  "schedules": [
    {
      "id": 1,
      "title": "대시보드 심화 과정 발표 및 시연회",
      "start_date": "2026-10-19",
      "end_date": "2026-10-19",
      "member_name": "채경원",
      "category": "세미나",
      "color": "#8b5cf6",
      "memo": "온/오프라인 동시 진행",
      "created_at": "2026-10-19 08:06:44"
    },
    {
      "id": 4,
      "title": "📋 [특강] 구글 스프레드시트 실시간 DB 연동 가이드",
      "start_date": "2026-10-19",
      "end_date": "2026-10-22",
      "member_name": "채경원",
      "category": "특강/가이드",
      "color": "#10b981",
      "memo": "가입/포트개방 없는 실시간 NoSQL 연동 (1단계 시트생성: id, createdAt, author, type, content, reply / 2단계 Apps Script 복사 / 3단계 웹앱 배포)",
      "created_at": "2026-10-19 18:41:30"
    },
    {
      "id": 2,
      "title": "파트 주간 실적 보고 회의",
      "start_date": "2026-10-21",
      "end_date": "2026-10-21",
      "member_name": "이지은",
      "category": "회의",
      "color": "#ec4899",
      "memo": "회의실 A 및 줌 연결",
      "created_at": "2026-10-19 08:06:44"
    },
    {
      "id": 3,
      "title": "신규 AI 솔루션 인프라 점검",
      "start_date": "2026-10-24",
      "end_date": "2026-10-24",
      "member_name": "김민수",
      "category": "점검",
      "color": "#06b6d4",
      "memo": "서버 재부팅 및 백업 검증",
      "created_at": "2026-10-19 08:06:44"
    }
  ],
  "qna": [
    {
      "id": 3,
      "created_at": "2026-10-19 17:41:43",
      "author": "이지은 (수강생)",
      "type": "질문",
      "content": "엑셀 업로드할 때 소요시간에 문자를 넣으면 어떻게 처리되나요?",
      "reply": "테스트51",
      "is_published": 1
    },
    {
      "id": 2,
      "created_at": "2026-10-19 17:31:43",
      "author": "김선임 (수강생)",
      "type": "질문",
      "content": "start_team.bat으로 사내망 공유할 때 팀원 PC에서 안 들어가지면 방화벽 인바운드에서 포트 10211만 열어주면 되나요?",
      "reply": "네 맞습니다! 윈도우 고급 방화벽에서 인바운드 규칙으로 TCP 10211 포트를 허용하시면 옆자리 팀원도 바로 접속됩니다.",
      "is_published": 1
    },
    {
      "id": 1,
      "created_at": "2026-10-19 17:26:43",
      "author": "채경원 (강사)",
      "type": "강사메모",
      "content": "반갑습니다 여러분! 대시보드26 실습 중 질문이나 막히는 점은 언제든 편하게 여기에 남겨주세요. 실시간으로 확인하고 답변해드립니다.",
      "reply": "확인 완료 · 공지 고정",
      "is_published": 1
    }
  ]
};
