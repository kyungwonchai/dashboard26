# 📋 [무료 실시간 DB] 구글 스프레드시트 연동 Apps Script 템플릿

이 스크립트는 **구글 스프레드시트 하나를 완벽한 실시간 NoSQL 데이터베이스로 변신**시켜주는 마법의 템플릿입니다.
학생들이 웹페이지에서 가입 없이 질문이나 메모를 등록하면 구글 시트에 차곡차곡 쌓이고,
강사님이 시트에 답변을 적으면 깃허브 웹페이지에 실시간으로 반영됩니다!

---

## 1. 구글 스프레드시트 준비 (1분)
1. 구글 드라이브에서 새 **구글 스프레드시트**를 하나 만듭니다. (이름: `대시보드26_문의보관함`)
2. 1행에 헤더를 입력합니다:
   - A1: `id`
   - B1: `createdAt`
   - C1: `author`
   - D1: `type` (질문 또는 강사메모)
   - E1: `content`
   - F1: `reply` (강사 답변)
3. 예시 데이터 1행 추가:
   - A2: `1` | B2: `2026-10-19 17:30` | C2: `채경원 (강사)` | D2: `강사메모` | E2: `환영합니다! 바이브코딩 실습 중 막히는 점은 언제든 편하게 질문을 남겨주세요.` | F2: `확인 완료`

---

## 2. Apps Script 배포 (1분)
1. 시트 상단 메뉴에서 **[확장 프로그램] -> [Apps Script]** 클릭.
2. 기존 코드를 지우고 아래 코드를 그대로 복사·붙여넣기:

```javascript
function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var result = [];
  
  for (var i = 1; i < data.length; i++) {
    if (!data[i][0]) continue;
    result.push({
      id: data[i][0],
      createdAt: Utilities.formatDate(new Date(data[i][1]), "Asia/Seoul", "yyyy-MM-dd HH:mm"),
      author: data[i][2],
      type: data[i][3],
      content: data[i][4],
      reply: data[i][5] || ""
    });
  }
  
  return ContentService.createTextOutput(JSON.stringify(result.reverse()))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  var newId = new Date().getTime();
  var now = new Date();
  var author = data.author || "익명 수강생";
  var type = data.type || "질문";
  var content = data.content || "";
  var reply = "";
  
  sheet.appendRow([newId, now, author, type, content, reply]);
  
  return ContentService.createTextOutput(JSON.stringify({ status: "success", id: newId }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. 우측 상단 **[배포] -> [새 배포]** 클릭.
   - 유형: **웹 앱 (Web App)** 선택
   - 다음 사용자로 실행: **나 (내 계정)**
   - 액세스 권한이 있는 사용자: **모든 사용자 (Anyone)**  *(누구나 가입 없이 조회/작성 가능하게 필수 설정)*
4. 생성된 **웹 앱 URL**(`https://script.google.com/macros/s/.../exec`)을 복사합니다.
5. 이 URL을 `docs/demo.js`의 `GOOGLE_SHEET_API_URL` 변수에 붙여넣기만 하면 실시간 양방향 연동 끝!
