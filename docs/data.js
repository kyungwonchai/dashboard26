const USECASE35_DATA = [
  {
    "num": "01",
    "title": "엑셀 여러 파일, 한 번에 합치기",
    "full_title": "사례 01. 엑셀 여러 파일, 한 번에 합치기",
    "theme_code": "A",
    "theme_name": "업무 자동화",
    "theme_tag": "A · 업무 자동화",
    "theme_color": "#3b82f6",
    "theme_icon": "⚡",
    "intent": "부서별로 받은 엑셀 20개를 하나로 합치는 월 마감 노가다를 버튼 한 번으로 줄인다.",
    "knowhow": "샘플 파일 2개로 먼저 시험하세요. 파일마다 열 이름이 다르면 '열 이름 통일 규칙'을 같이 적어야 실수가 없습니다.",
    "prompt": "폴더 안의 모든 .xlsx 파일을 읽어서 '매출' 시트만 하나의 표로 합쳐줘.
각 행 맨 앞에 원본 파일명 열을 추가하고, 열 이름은 [날짜, 거래처, 금액]으로 통일해줘.
빈 행은 지우고 결과는 '합본.xlsx'로 저장해줘.
파이썬으로 만들고, 실행 방법을 초보자 기준으로 단계별로 알려줘.",
    "terms": [
      "파이썬 = 엑셀·문서 자동화에 많이 쓰는 프로그래밍 언어",
      ".xlsx = 엑셀 파일 형식",
      "열 이름 통일(매핑) = 서로 다른 이름을 하나로 짝지어 맞추는 것"
    ],
    "slide": 5
  },
  {
    "num": "02",
    "title": "주간보고 초안 자동 생성기",
    "full_title": "사례 02. 주간보고 초안 자동 생성기",
    "theme_code": "A",
    "theme_name": "업무 자동화",
    "theme_tag": "A · 업무 자동화",
    "theme_color": "#3b82f6",
    "theme_icon": "⚡",
    "intent": "월~금 메모를 붙여넣으면 우리 팀 보고 양식에 맞춰 초안이 나오게 한다.",
    "knowhow": "지난주 실제 보고서를 '예시'로 같이 붙이면 말투와 양식을 그대로 따라 합니다. 예시가 가장 강력한 지시입니다.",
    "prompt": "아래는 우리 팀 주간보고 예시야. [예시 붙여넣기]
이 양식과 말투를 그대로 따라서, 내가 붙여넣는 날짜별 메모를 '금주 실적 / 차주 계획 / 이슈·요청' 3개 항목으로 정리하는 웹페이지를 만들어줘.
메모 입력칸, 변환 버튼, 결과 복사 버튼이 있어야 해.",
    "terms": [
      "웹페이지 = 크롬 같은 브라우저로 여는 HTML 파일 한 장, 더블클릭만으로 실행",
      "예시 제공(퓨샷) = AI에게 정답 샘플을 보여주고 따라 하게 하는 방식"
    ],
    "slide": 6
  },
  {
    "num": "03",
    "title": "회의록 → 할 일(액션아이템) 표",
    "full_title": "사례 03. 회의록 → 할 일(액션아이템) 표",
    "theme_code": "A",
    "theme_name": "업무 자동화",
    "theme_tag": "A · 업무 자동화",
    "theme_color": "#3b82f6",
    "theme_icon": "⚡",
    "intent": "두서없는 회의 녹취를 결정사항·할 일·미결 이슈로 자동 분리해서 회의 후 정리 시간을 없앤다.",
    "knowhow": "'담당자·기한이 안 나오면 지어내지 말고 미정으로 표시'라는 규칙을 꼭 넣으세요. AI가 멋대로 채우는 걸 막아줍니다.",
    "prompt": "회의 녹취 텍스트를 붙여넣으면 ①결정사항 ②할 일(담당자·기한·내용) ③미결 이슈로 나누는 도구를 만들어줘.
담당자나 기한이 언급되지 않았으면 추측하지 말고 '미정'으로 표시해줘.
결과는 화면 표와 CSV 다운로드 둘 다 제공해줘.",
    "terms": [
      "액션아이템 = 회의 후 누가 언제까지 할 일",
      "CSV = 쉼표로 구분한 표 데이터 파일, 엑셀로 바로 열림"
    ],
    "slide": 7
  },
  {
    "num": "04",
    "title": "다운로드 폴더 자동 정리",
    "full_title": "사례 04. 다운로드 폴더 자동 정리",
    "theme_code": "A",
    "theme_name": "업무 자동화",
    "theme_tag": "A · 업무 자동화",
    "theme_color": "#3b82f6",
    "theme_icon": "⚡",
    "intent": "어질러진 폴더를 종류별·날짜별로 정리하고 파일명을 통일해서 '그 파일 어디 갔지?'를 없앤다.",
    "knowhow": "항상 '실행 전 미리보기'를 요구하고, '삭제는 절대 하지 마'를 명시하세요. 파일을 건드리는 작업의 안전장치입니다.",
    "prompt": "내 '다운로드' 폴더의 파일을 확장자별(문서/이미지/압축)로 하위 폴더에 옮기고, 파일명 앞에 수정한 날짜(YYMMDD)를 붙여줘.
실제로 옮기기 전에 '이렇게 바꿀 예정' 목록을 먼저 보여주고, 내가 y를 입력하면 실행해줘.
파일 삭제는 절대 하지 마.",
    "terms": [
      "확장자 = .pdf, .jpg처럼 파일 종류를 나타내는 꼬리표",
      "미리보기(드라이런) = 실제 실행 없이 결과만 먼저 보여주는 시험 실행"
    ],
    "slide": 8
  },
  {
    "num": "05",
    "title": "영수증·명함 사진 → 엑셀 표",
    "full_title": "사례 05. 영수증·명함 사진 → 엑셀 표",
    "theme_code": "A",
    "theme_name": "업무 자동화",
    "theme_tag": "A · 업무 자동화",
    "theme_color": "#3b82f6",
    "theme_icon": "⚡",
    "intent": "찍어둔 영수증·명함 사진을 읽어서 정산용 표로 바꾼다. 출장 정산이 5분으로 줄어드는 신기한 활용.",
    "knowhow": "AI가 못 읽은 칸은 '확인필요'로 남기게 하세요. 틀린 값이 조용히 섞이는 것보다 훨씬 안전합니다.",
    "prompt": "폴더 안의 영수증 사진들을 읽어서 [날짜, 상호, 금액, 항목]을 표로 뽑는 프로그램을 만들어줘.
글자 인식은 AI 이미지 인식 API를 써도 돼.
읽기 어려운 칸은 '확인필요'로 표시하고, 맨 아래에 합계 행을 넣어줘.",
    "terms": [
      "OCR = 사진 속 글자를 문자 데이터로 바꾸는 기술",
      "API = 프로그램끼리 요청·응답하는 통로. 내 프로그램에서 AI를 부르는 창구"
    ],
    "slide": 9
  },
  {
    "num": "06",
    "title": "팀 휴가·재택 현황판",
    "full_title": "사례 06. 팀 휴가·재택 현황판",
    "theme_code": "B",
    "theme_name": "사내 미니앱",
    "theme_tag": "B · 사내 미니앱",
    "theme_color": "#10b981",
    "theme_icon": "📱",
    "intent": "'오늘 누구 자리에 없지?'를 메신저로 묻지 않고, 한 화면에서 바로 확인하게 한다.",
    "knowhow": "처음엔 서버 없이 브라우저 저장으로 시작하세요. 설치·비용 없이 되고, 필요해지면 그때 공유 방식을 업그레이드하면 됩니다.",
    "prompt": "팀원 8명의 휴가·재택·출장 일정을 월 달력에 색깔로 보여주는 웹페이지를 만들어줘.
일정 입력창과 삭제 버튼이 있고, 오늘 자리를 비운 사람이 맨 위에 보이게 해줘.
데이터는 브라우저에 저장해서 서버 없이 동작하게 해줘.",
    "terms": [
      "서버 = 데이터를 보관하고 여러 사람에게 내주는 컴퓨터",
      "브라우저 저장(localStorage) = 내 크롬 안에 간단히 기록해두는 작은 저장 공간"
    ],
    "slide": 11
  },
  {
    "num": "07",
    "title": "견적서 자동 계산기",
    "full_title": "사례 07. 견적서 자동 계산기",
    "theme_code": "B",
    "theme_name": "사내 미니앱",
    "theme_tag": "B · 사내 미니앱",
    "theme_color": "#10b981",
    "theme_icon": "📱",
    "intent": "품목·수량만 넣으면 부가세까지 계산된 견적서가 바로 나와 엑셀 수식 실수를 없앤다.",
    "knowhow": "'단가표는 코드 맨 위 목록에만 둬서 나중에 내가 고치기 쉽게'라고 하면 가격 변경 때 코드를 안 건드려도 됩니다.",
    "prompt": "품목·수량·단가를 입력하면 공급가액, 부가세 10%, 합계가 자동 계산되는 웹페이지를 만들어줘.
인쇄용 견적서 화면(로고 자리, 견적번호, 유효기간 포함)으로 보여주고, 'PDF로 저장' 버튼을 넣어줘.
단가표는 코드 맨 위 목록에만 두어서 내가 쉽게 고칠 수 있게 해줘.",
    "terms": [
      "공급가액 = 부가세를 뺀 순수 금액",
      "인쇄용 화면 = 프린터·PDF 저장 시 깔끔하게 보이도록 따로 맞춘 화면"
    ],
    "slide": 12
  },
  {
    "num": "08",
    "title": "교육 신청 폼 + 정원 집계 화면",
    "full_title": "사례 08. 교육 신청 폼 + 정원 집계 화면",
    "theme_code": "B",
    "theme_name": "사내 미니앱",
    "theme_tag": "B · 사내 미니앱",
    "theme_color": "#10b981",
    "theme_icon": "📱",
    "intent": "신청받고 → 엑셀에 옮기고 → 인원 세는 3단계를 한 페이지로 합친다.",
    "knowhow": "입력 화면과 집계 화면을 한 파일에 두라고 하면 공유가 쉽습니다. 공유 저장은 2단계로 나눠 요청하세요.",
    "prompt": "교육 신청 폼(이름, 부서, 희망 일정 3택1)과 신청 현황 집계 화면을 한 페이지로 만들어줘.
일정별 인원을 막대그래프로 보여주고, 정원 20명이 넘으면 빨간색으로 표시해줘.
일단은 한 컴퓨터 안에서만 저장되게 하고, 나중에 구글 시트에 연결하는 방법도 알려줘.",
    "terms": [
      "대시보드 = 핵심 숫자·그래프를 한 화면에 모아 보여주는 현황판",
      "연동 = 서로 다른 서비스(예: 폼과 구글 시트)를 연결하는 것"
    ],
    "slide": 13
  },
  {
    "num": "09",
    "title": "신입 온보딩 체크리스트 앱",
    "full_title": "사례 09. 신입 온보딩 체크리스트 앱",
    "theme_code": "B",
    "theme_name": "사내 미니앱",
    "theme_tag": "B · 사내 미니앱",
    "theme_color": "#10b981",
    "theme_icon": "📱",
    "intent": "신입이 첫 2주 동안 할 일을 스스로 체크하며 진행률을 보게 해서 같은 질문 응대를 줄인다.",
    "knowhow": "'항목은 맨 위 목록만 고치면 화면이 바뀌게'라고 요청하세요. 내용과 화면을 분리하면 팀 다른 업무에도 복사해 씁니다.",
    "prompt": "신입사원 첫 2주 체크리스트(계정 발급, 보안교육, 팀 소개 등 15개)를 날짜별로 보여주는 웹페이지를 만들어줘.
항목을 체크하면 진행률 %가 올라가는 바를 보여줘.
체크리스트 항목은 코드 맨 위 목록만 고치면 바뀌게 해줘.",
    "terms": [
      "진행률 바 = 완료 비율을 막대로 채워 보여주는 표시",
      "데이터와 화면 분리 = 내용(목록)과 모양(디자인)을 따로 둬서 수정을 쉽게 하는 방식"
    ],
    "slide": 14
  },
  {
    "num": "10",
    "title": "자리 배치도·좌석 시각화",
    "full_title": "사례 10. 자리 배치도·좌석 시각화",
    "theme_code": "B",
    "theme_name": "사내 미니앱",
    "theme_tag": "B · 사내 미니앱",
    "theme_color": "#10b981",
    "theme_icon": "📱",
    "intent": "엑셀 표로 관리하던 자리 배치를 마우스로 옮기며 바꿔보는 그림으로 바꾼다.",
    "knowhow": "원하는 모양을 숫자로 구체화하세요('6x8 격자', '층별 탭'). 막연한 '예쁘게'보다 숫자와 개수가 훨씬 잘 먹힙니다.",
    "prompt": "사무실 도면을 6x8 격자로 그리고, 자리마다 이름표를 마우스로 끌어서 옮길 수 있는 웹페이지를 만들어줘.
층별 탭, 빈자리 표시, 현재 배치를 이미지로 저장하는 버튼을 넣어줘.
이름 목록은 코드 맨 위에서 수정할 수 있게 해줘.",
    "terms": [
      "격자(그리드) = 가로세로 칸으로 나눈 판",
      "드래그 = 마우스 버튼을 누른 채 끌어서 옮기는 동작"
    ],
    "slide": 15
  },
  {
    "num": "11",
    "title": "매출 대시보드 한 화면에 모으기",
    "full_title": "사례 11. 매출 대시보드 한 화면에 모으기",
    "theme_code": "C",
    "theme_name": "데이터·분석",
    "theme_tag": "C · 데이터·분석",
    "theme_color": "#8b5cf6",
    "theme_icon": "📊",
    "intent": "월별 매출 파일을 열 때마다 피벗 만들던 일을 필터 달린 현황판 하나로 대체한다.",
    "knowhow": "회사 실제 데이터는 숫자 일부를 바꾼 샘플로 먼저 만들어보고, 완성된 도구에 진짜 데이터를 넣으세요.",
    "prompt": "첨부한 월별 매출 CSV로 ①월별 추이 선그래프 ②지점별 비교 막대그래프 ③전월 대비 증감률 상위 5개 표를 한 화면에 보여주는 HTML 파일을 만들어줘.
기간·지점 필터를 넣고, 숫자는 천 단위 콤마로 표시해줘.",
    "terms": [
      "피벗 = 엑셀에서 데이터를 항목별로 집계하는 기능",
      "HTML 파일 = 더블클릭하면 브라우저에서 열리는 웹페이지 파일",
      "증감률 = 전월 대비 늘거나 준 비율"
    ],
    "slide": 17
  },
  {
    "num": "12",
    "title": "고객 의견(VOC) 자동 분류·요약",
    "full_title": "사례 12. 고객 의견(VOC) 자동 분류·요약",
    "theme_code": "C",
    "theme_name": "데이터·분석",
    "theme_tag": "C · 데이터·분석",
    "theme_color": "#8b5cf6",
    "theme_icon": "📊",
    "intent": "수백 건의 불만·요청을 사람이 읽고 분류하던 일을 유형별 건수와 대표 의견으로 요약한다.",
    "knowhow": "분류 기준(카테고리)은 직접 정해서 알려주세요. '애매하면 검토필요로' 규칙이 있으면 믿고 쓸 수 있는 결과가 나옵니다.",
    "prompt": "고객 의견 200건(엑셀 한 열)을 읽어서 '배송/품질/응대/가격/기타'로 분류해줘.
분류별 건수, 대표 의견 3개, 개선 제안 1줄을 표로 정리해줘.
분류가 애매한 건 억지로 넣지 말고 '검토필요'로 남겨줘.",
    "terms": [
      "VOC = Voice of Customer, 고객의 소리",
      "분류(카테고리화) = 비슷한 의견끼리 묶어 이름표를 붙이는 일"
    ],
    "slide": 18
  },
  {
    "num": "13",
    "title": "경쟁사 가격 변동 알림",
    "full_title": "사례 13. 경쟁사 가격 변동 알림",
    "theme_code": "C",
    "theme_name": "데이터·분석",
    "theme_tag": "C · 데이터·분석",
    "theme_color": "#8b5cf6",
    "theme_icon": "📊",
    "intent": "매일 경쟁사 사이트를 눈으로 확인하는 대신, 가격이 바뀔 때만 알려주게 한다.",
    "knowhow": "사이트 이용약관과 접근 허용 여부를 먼저 확인하세요. '막히면 우회하지 말고 알려줘'를 넣는 게 안전한 습관입니다.",
    "prompt": "내가 지정한 상품 페이지 5곳의 가격을 읽어서 어제와 달라진 것만 표로 알려주는 스크립트를 만들어줘.
사이트가 접근을 막으면 억지로 우회하지 말고 나에게 알려줘.
각 사이트의 이용약관 확인 방법도 안내해줘.",
    "terms": [
      "스크래핑 = 웹페이지의 정보를 프로그램으로 자동으로 가져오는 것(사이트 약관 확인 필수)",
      "스크립트 = 한 가지 일을 시키는 짧은 프로그램"
    ],
    "slide": 19
  },
  {
    "num": "14",
    "title": "설문 결과 자동 리포트",
    "full_title": "사례 14. 설문 결과 자동 리포트",
    "theme_code": "C",
    "theme_name": "데이터·분석",
    "theme_tag": "C · 데이터·분석",
    "theme_color": "#8b5cf6",
    "theme_icon": "📊",
    "intent": "설문 CSV 하나로 그래프와 의견 요약이 들어간 보고서를 자동으로 만든다.",
    "knowhow": "'이름·이메일 열은 결과에서 제외'를 넣으면 보고서를 공유할 때 개인정보 사고를 줄일 수 있습니다.",
    "prompt": "구글폼 설문 결과 CSV를 읽어서, 객관식은 항목별 비율 그래프로 보여줘.
주관식은 핵심 키워드 10개와 의견 요약 5줄로 정리해줘.
결과는 보고서처럼 보이는 HTML 한 장으로 만들고, 이름·이메일 같은 개인정보 열은 자동으로 제외해줘.",
    "terms": [
      "키워드 추출 = 많이 나온 핵심 단어를 뽑는 것",
      "개인정보 제외(비식별) = 누구의 응답인지 알아볼 수 있는 정보를 지우는 처리"
    ],
    "slide": 20
  },
  {
    "num": "15",
    "title": "엑셀 오류·이상치 검수기",
    "full_title": "사례 15. 엑셀 오류·이상치 검수기",
    "theme_code": "C",
    "theme_name": "데이터·분석",
    "theme_tag": "C · 데이터·분석",
    "theme_color": "#8b5cf6",
    "theme_icon": "📊",
    "intent": "마감 전에 눈으로 훑던 검수를 자동으로 돌려 빈칸·중복·튀는 값을 찾아낸다.",
    "knowhow": "'원본은 수정하지 말고 검수결과 시트에만 적어줘'를 꼭 넣으세요. 검수 도구가 원본을 건드리면 오히려 사고가 납니다.",
    "prompt": "엑셀 시트에서 ①빈칸 ②같은 거래처의 중복 행 ③금액이 평균의 3배 이상인 행 ④날짜 형식이 다른 셀을 찾아줘.
행 번호와 이유를 '검수결과' 시트에 적어줘.
원본 시트는 절대 수정하지 마.",
    "terms": [
      "이상치 = 다른 값들과 동떨어져 튀는 값(오입력 의심)",
      "중복 행 = 같은 내용이 두 번 이상 들어간 줄"
    ],
    "slide": 21
  },
  {
    "num": "16",
    "title": "이메일 말투(톤) 변환기",
    "full_title": "사례 16. 이메일 말투(톤) 변환기",
    "theme_code": "D",
    "theme_name": "콘텐츠·커뮤니케이션",
    "theme_tag": "D · 콘텐츠·커뮤니케이션",
    "theme_color": "#ec4899",
    "theme_icon": "✍️",
    "intent": "받는 사람이 상사·타팀·고객일 때마다 말투를 고민하는 시간을 줄인다.",
    "knowhow": "고객 이름·계약 금액 같은 정보는 가명으로 바꿔서 입력하세요. 편리함보다 보안이 먼저입니다.",
    "prompt": "내가 쓴 이메일 초안을 붙여넣으면 ①정중한 버전 ②간결한 버전 ③거절이지만 부드러운 버전 3가지로 바꿔주는 웹페이지를 만들어줘.
받는 사람(상사/타팀/고객)을 고르면 존댓말 수준이 달라지게 해줘.
각 버전 옆에 복사 버튼을 넣어줘.",
    "terms": [
      "톤앤매너 = 글의 분위기와 격식 수준",
      "초안 = 다듬기 전의 처음 쓴 글"
    ],
    "slide": 23
  },
  {
    "num": "17",
    "title": "사내 공지 카드뉴스 템플릿",
    "full_title": "사례 17. 사내 공지 카드뉴스 템플릿",
    "theme_code": "D",
    "theme_name": "콘텐츠·커뮤니케이션",
    "theme_tag": "D · 콘텐츠·커뮤니케이션",
    "theme_color": "#ec4899",
    "theme_icon": "✍️",
    "intent": "행사 공지를 디자인 툴 없이 입력만으로 이미지 5장으로 뽑는다.",
    "knowhow": "색은 말로 설명하지 말고 색상코드로 주세요. 회사 대표색을 정확히 맞출 수 있습니다.",
    "prompt": "사내 행사 공지용 카드뉴스 5장을 HTML로 만들어줘.
제목, 날짜·장소, 신청 방법을 입력하면 자동으로 채워지고, 대표 색상은 #0E7C72로 해줘.
각 장을 PNG 이미지로 저장하는 버튼도 넣어줘.",
    "terms": [
      "템플릿 = 내용만 바꿔 끼우는 틀",
      "색상코드(HEX) = #0E7C72처럼 색을 숫자로 적는 방식",
      "PNG = 이미지 파일 형식"
    ],
    "slide": 24
  },
  {
    "num": "18",
    "title": "녹취·영상 자막 정리기",
    "full_title": "사례 18. 녹취·영상 자막 정리기",
    "theme_code": "D",
    "theme_name": "콘텐츠·커뮤니케이션",
    "theme_tag": "D · 콘텐츠·커뮤니케이션",
    "theme_color": "#ec4899",
    "theme_icon": "✍️",
    "intent": "교육 영상·회의 녹음에서 나온 어수선한 자막을 읽을 수 있는 글과 요약으로 바꾼다.",
    "knowhow": "'내용을 새로 지어내지 말고, 말한 것만 정리'를 명시하세요. 요약 도구에서 가장 중요한 규칙입니다.",
    "prompt": "자막 파일(.srt)을 붙여넣으면 시간 표시를 지우고, 말 더듬음과 추임새를 정리해서 문단으로 나눠줘.
맨 끝에 '핵심 요약 5줄'을 붙여줘.
없던 내용은 절대 추가하지 말고 말한 내용만 정리해줘.",
    "terms": [
      "SRT = 영상 자막 파일 형식",
      "타임스탬프 = 00:01:23 같은 시간 표시",
      "요약 = 핵심만 줄여 쓴 글"
    ],
    "slide": 25
  },
  {
    "num": "19",
    "title": "보고서 → 발표 슬라이드 자동 변환",
    "full_title": "사례 19. 보고서 → 발표 슬라이드 자동 변환",
    "theme_code": "D",
    "theme_name": "콘텐츠·커뮤니케이션",
    "theme_tag": "D · 콘텐츠·커뮤니케이션",
    "theme_color": "#ec4899",
    "theme_icon": "✍️",
    "intent": "긴 보고서를 읽고 '한 장에 한 메시지' 구조의 발표자료 초안을 바로 만든다.",
    "knowhow": "'제목은 결론 문장으로'라고 하면 슬라이드가 훨씬 설득력 있어집니다. 발표 대본까지 같이 요청하면 연습도 됩니다.",
    "prompt": "아래 보고서 내용으로 12장짜리 발표자료(.pptx)를 만들어줘.
한 장에 메시지 하나, 제목은 결론 문장으로, 중요한 숫자는 큰 글씨로 강조해줘.
발표자 노트에 말할 내용을 2~3문장씩 넣어줘.
[보고서 내용 붙여넣기]",
    "terms": [
      "pptx = 파워포인트 파일 형식",
      "발표자 노트 = 발표 중에만 나에게 보이는 슬라이드 밑 메모",
      "결론 문장형 제목 = 주제어 대신 말하려는 결론을 제목으로 쓰는 방식"
    ],
    "slide": 26
  },
  {
    "num": "20",
    "title": "번역 + 용어집 통일 도구",
    "full_title": "사례 20. 번역 + 용어집 통일 도구",
    "theme_code": "D",
    "theme_name": "콘텐츠·커뮤니케이션",
    "theme_tag": "D · 콘텐츠·커뮤니케이션",
    "theme_color": "#ec4899",
    "theme_icon": "✍️",
    "intent": "번역할 때마다 용어가 달라지는 문제를 없애고, 우리 회사 용어로 통일한다.",
    "knowhow": "용어집은 '한글,영어' 두 열의 CSV면 충분합니다. 번역 맨 끝에 '확인할 용어 목록'을 받으면 검수가 쉬워집니다.",
    "prompt": "한국어 매뉴얼 텍스트를 영어로 번역해줘.
내가 올린 용어집(CSV)에 있는 단어는 반드시 지정한 영어 표현만 써줘.
용어집에 없는 전문용어는 번역 끝에 '확인 필요 용어' 목록으로 따로 모아줘.",
    "terms": [
      "용어집(글로서리) = 회사에서 정한 용어와 번역어를 모아둔 표",
      "검수 = 틀린 곳이 없는지 확인하는 일"
    ],
    "slide": 27
  },
  {
    "num": "21",
    "title": "카드 내역 가계부 자동 분석",
    "full_title": "사례 21. 카드 내역 가계부 자동 분석",
    "theme_code": "E",
    "theme_name": "개인 생활·재테크",
    "theme_tag": "E · 개인 생활·재테크",
    "theme_color": "#f59e0b",
    "theme_icon": "💰",
    "intent": "카드 이용내역 파일 하나로 소비 패턴과 '이번 달 많이 늘어난 지출'을 알려준다.",
    "knowhow": "금융 정보는 '내 컴퓨터 밖으로 보내지 않게'를 조건으로 거세요. 실제 값은 가리고 시험한 뒤 사용하세요.",
    "prompt": "카드사에서 받은 이용내역 CSV를 읽어서 가맹점 이름으로 식비/교통/구독/쇼핑으로 자동 분류해줘.
월별 카테고리 합계 도넛 차트와 '지난달 대비 많이 늘어난 항목 3개'를 보여줘.
자료는 내 컴퓨터 밖으로 전송하지 않게 만들어줘.",
    "terms": [
      "가맹점 = 카드를 결제한 가게",
      "구독 = 매달 자동으로 나가는 정기결제",
      "도넛 차트 = 비율을 고리 모양으로 보여주는 그래프"
    ],
    "slide": 29
  },
  {
    "num": "22",
    "title": "운동·식단 기록 트래커",
    "full_title": "사례 22. 운동·식단 기록 트래커",
    "theme_code": "E",
    "theme_name": "개인 생활·재테크",
    "theme_tag": "E · 개인 생활·재테크",
    "theme_color": "#f59e0b",
    "theme_icon": "💰",
    "intent": "작심삼일을 막기 위해 기록·그래프·응원 문구가 나오는 나만의 앱을 만든다.",
    "knowhow": "폰 홈 화면에 바로가기를 추가하면 앱처럼 쓸 수 있습니다. 먼저 '폰 화면에 맞게'라고 요청하세요.",
    "prompt": "하루 운동 시간, 걸음 수, 체중, 식사 메모를 입력하면 주간 그래프로 보여주는 폰용 웹페이지를 만들어줘.
3일 연속 기록이 없으면 화면 맨 위에 응원 문구가 뜨게 해줘.
데이터는 폰 브라우저에 저장해줘.",
    "terms": [
      "폰용(반응형) = 화면 크기에 맞춰 모양이 자동으로 바뀌는 방식",
      "트래커 = 기록을 쌓고 추이를 보는 도구"
    ],
    "slide": 30
  },
  {
    "num": "23",
    "title": "여행 일정 + 예산 플래너",
    "full_title": "사례 23. 여행 일정 + 예산 플래너",
    "theme_code": "E",
    "theme_name": "개인 생활·재테크",
    "theme_tag": "E · 개인 생활·재테크",
    "theme_color": "#f59e0b",
    "theme_icon": "💰",
    "intent": "일정표와 비용 계산을 한 화면에서 해서 환율·예산 계산 실수를 없앤다.",
    "knowhow": "환율은 '입력창으로 직접 수정'하게 하세요. 오늘 환율을 AI가 알 수 없으니 틀린 값이 박히는 일을 막습니다.",
    "prompt": "3박 4일 일본 여행 일정표 웹페이지를 만들어줘.
날짜별 시간표, 이동 수단, 예상 비용(엔과 원 환산)을 표로 정리해줘.
환율은 입력창으로 내가 직접 고치게 하고, 총예산 대비 남은 금액이 바로 보이게 해줘.
인쇄용 화면도 넣어줘.",
    "terms": [
      "환산 = 한 나라 돈을 다른 나라 돈으로 바꿔 계산하는 것",
      "실시간 계산 = 입력값을 바꾸면 결과도 바로 바뀌는 것"
    ],
    "slide": 31
  },
  {
    "num": "24",
    "title": "말하듯 적은 메모 → 할 일 정리",
    "full_title": "사례 24. 말하듯 적은 메모 → 할 일 정리",
    "theme_code": "E",
    "theme_name": "개인 생활·재테크",
    "theme_tag": "E · 개인 생활·재테크",
    "theme_color": "#f59e0b",
    "theme_icon": "💰",
    "intent": "머릿속 잡다한 생각을 쏟아내면 오늘·이번 주·언젠가로 자동 분류해준다.",
    "knowhow": "정리 기준을 말해주세요('급한 순'). 마이크 입력을 요청하면 이동 중에도 말로 쓸 수 있습니다.",
    "prompt": "내가 두서없이 적은 메모를 붙여넣으면 ①오늘 할 일 ②이번 주 ③언젠가 ④그냥 생각으로 분류하고 급한 순서로 정렬해주는 도구를 만들어줘.
마이크 버튼을 눌러 말로도 입력할 수 있게 해줘.",
    "terms": [
      "음성 인식 = 말소리를 글자로 바꾸는 기능(브라우저에 기본 내장)",
      "분류 = 성격이 같은 것끼리 묶기"
    ],
    "slide": 32
  },
  {
    "num": "25",
    "title": "내 메모·독서노트 검색창",
    "full_title": "사례 25. 내 메모·독서노트 검색창",
    "theme_code": "E",
    "theme_name": "개인 생활·재테크",
    "theme_tag": "E · 개인 생활·재테크",
    "theme_color": "#f59e0b",
    "theme_icon": "💰",
    "intent": "흩어진 메모 파일에서 키워드 하나로 필요한 문장을 바로 찾는다.",
    "knowhow": "'태그별 모아보기'를 함께 요청하세요. 메모가 늘어도 정리가 되고, 찾는 시간이 크게 줄어듭니다.",
    "prompt": "내가 모아둔 텍스트 메모 파일들(폴더 하나)을 읽어서, 키워드를 입력하면 관련 메모를 제목과 해당 문장으로 보여주는 검색 페이지를 만들어줘.
메모 안의 #태그를 인식해서 태그별로 모아보는 기능도 넣어줘.",
    "terms": [
      "태그 = 글에 붙이는 분류용 단어(예: #독서)",
      "색인(인덱스) = 검색을 빠르게 하려고 미리 만들어둔 목차"
    ],
    "slide": 33
  },
  {
    "num": "26",
    "title": "나만의 포트폴리오·명함 사이트",
    "full_title": "사례 26. 나만의 포트폴리오·명함 사이트",
    "theme_code": "F",
    "theme_name": "부업·성장·재미",
    "theme_tag": "F · 부업·성장·재미",
    "theme_color": "#06b6d4",
    "theme_icon": "🚀",
    "intent": "이직·부업·네트워킹에 쓸 나를 소개하는 한 장짜리 사이트를 무료로 공개한다.",
    "knowhow": "성과는 반드시 숫자와 함께 적으세요('매출 20% 개선'). 연락처는 공개할 범위를 미리 정해두세요.",
    "prompt": "마케터인 나를 소개하는 한 장짜리 사이트를 만들어줘.
이름, 한 줄 소개, 대표 성과 3가지(숫자 포함), 연락처 버튼을 넣어줘. 폰에서도 보기 좋게 해줘.
무료로 인터넷에 올리는 방법(GitHub Pages)도 단계별로 알려줘.",
    "terms": [
      "배포 = 만든 것을 인터넷에 올려 다른 사람이 볼 수 있게 하는 것",
      "GitHub Pages = 무료로 웹페이지를 올릴 수 있는 서비스"
    ],
    "slide": 35
  },
  {
    "num": "27",
    "title": "상세페이지·블로그 글 초안 도구",
    "full_title": "사례 27. 상세페이지·블로그 글 초안 도구",
    "theme_code": "F",
    "theme_name": "부업·성장·재미",
    "theme_tag": "F · 부업·성장·재미",
    "theme_color": "#06b6d4",
    "theme_icon": "🚀",
    "intent": "제품 정보만 넣으면 문구 3종과 제목 후보를 만들어 글쓰기 시작 장벽을 없앤다.",
    "knowhow": "'과장·허위 표현은 경고'를 넣으세요. 광고 표현 문제는 부업에서 가장 흔한 실수입니다.",
    "prompt": "제품 정보(이름, 특징, 가격)를 입력하면 상세페이지 문구 3종(감성형/정보형/후기형)과 제목 후보 10개를 만드는 도구를 만들어줘.
'최고', '100% 효과' 같은 과장·허위 가능성이 있는 표현은 노란색으로 경고해줘.",
    "terms": [
      "상세페이지 = 쇼핑몰에서 제품을 설명하는 긴 페이지",
      "초안 = 다듬기 전 처음 쓴 글",
      "과장광고 = 사실보다 부풀려 광고하는 표현"
    ],
    "slide": 36
  },
  {
    "num": "28",
    "title": "자격증·영어 공부 퀴즈 앱",
    "full_title": "사례 28. 자격증·영어 공부 퀴즈 앱",
    "theme_code": "F",
    "theme_name": "부업·성장·재미",
    "theme_tag": "F · 부업·성장·재미",
    "theme_color": "#06b6d4",
    "theme_icon": "🚀",
    "intent": "내가 정리한 노트가 곧 문제집이 되고, 틀린 문제만 반복해서 풀게 한다.",
    "knowhow": "내 노트를 기반으로 '출처 밖의 내용은 문제로 내지 마'라고 하면 시험 범위를 벗어나는 문제를 막습니다.",
    "prompt": "내가 붙여넣은 학습 노트로 4지선다 퀴즈 10문제를 만들어줘.
틀린 문제는 오답노트에 모아 다음번에 우선 다시 내줘.
점수 기록과 연속 학습일 표시도 넣어줘.
노트에 없는 내용은 문제로 만들지 마.",
    "terms": [
      "4지선다 = 보기 4개 중 정답 1개를 고르는 방식",
      "오답노트 = 틀린 문제를 따로 모아 복습하는 기록"
    ],
    "slide": 37
  },
  {
    "num": "29",
    "title": "아침 브리핑 알림 봇",
    "full_title": "사례 29. 아침 브리핑 알림 봇",
    "theme_code": "F",
    "theme_name": "부업·성장·재미",
    "theme_tag": "F · 부업·성장·재미",
    "theme_color": "#06b6d4",
    "theme_icon": "🚀",
    "intent": "매일 아침 날씨·환율·일정이 메신저로 자동 도착하는 나만의 비서를 만든다. 만드는 재미가 큰 활용.",
    "knowhow": "토큰(비밀 열쇠)은 코드에 직접 쓰지 말고 따로 보관하게 하세요. 외부에 올리면 남이 내 봇을 쓸 수 있습니다.",
    "prompt": "매일 오전 8시에 ①오늘 날씨 ②환율 ③내 일정 3개를 요약해서 텔레그램으로 보내주는 프로그램을 만들어줘.
필요한 계정과 토큰 발급 방법, 컴퓨터를 꺼도 돌아가게 하는 무료 방법을 단계별로 알려줘.
토큰은 코드에 직접 적지 말고 따로 보관하게 해줘.",
    "terms": [
      "봇 = 정해진 일을 자동으로 해주는 프로그램",
      "토큰 = 서비스가 나를 알아보는 비밀 열쇠 문자열, 절대 남에게 공개 금지"
    ],
    "slide": 38
  },
  {
    "num": "30",
    "title": "사내 문서 FAQ 챗봇",
    "full_title": "사례 30. 사내 문서 FAQ 챗봇",
    "theme_code": "F",
    "theme_name": "부업·성장·재미",
    "theme_tag": "F · 부업·성장·재미",
    "theme_color": "#06b6d4",
    "theme_icon": "🚀",
    "intent": "규정집·매뉴얼을 올려두면 '이거 어떻게 해요?'에 근거와 함께 대신 답하게 한다. 가장 신기한 활용.",
    "knowhow": "'문서에 없으면 모른다고 답해'가 핵심 규칙입니다. AI가 없는 규정을 그럴듯하게 지어내는 걸 막아줍니다.",
    "prompt": "내가 올린 규정집 PDF의 내용만으로 질문에 답하는 챗봇 화면을 만들어줘.
답변 아래에 근거가 된 페이지 번호를 같이 보여줘.
문서에 없는 질문에는 추측하지 말고 '규정집에서 찾을 수 없음'이라고 답해줘.",
    "terms": [
      "RAG = 질문과 관련된 문서 조각을 찾아 AI에게 함께 주고 답하게 하는 방식",
      "환각 = AI가 없는 사실을 그럴듯하게 지어내는 현상"
    ],
    "slide": 39
  },
  {
    "num": "31",
    "title": "유튜브 영상 요약·핵심 정리기",
    "full_title": "사례 31. 유튜브 영상 요약·핵심 정리기",
    "theme_code": "G",
    "theme_name": "제미나이 크롤링",
    "theme_tag": "G · 보너스 · 제미나이 크롤링",
    "theme_color": "#f43f5e",
    "theme_icon": "🤖",
    "intent": "1시간짜리 세미나·강의 영상을 끝까지 보지 않고도 핵심 5가지와 시간대별 목차로 훑어본다.",
    "knowhow": "자막이 있는 영상만 대상으로 하고, '자막이 없으면 억지로 만들지 말고 알려줘'를 넣으세요. 요약을 남에게 공유할 때는 원본 링크와 출처를 꼭 함께 적으세요.",
    "prompt": "유튜브 영상 주소를 입력하면 그 영상의 공식 자막(트랜스크립트)을 가져와서, 제미나이(Gemini)로 ①한 줄 요약 ②핵심 5가지 ③시간대별 목차를 만들어주는 웹페이지를 만들어줘.
자막이 없으면 '자막 없음'이라고 알려주고 내용을 지어내지 마.
Gemini API 키는 코드에 직접 쓰지 말고 따로 보관하게 해줘.
실행 방법과 키 발급 방법을 초보자 기준으로 단계별로 알려줘.",
    "terms": [
      "트랜스크립트 = 영상 속 말을 글로 옮긴 자막 텍스트",
      "Gemini API 키 = 구글 AI를 내 프로그램에서 쓰게 해주는 비밀 열쇠 문자열, 공개 금지",
      "요약 = 핵심만 줄여 쓴 글"
    ],
    "slide": 41
  },
  {
    "num": "32",
    "title": "관심 채널 새 영상 아침 요약",
    "full_title": "사례 32. 관심 채널 새 영상 아침 요약",
    "theme_code": "G",
    "theme_name": "제미나이 크롤링",
    "theme_tag": "G · 보너스 · 제미나이 크롤링",
    "theme_color": "#f43f5e",
    "theme_icon": "🤖",
    "intent": "구독 채널 5개의 새 영상을 일일이 열어보지 않고, 매일 아침 3줄 요약표로 받아본다.",
    "knowhow": "화면을 긁어오지 말고 공식 통로(RSS나 YouTube Data API)만 쓰게 하세요. 하루 1~2번만 실행하게 해야 차단이나 사용량 초과를 피합니다.",
    "prompt": "내가 정한 유튜브 채널 5개의 최근 24시간 새 영상을 공식 RSS 주소로 가져와서, [채널명, 제목, 링크, 3줄 요약] 표로 만들어줘.
요약은 영상 자막을 제미나이(Gemini)에게 읽혀서 만들어줘. 자막이 없으면 제목만 표시해줘.
유튜브 화면을 직접 긁어오는 방식은 쓰지 말고, 하루 한 번만 실행되게 해줘.
결과는 HTML 한 장으로 저장해줘.",
    "terms": [
      "RSS = 새 글·새 영상 목록을 알려주는 공식 구독 주소",
      "YouTube Data API = 유튜브가 정보를 가져가도록 허용한 공식 통로",
      "스크래핑 = 화면에서 정보를 자동으로 긁어오는 것(약관 확인 필수)"
    ],
    "slide": 42
  },
  {
    "num": "33",
    "title": "업계 뉴스 수집·AI 큐레이션",
    "full_title": "사례 33. 업계 뉴스 수집·AI 큐레이션",
    "theme_code": "G",
    "theme_name": "제미나이 크롤링",
    "theme_tag": "G · 보너스 · 제미나이 크롤링",
    "theme_color": "#f43f5e",
    "theme_icon": "🤖",
    "intent": "여러 뉴스 사이트를 돌아다니던 아침 루틴을, 우리 업계와 관련된 기사만 골라 한 줄 요약한 목록으로 바꾼다.",
    "knowhow": "기사 전문을 저장하거나 퍼뜨리지 말고 '제목+링크+내 말로 요약'만 남기게 하세요. 저작권과 사이트 약관 문제를 피하는 가장 안전한 방식입니다.",
    "prompt": "내가 지정한 뉴스 사이트 5곳의 RSS를 읽어서 오늘 올라온 기사를 모아줘. 제목이 비슷한 중복 기사는 하나로 합쳐줘.
제미나이(Gemini)에게 '우리 업계(중소 제조업)와의 관련도를 1~5점으로 매기고 한 줄 요약'을 시켜서, 4점 이상만 점수순으로 보여줘.
기사 본문 전체는 저장하지 말고 제목, 링크, 요약만 남겨줘.",
    "terms": [
      "큐레이션 = 많은 정보 중 쓸모 있는 것만 골라 정리해주는 일",
      "중복 제거 = 같은 내용이 여러 번 나온 것을 하나로 합치기",
      "관련도 점수 = 내 업무와 얼마나 관련 있는지 매긴 점수"
    ],
    "slide": 43
  },
  {
    "num": "34",
    "title": "입찰·채용 공고 모니터링 알림",
    "full_title": "사례 34. 입찰·채용 공고 모니터링 알림",
    "theme_code": "G",
    "theme_name": "제미나이 크롤링",
    "theme_tag": "G · 보너스 · 제미나이 크롤링",
    "theme_color": "#f43f5e",
    "theme_icon": "🤖",
    "intent": "공공 입찰이나 채용 공고를 매일 검색하던 일을, 내 조건에 맞는 새 공고만 알려주는 알림으로 바꾼다.",
    "knowhow": "공공데이터포털(data.go.kr) 같은 공식 OpenAPI를 우선 찾아보세요. 화면 긁기보다 안정적이고 약관 문제도 적습니다. 마감일은 꼭 원본에서 다시 확인하세요.",
    "prompt": "공공데이터포털의 입찰공고 OpenAPI를 사용해서, 키워드('소프트웨어', '시스템 구축')가 제목에 들어간 오늘 새 공고를 가져오는 프로그램을 만들어줘.
[공고명, 기관, 마감일, 예산, 링크]를 표로 보여주고, 제미나이(Gemini)로 공고 내용을 3줄로 요약해줘.
이미 알려준 공고는 다시 알려주지 않게 기록해줘.
API 키 발급 방법도 단계별로 알려줘.",
    "terms": [
      "OpenAPI = 기관이 누구나 쓰도록 공개한 데이터 이용 통로",
      "공공데이터포털 = 정부·공공기관 데이터를 모아 제공하는 사이트",
      "키워드 = 찾고 싶은 핵심 단어"
    ],
    "slide": 44
  },
  {
    "num": "35",
    "title": "웹페이지 여러 개 → 비교표",
    "full_title": "사례 35. 웹페이지 여러 개 → 비교표",
    "theme_code": "G",
    "theme_name": "제미나이 크롤링",
    "theme_tag": "G · 보너스 · 제미나이 크롤링",
    "theme_color": "#f43f5e",
    "theme_icon": "🤖",
    "intent": "제품·숙소·서비스 소개 페이지 5개를 일일이 읽고 옮겨 적던 일을 가격·특징 비교표로 자동 정리한다.",
    "knowhow": "'접속이 막히면 우회하지 말고 알려줘', '요청 사이에 몇 초 간격을 둬줘'를 넣으세요. 사이트의 robots.txt와 이용약관을 먼저 확인하는 습관이 가장 중요합니다.",
    "prompt": "내가 붙여넣은 웹페이지 주소 5개를 열어서 제미나이(Gemini)로 [이름, 가격, 핵심 특징 3가지, 단점]을 뽑아 비교표로 만들어줘.
페이지에 정보가 없으면 추측하지 말고 '정보 없음'으로 적어줘.
접속이 막히면 우회하지 말고 알려주고, 요청 사이에 3초 이상 간격을 둬줘.
각 사이트의 robots.txt를 확인하는 방법도 안내해줘.",
    "terms": [
      "robots.txt = 사이트가 '이 부분은 자동 수집하지 마세요'라고 적어둔 안내 파일",
      "크롤링 = 프로그램이 웹페이지를 돌며 정보를 모으는 일",
      "이용약관 = 사이트 이용 규칙으로, 자동 수집 금지 조항이 있을 수 있음"
    ],
    "slide": 45
  }
];

const CODER_LEVEL_DATA = [{"part": 1, "taskId": "coder_lvl_01", "title": "01편. \"나만 제자리걸음일까?\" 초보·중급·고급자를 가르는 결정적 한 끗", "totalSlides": 14, "folder": "part_01", "thumb": "./coder-level-slides/part_01/thumb.webp", "slides": ["./coder-level-slides/part_01/slide_01.webp", "./coder-level-slides/part_01/slide_02.webp", "./coder-level-slides/part_01/slide_03.webp", "./coder-level-slides/part_01/slide_04.webp", "./coder-level-slides/part_01/slide_05.webp", "./coder-level-slides/part_01/slide_06.webp", "./coder-level-slides/part_01/slide_07.webp", "./coder-level-slides/part_01/slide_08.webp", "./coder-level-slides/part_01/slide_09.webp", "./coder-level-slides/part_01/slide_10.webp", "./coder-level-slides/part_01/slide_11.webp", "./coder-level-slides/part_01/slide_12.webp", "./coder-level-slides/part_01/slide_13.webp", "./coder-level-slides/part_01/slide_14.webp"], "pdfName": "01편 나만 제자리걸음일까 초보중급고급자를 가르는 결정적 한 끗.pdf"}, {"part": 2, "taskId": "coder_lvl_02", "title": "02편. 100% 한 번에 vs 10%씩 분할? 토큰 절감과 제작 시간의 딜레마", "totalSlides": 15, "folder": "part_02", "thumb": "./coder-level-slides/part_02/thumb.webp", "slides": ["./coder-level-slides/part_02/slide_01.webp", "./coder-level-slides/part_02/slide_02.webp", "./coder-level-slides/part_02/slide_03.webp", "./coder-level-slides/part_02/slide_04.webp", "./coder-level-slides/part_02/slide_05.webp", "./coder-level-slides/part_02/slide_06.webp", "./coder-level-slides/part_02/slide_07.webp", "./coder-level-slides/part_02/slide_08.webp", "./coder-level-slides/part_02/slide_09.webp", "./coder-level-slides/part_02/slide_10.webp", "./coder-level-slides/part_02/slide_11.webp", "./coder-level-slides/part_02/slide_12.webp", "./coder-level-slides/part_02/slide_13.webp", "./coder-level-slides/part_02/slide_14.webp", "./coder-level-slides/part_02/slide_15.webp"], "pdfName": "02편 100 한 번에 vs 10씩 분할 토큰 절감과 제작 시간의 딜레마.pdf"}, {"part": 3, "taskId": "coder_lvl_03", "title": "03편. 상황(Use-case)별 최적 전략: 언제 통째로 치고, 언제 쪼갤까?", "totalSlides": 8, "folder": "part_03", "thumb": "./coder-level-slides/part_03/thumb.webp", "slides": ["./coder-level-slides/part_03/slide_01.webp", "./coder-level-slides/part_03/slide_02.webp", "./coder-level-slides/part_03/slide_03.webp", "./coder-level-slides/part_03/slide_04.webp", "./coder-level-slides/part_03/slide_05.webp", "./coder-level-slides/part_03/slide_06.webp", "./coder-level-slides/part_03/slide_07.webp", "./coder-level-slides/part_03/slide_08.webp"], "pdfName": "03편 상황Use-case별 최적 전략 언제 통째로 치고 언제 쪼갤까.pdf"}, {"part": 4, "taskId": "coder_lvl_04", "title": "04편. 초보 탈출 1단계: \"에러 났어요\"에서 벗어나는 디버깅 프롬프트 3법칙", "totalSlides": 13, "folder": "part_04", "thumb": "./coder-level-slides/part_04/thumb.webp", "slides": ["./coder-level-slides/part_04/slide_01.webp", "./coder-level-slides/part_04/slide_02.webp", "./coder-level-slides/part_04/slide_03.webp", "./coder-level-slides/part_04/slide_04.webp", "./coder-level-slides/part_04/slide_05.webp", "./coder-level-slides/part_04/slide_06.webp", "./coder-level-slides/part_04/slide_07.webp", "./coder-level-slides/part_04/slide_08.webp", "./coder-level-slides/part_04/slide_09.webp", "./coder-level-slides/part_04/slide_10.webp", "./coder-level-slides/part_04/slide_11.webp", "./coder-level-slides/part_04/slide_12.webp", "./coder-level-slides/part_04/slide_13.webp"], "pdfName": "04편 초보 탈출 1단계 에러 났어요에서 벗어나는 디버깅 프롬프트 3법칙.pdf"}, {"part": 5, "taskId": "coder_lvl_05", "title": "05편. 중급 도약 2단계: \"맥락 유지(Context)\"와 파일 구조화의 비결", "totalSlides": 10, "folder": "part_05", "thumb": "./coder-level-slides/part_05/thumb.webp", "slides": ["./coder-level-slides/part_05/slide_01.webp", "./coder-level-slides/part_05/slide_02.webp", "./coder-level-slides/part_05/slide_03.webp", "./coder-level-slides/part_05/slide_04.webp", "./coder-level-slides/part_05/slide_05.webp", "./coder-level-slides/part_05/slide_06.webp", "./coder-level-slides/part_05/slide_07.webp", "./coder-level-slides/part_05/slide_08.webp", "./coder-level-slides/part_05/slide_09.webp", "./coder-level-slides/part_05/slide_10.webp"], "pdfName": "05편 중급 도약 2단계 맥락 유지Context와 파일 구조화의 비결.pdf"}, {"part": 6, "taskId": "coder_lvl_06", "title": "06편. 고급 완성 3단계: AI에게 \"설계 규칙(Rules/Spec)\"을 먼저 주입하는 법", "totalSlides": 12, "folder": "part_06", "thumb": "./coder-level-slides/part_06/thumb.webp", "slides": ["./coder-level-slides/part_06/slide_01.webp", "./coder-level-slides/part_06/slide_02.webp", "./coder-level-slides/part_06/slide_03.webp", "./coder-level-slides/part_06/slide_04.webp", "./coder-level-slides/part_06/slide_05.webp", "./coder-level-slides/part_06/slide_06.webp", "./coder-level-slides/part_06/slide_07.webp", "./coder-level-slides/part_06/slide_08.webp", "./coder-level-slides/part_06/slide_09.webp", "./coder-level-slides/part_06/slide_10.webp", "./coder-level-slides/part_06/slide_11.webp", "./coder-level-slides/part_06/slide_12.webp"], "pdfName": "06편 고급 완성 3단계 AI에게 설계 규칙RulesSpec을 먼저 주입하는 법.pdf"}, {"part": 7, "taskId": "coder_lvl_07", "title": "07편. 실전 시간·비용 10배 절감! 토큰 최적화와 롤백(Git)의 기술", "totalSlides": 15, "folder": "part_07", "thumb": "./coder-level-slides/part_07/thumb.webp", "slides": ["./coder-level-slides/part_07/slide_01.webp", "./coder-level-slides/part_07/slide_02.webp", "./coder-level-slides/part_07/slide_03.webp", "./coder-level-slides/part_07/slide_04.webp", "./coder-level-slides/part_07/slide_05.webp", "./coder-level-slides/part_07/slide_06.webp", "./coder-level-slides/part_07/slide_07.webp", "./coder-level-slides/part_07/slide_08.webp", "./coder-level-slides/part_07/slide_09.webp", "./coder-level-slides/part_07/slide_10.webp", "./coder-level-slides/part_07/slide_11.webp", "./coder-level-slides/part_07/slide_12.webp", "./coder-level-slides/part_07/slide_13.webp", "./coder-level-slides/part_07/slide_14.webp", "./coder-level-slides/part_07/slide_15.webp"], "pdfName": "07편 실전 시간비용 10배 절감 토큰 최적화와 롤백Git의 기술.pdf"}, {"part": 8, "taskId": "coder_lvl_08", "title": "08편. 초보에서 고급자로의 완성 로드맵: 나만의 1인 개발 관제탑 구축", "totalSlides": 14, "folder": "part_08", "thumb": "./coder-level-slides/part_08/thumb.webp", "slides": ["./coder-level-slides/part_08/slide_01.webp", "./coder-level-slides/part_08/slide_02.webp", "./coder-level-slides/part_08/slide_03.webp", "./coder-level-slides/part_08/slide_04.webp", "./coder-level-slides/part_08/slide_05.webp", "./coder-level-slides/part_08/slide_06.webp", "./coder-level-slides/part_08/slide_07.webp", "./coder-level-slides/part_08/slide_08.webp", "./coder-level-slides/part_08/slide_09.webp", "./coder-level-slides/part_08/slide_10.webp", "./coder-level-slides/part_08/slide_11.webp", "./coder-level-slides/part_08/slide_12.webp", "./coder-level-slides/part_08/slide_13.webp", "./coder-level-slides/part_08/slide_14.webp"], "pdfName": "08편 초보에서 고급자로의 완성 로드맵 나만의 1인 개발 관제탑 구축.pdf"}];

const WORKER_AI_DATA = [{"part": 1, "taskId": "worker_ai_01", "title": "01편. \"나도 써볼 수 있을까?\" AI의 진짜 정체와 말문 트기", "totalSlides": 13, "folder": "part_01", "thumb": "./worker-ai-slides/part_01/thumb.webp", "slides": ["./worker-ai-slides/part_01/slide_01.webp", "./worker-ai-slides/part_01/slide_02.webp", "./worker-ai-slides/part_01/slide_03.webp", "./worker-ai-slides/part_01/slide_04.webp", "./worker-ai-slides/part_01/slide_05.webp", "./worker-ai-slides/part_01/slide_06.webp", "./worker-ai-slides/part_01/slide_07.webp", "./worker-ai-slides/part_01/slide_08.webp", "./worker-ai-slides/part_01/slide_09.webp", "./worker-ai-slides/part_01/slide_10.webp", "./worker-ai-slides/part_01/slide_11.webp", "./worker-ai-slides/part_01/slide_12.webp", "./worker-ai-slides/part_01/slide_13.webp"], "pdfName": "01편 나도 써볼 수 있을까 AI의 진짜 정체와 말문 트기.pdf"}, {"part": 2, "taskId": "worker_ai_02", "title": "02편. 주말 여행 계획 10초 컷! 나만의 맞춤 가이드 만들기", "totalSlides": 11, "folder": "part_02", "thumb": "./worker-ai-slides/part_02/thumb.webp", "slides": ["./worker-ai-slides/part_02/slide_01.webp", "./worker-ai-slides/part_02/slide_02.webp", "./worker-ai-slides/part_02/slide_03.webp", "./worker-ai-slides/part_02/slide_04.webp", "./worker-ai-slides/part_02/slide_05.webp", "./worker-ai-slides/part_02/slide_06.webp", "./worker-ai-slides/part_02/slide_07.webp", "./worker-ai-slides/part_02/slide_08.webp", "./worker-ai-slides/part_02/slide_09.webp", "./worker-ai-slides/part_02/slide_10.webp", "./worker-ai-slides/part_02/slide_11.webp"], "pdfName": "02편 주말 여행 계획 10초 컷 나만의 맞춤 가이드 만들기.pdf"}, {"part": 3, "taskId": "worker_ai_03", "title": "03편. \"냉장고에 계란이랑 양파뿐인데?\" 일상 고민 해결사", "totalSlides": 12, "folder": "part_03", "thumb": "./worker-ai-slides/part_03/thumb.webp", "slides": ["./worker-ai-slides/part_03/slide_01.webp", "./worker-ai-slides/part_03/slide_02.webp", "./worker-ai-slides/part_03/slide_03.webp", "./worker-ai-slides/part_03/slide_04.webp", "./worker-ai-slides/part_03/slide_05.webp", "./worker-ai-slides/part_03/slide_06.webp", "./worker-ai-slides/part_03/slide_07.webp", "./worker-ai-slides/part_03/slide_08.webp", "./worker-ai-slides/part_03/slide_09.webp", "./worker-ai-slides/part_03/slide_10.webp", "./worker-ai-slides/part_03/slide_11.webp", "./worker-ai-slides/part_03/slide_12.webp"], "pdfName": "03편 냉장고에 계란이랑 양파뿐인데 일상 고민 해결사.pdf"}, {"part": 4, "taskId": "worker_ai_04", "title": "04편. 지친 하루 끝, 나만의 취미 과외선생님 모시기", "totalSlides": 11, "folder": "part_04", "thumb": "./worker-ai-slides/part_04/thumb.webp", "slides": ["./worker-ai-slides/part_04/slide_01.webp", "./worker-ai-slides/part_04/slide_02.webp", "./worker-ai-slides/part_04/slide_03.webp", "./worker-ai-slides/part_04/slide_04.webp", "./worker-ai-slides/part_04/slide_05.webp", "./worker-ai-slides/part_04/slide_06.webp", "./worker-ai-slides/part_04/slide_07.webp", "./worker-ai-slides/part_04/slide_08.webp", "./worker-ai-slides/part_04/slide_09.webp", "./worker-ai-slides/part_04/slide_10.webp", "./worker-ai-slides/part_04/slide_11.webp"], "pdfName": "04편 지친 하루 끝 나만의 취미 과외선생님 모시기.pdf"}, {"part": 5, "taskId": "worker_ai_05", "title": "05편. 100페이지 보고서, 3줄로 핵심만 요약하는 마법", "totalSlides": 10, "folder": "part_05", "thumb": "./worker-ai-slides/part_05/thumb.webp", "slides": ["./worker-ai-slides/part_05/slide_01.webp", "./worker-ai-slides/part_05/slide_02.webp", "./worker-ai-slides/part_05/slide_03.webp", "./worker-ai-slides/part_05/slide_04.webp", "./worker-ai-slides/part_05/slide_05.webp", "./worker-ai-slides/part_05/slide_06.webp", "./worker-ai-slides/part_05/slide_07.webp", "./worker-ai-slides/part_05/slide_08.webp", "./worker-ai-slides/part_05/slide_09.webp", "./worker-ai-slides/part_05/slide_10.webp"], "pdfName": "05편 100페이지 보고서 3줄로 핵심만 요약하는 마법.pdf"}, {"part": 6, "taskId": "worker_ai_06", "title": "06편. \"숫자가 너무 많아!\" 복잡한 엑셀 데이터 10초 자동 분석", "totalSlides": 12, "folder": "part_06", "thumb": "./worker-ai-slides/part_06/thumb.webp", "slides": ["./worker-ai-slides/part_06/slide_01.webp", "./worker-ai-slides/part_06/slide_02.webp", "./worker-ai-slides/part_06/slide_03.webp", "./worker-ai-slides/part_06/slide_04.webp", "./worker-ai-slides/part_06/slide_05.webp", "./worker-ai-slides/part_06/slide_06.webp", "./worker-ai-slides/part_06/slide_07.webp", "./worker-ai-slides/part_06/slide_08.webp", "./worker-ai-slides/part_06/slide_09.webp", "./worker-ai-slides/part_06/slide_10.webp", "./worker-ai-slides/part_06/slide_11.webp", "./worker-ai-slides/part_06/slide_12.webp"], "pdfName": "06편 숫자가 너무 많아 복잡한 엑셀 데이터 10초 자동 분석.pdf"}, {"part": 7, "taskId": "worker_ai_07", "title": "07편. 코딩 한 줄 몰라도 괜찮아! \"바이브 코딩\"의 신세계", "totalSlides": 12, "folder": "part_07", "thumb": "./worker-ai-slides/part_07/thumb.webp", "slides": ["./worker-ai-slides/part_07/slide_01.webp", "./worker-ai-slides/part_07/slide_02.webp", "./worker-ai-slides/part_07/slide_03.webp", "./worker-ai-slides/part_07/slide_04.webp", "./worker-ai-slides/part_07/slide_05.webp", "./worker-ai-slides/part_07/slide_06.webp", "./worker-ai-slides/part_07/slide_07.webp", "./worker-ai-slides/part_07/slide_08.webp", "./worker-ai-slides/part_07/slide_09.webp", "./worker-ai-slides/part_07/slide_10.webp", "./worker-ai-slides/part_07/slide_11.webp", "./worker-ai-slides/part_07/slide_12.webp"], "pdfName": "07편 코딩 한 줄 몰라도 괜찮아 바이브 코딩의 신세계.pdf"}, {"part": 8, "taskId": "worker_ai_08", "title": "08편. 30분 만에 뚝딱! 나만의 미니 자동화 도구 제작", "totalSlides": 15, "folder": "part_08", "thumb": "./worker-ai-slides/part_08/thumb.webp", "slides": ["./worker-ai-slides/part_08/slide_01.webp", "./worker-ai-slides/part_08/slide_02.webp", "./worker-ai-slides/part_08/slide_03.webp", "./worker-ai-slides/part_08/slide_04.webp", "./worker-ai-slides/part_08/slide_05.webp", "./worker-ai-slides/part_08/slide_06.webp", "./worker-ai-slides/part_08/slide_07.webp", "./worker-ai-slides/part_08/slide_08.webp", "./worker-ai-slides/part_08/slide_09.webp", "./worker-ai-slides/part_08/slide_10.webp", "./worker-ai-slides/part_08/slide_11.webp", "./worker-ai-slides/part_08/slide_12.webp", "./worker-ai-slides/part_08/slide_13.webp", "./worker-ai-slides/part_08/slide_14.webp", "./worker-ai-slides/part_08/slide_15.webp"], "pdfName": "08편 30분 만에 뚝딱 나만의 미니 자동화 도구 제작.pdf"}, {"part": 9, "taskId": "worker_ai_09", "title": "09편. 터미널 명령어? \"제미나이 CLI\"로 똑똑하게 일하기", "totalSlides": 12, "folder": "part_09", "thumb": "./worker-ai-slides/part_09/thumb.webp", "slides": ["./worker-ai-slides/part_09/slide_01.webp", "./worker-ai-slides/part_09/slide_02.webp", "./worker-ai-slides/part_09/slide_03.webp", "./worker-ai-slides/part_09/slide_04.webp", "./worker-ai-slides/part_09/slide_05.webp", "./worker-ai-slides/part_09/slide_06.webp", "./worker-ai-slides/part_09/slide_07.webp", "./worker-ai-slides/part_09/slide_08.webp", "./worker-ai-slides/part_09/slide_09.webp", "./worker-ai-slides/part_09/slide_10.webp", "./worker-ai-slides/part_09/slide_11.webp", "./worker-ai-slides/part_09/slide_12.webp"], "pdfName": "09편 터미널 명령어 제미나이 CLI로 똑똑하게 일하기.pdf"}, {"part": 10, "taskId": "worker_ai_10", "title": "10편. 두려움은 설렘으로! AI와 함께하는 나만의 미래 로드맵", "totalSlides": 14, "folder": "part_10", "thumb": "./worker-ai-slides/part_10/thumb.webp", "slides": ["./worker-ai-slides/part_10/slide_01.webp", "./worker-ai-slides/part_10/slide_02.webp", "./worker-ai-slides/part_10/slide_03.webp", "./worker-ai-slides/part_10/slide_04.webp", "./worker-ai-slides/part_10/slide_05.webp", "./worker-ai-slides/part_10/slide_06.webp", "./worker-ai-slides/part_10/slide_07.webp", "./worker-ai-slides/part_10/slide_08.webp", "./worker-ai-slides/part_10/slide_09.webp", "./worker-ai-slides/part_10/slide_10.webp", "./worker-ai-slides/part_10/slide_11.webp", "./worker-ai-slides/part_10/slide_12.webp", "./worker-ai-slides/part_10/slide_13.webp", "./worker-ai-slides/part_10/slide_14.webp"], "pdfName": "10편 두려움은 설렘으로 AI와 함께하는 나만의 미래 로드맵.pdf"}];

const GEMINI_CLI_DEEP_DATA = [{"part": 1, "taskId": "gemini_dash_01", "title": "01차시. 제미나이 CLI 기반 아키텍처 설계 및 양방향 커맨드 실행 엔진 구축", "totalSlides": 7, "folder": "part_01", "thumb": "./gemini-cli-deep-slides/part_01/thumb.webp", "slides": ["./gemini-cli-deep-slides/part_01/slide_01.webp", "./gemini-cli-deep-slides/part_01/slide_02.webp", "./gemini-cli-deep-slides/part_01/slide_03.webp", "./gemini-cli-deep-slides/part_01/slide_04.webp", "./gemini-cli-deep-slides/part_01/slide_05.webp", "./gemini-cli-deep-slides/part_01/slide_06.webp", "./gemini-cli-deep-slides/part_01/slide_07.webp"]}, {"part": 2, "taskId": "gemini_dash_02", "title": "02차시. 엔터프라이즈급 데이터베이스(DB) 모델링 및 연동 최적화", "totalSlides": 10, "folder": "part_02", "thumb": "./gemini-cli-deep-slides/part_02/thumb.webp", "slides": ["./gemini-cli-deep-slides/part_02/slide_01.webp", "./gemini-cli-deep-slides/part_02/slide_02.webp", "./gemini-cli-deep-slides/part_02/slide_03.webp", "./gemini-cli-deep-slides/part_02/slide_04.webp", "./gemini-cli-deep-slides/part_02/slide_05.webp", "./gemini-cli-deep-slides/part_02/slide_06.webp", "./gemini-cli-deep-slides/part_02/slide_07.webp", "./gemini-cli-deep-slides/part_02/slide_08.webp", "./gemini-cli-deep-slides/part_02/slide_09.webp", "./gemini-cli-deep-slides/part_02/slide_10.webp"]}, {"part": 3, "taskId": "gemini_dash_03", "title": "03차시. 철통 사용자 인증(Auth) 및 역할 기반 권한 제어(RBAC)", "totalSlides": 10, "folder": "part_03", "thumb": "./gemini-cli-deep-slides/part_03/thumb.webp", "slides": ["./gemini-cli-deep-slides/part_03/slide_01.webp", "./gemini-cli-deep-slides/part_03/slide_02.webp", "./gemini-cli-deep-slides/part_03/slide_03.webp", "./gemini-cli-deep-slides/part_03/slide_04.webp", "./gemini-cli-deep-slides/part_03/slide_05.webp", "./gemini-cli-deep-slides/part_03/slide_06.webp", "./gemini-cli-deep-slides/part_03/slide_07.webp", "./gemini-cli-deep-slides/part_03/slide_08.webp", "./gemini-cli-deep-slides/part_03/slide_09.webp", "./gemini-cli-deep-slides/part_03/slide_10.webp"]}, {"part": 4, "taskId": "gemini_dash_04", "title": "04차시. 디스크 폭발 방지! 데이터 용량(Size) 관리 및 자동 파티셔닝·아카이빙", "totalSlides": 9, "folder": "part_04", "thumb": "./gemini-cli-deep-slides/part_04/thumb.webp", "slides": ["./gemini-cli-deep-slides/part_04/slide_01.webp", "./gemini-cli-deep-slides/part_04/slide_02.webp", "./gemini-cli-deep-slides/part_04/slide_03.webp", "./gemini-cli-deep-slides/part_04/slide_04.webp", "./gemini-cli-deep-slides/part_04/slide_05.webp", "./gemini-cli-deep-slides/part_04/slide_06.webp", "./gemini-cli-deep-slides/part_04/slide_07.webp", "./gemini-cli-deep-slides/part_04/slide_08.webp", "./gemini-cli-deep-slides/part_04/slide_09.webp"]}, {"part": 5, "taskId": "gemini_dash_05", "title": "05차시. 10만 건도 거뜬한 고속 엑셀(Excel/CSV) 내보내기 & 다운로드 최적화", "totalSlides": 10, "folder": "part_05", "thumb": "./gemini-cli-deep-slides/part_05/thumb.webp", "slides": ["./gemini-cli-deep-slides/part_05/slide_01.webp", "./gemini-cli-deep-slides/part_05/slide_02.webp", "./gemini-cli-deep-slides/part_05/slide_03.webp", "./gemini-cli-deep-slides/part_05/slide_04.webp", "./gemini-cli-deep-slides/part_05/slide_05.webp", "./gemini-cli-deep-slides/part_05/slide_06.webp", "./gemini-cli-deep-slides/part_05/slide_07.webp", "./gemini-cli-deep-slides/part_05/slide_08.webp", "./gemini-cli-deep-slides/part_05/slide_09.webp", "./gemini-cli-deep-slides/part_05/slide_10.webp"]}, {"part": 6, "taskId": "gemini_dash_06", "title": "06차시. 비동기 대용량 엑셀/CSV 업로드 처리 및 실시간 진행률(Progress) 알림", "totalSlides": 10, "folder": "part_06", "thumb": "./gemini-cli-deep-slides/part_06/thumb.webp", "slides": ["./gemini-cli-deep-slides/part_06/slide_01.webp", "./gemini-cli-deep-slides/part_06/slide_02.webp", "./gemini-cli-deep-slides/part_06/slide_03.webp", "./gemini-cli-deep-slides/part_06/slide_04.webp", "./gemini-cli-deep-slides/part_06/slide_05.webp", "./gemini-cli-deep-slides/part_06/slide_06.webp", "./gemini-cli-deep-slides/part_06/slide_07.webp", "./gemini-cli-deep-slides/part_06/slide_08.webp", "./gemini-cli-deep-slides/part_06/slide_09.webp", "./gemini-cli-deep-slides/part_06/slide_10.webp"]}, {"part": 7, "taskId": "gemini_dash_07", "title": "07차시. CI/CD 배포 자동화, 데몬 프로세스 생존 주기 및 무중단 운영 관리", "totalSlides": 12, "folder": "part_07", "thumb": "./gemini-cli-deep-slides/part_07/thumb.webp", "slides": ["./gemini-cli-deep-slides/part_07/slide_01.webp", "./gemini-cli-deep-slides/part_07/slide_02.webp", "./gemini-cli-deep-slides/part_07/slide_03.webp", "./gemini-cli-deep-slides/part_07/slide_04.webp", "./gemini-cli-deep-slides/part_07/slide_05.webp", "./gemini-cli-deep-slides/part_07/slide_06.webp", "./gemini-cli-deep-slides/part_07/slide_07.webp", "./gemini-cli-deep-slides/part_07/slide_08.webp", "./gemini-cli-deep-slides/part_07/slide_09.webp", "./gemini-cli-deep-slides/part_07/slide_10.webp", "./gemini-cli-deep-slides/part_07/slide_11.webp", "./gemini-cli-deep-slides/part_07/slide_12.webp"]}];

const VIBE_CURRICULUM_DATA = [{"part": 1, "taskId": "vibe_curri_01", "title": "01차시. AI와 나누는 첫 인사: 바이브 코딩이 뭔가요?", "totalSlides": 10, "folder": "part_01", "thumb": "./vibe-curriculum-slides/part_01/thumb.webp", "slides": ["./vibe-curriculum-slides/part_01/slide_01.webp", "./vibe-curriculum-slides/part_01/slide_02.webp", "./vibe-curriculum-slides/part_01/slide_03.webp", "./vibe-curriculum-slides/part_01/slide_04.webp", "./vibe-curriculum-slides/part_01/slide_05.webp", "./vibe-curriculum-slides/part_01/slide_06.webp", "./vibe-curriculum-slides/part_01/slide_07.webp", "./vibe-curriculum-slides/part_01/slide_08.webp", "./vibe-curriculum-slides/part_01/slide_09.webp", "./vibe-curriculum-slides/part_01/slide_10.webp"], "pdfName": "01차시_바이브코딩이란_정품.pdf"}, {"part": 2, "taskId": "vibe_curri_02", "title": "02차시. 내 컴퓨터에 마법 도구함 챙기기 (설치와 준비)", "totalSlides": 10, "folder": "part_02", "thumb": "./vibe-curriculum-slides/part_02/thumb.webp", "slides": ["./vibe-curriculum-slides/part_02/slide_01.webp", "./vibe-curriculum-slides/part_02/slide_02.webp", "./vibe-curriculum-slides/part_02/slide_03.webp", "./vibe-curriculum-slides/part_02/slide_04.webp", "./vibe-curriculum-slides/part_02/slide_05.webp", "./vibe-curriculum-slides/part_02/slide_06.webp", "./vibe-curriculum-slides/part_02/slide_07.webp", "./vibe-curriculum-slides/part_02/slide_08.webp", "./vibe-curriculum-slides/part_02/slide_09.webp", "./vibe-curriculum-slides/part_02/slide_10.webp"], "pdfName": "02차시 내 컴퓨터에 마법 도구함 챙기기 설치와 준비.pdf"}, {"part": 3, "taskId": "vibe_curri_03", "title": "03차시. AI에게 똑소리 나게 심부름시키는 마법의 주문 (프롬프트 기본)", "totalSlides": 12, "folder": "part_03", "thumb": "./vibe-curriculum-slides/part_03/thumb.webp", "slides": ["./vibe-curriculum-slides/part_03/slide_01.webp", "./vibe-curriculum-slides/part_03/slide_02.webp", "./vibe-curriculum-slides/part_03/slide_03.webp", "./vibe-curriculum-slides/part_03/slide_04.webp", "./vibe-curriculum-slides/part_03/slide_05.webp", "./vibe-curriculum-slides/part_03/slide_06.webp", "./vibe-curriculum-slides/part_03/slide_07.webp", "./vibe-curriculum-slides/part_03/slide_08.webp", "./vibe-curriculum-slides/part_03/slide_09.webp", "./vibe-curriculum-slides/part_03/slide_10.webp", "./vibe-curriculum-slides/part_03/slide_11.webp", "./vibe-curriculum-slides/part_03/slide_12.webp"], "pdfName": "03차시 AI에게 똑소리 나게 심부름시키는 마법의 주문 프롬프트 기본.pdf"}, {"part": 4, "taskId": "vibe_curri_04", "title": "04차시. 첫 번째 작품: 10분 만에 만드는 나만의 디지털 명함", "totalSlides": 13, "folder": "part_04", "thumb": "./vibe-curriculum-slides/part_04/thumb.webp", "slides": ["./vibe-curriculum-slides/part_04/slide_01.webp", "./vibe-curriculum-slides/part_04/slide_02.webp", "./vibe-curriculum-slides/part_04/slide_03.webp", "./vibe-curriculum-slides/part_04/slide_04.webp", "./vibe-curriculum-slides/part_04/slide_05.webp", "./vibe-curriculum-slides/part_04/slide_06.webp", "./vibe-curriculum-slides/part_04/slide_07.webp", "./vibe-curriculum-slides/part_04/slide_08.webp", "./vibe-curriculum-slides/part_04/slide_09.webp", "./vibe-curriculum-slides/part_04/slide_10.webp", "./vibe-curriculum-slides/part_04/slide_11.webp", "./vibe-curriculum-slides/part_04/slide_12.webp", "./vibe-curriculum-slides/part_04/slide_13.webp"], "pdfName": "04차시 첫 번째 작품 10분 만에 만드는 나만의 디지털 명함.pdf"}, {"part": 5, "taskId": "vibe_curri_05", "title": "05차시. 버튼 누르면 변하는 마법: 동적 인터랙션 체험", "totalSlides": 10, "folder": "part_05", "thumb": "./vibe-curriculum-slides/part_05/thumb.webp", "slides": ["./vibe-curriculum-slides/part_05/slide_01.webp", "./vibe-curriculum-slides/part_05/slide_02.webp", "./vibe-curriculum-slides/part_05/slide_03.webp", "./vibe-curriculum-slides/part_05/slide_04.webp", "./vibe-curriculum-slides/part_05/slide_05.webp", "./vibe-curriculum-slides/part_05/slide_06.webp", "./vibe-curriculum-slides/part_05/slide_07.webp", "./vibe-curriculum-slides/part_05/slide_08.webp", "./vibe-curriculum-slides/part_05/slide_09.webp", "./vibe-curriculum-slides/part_05/slide_10.webp"], "pdfName": "05차시 버튼 누르면 변하는 마법 동적 인터랙션 체험.pdf"}, {"part": 6, "taskId": "vibe_curri_06", "title": "06차시. 오답 노트는 AI가 쓴다: 버그(오류) 해결 비법", "totalSlides": 10, "folder": "part_06", "thumb": "./vibe-curriculum-slides/part_06/thumb.webp", "slides": ["./vibe-curriculum-slides/part_06/slide_01.webp", "./vibe-curriculum-slides/part_06/slide_02.webp", "./vibe-curriculum-slides/part_06/slide_03.webp", "./vibe-curriculum-slides/part_06/slide_04.webp", "./vibe-curriculum-slides/part_06/slide_05.webp", "./vibe-curriculum-slides/part_06/slide_06.webp", "./vibe-curriculum-slides/part_06/slide_07.webp", "./vibe-curriculum-slides/part_06/slide_08.webp", "./vibe-curriculum-slides/part_06/slide_09.webp", "./vibe-curriculum-slides/part_06/slide_10.webp"], "pdfName": "06차시 오답 노트는 AI가 쓴다 버그오류 해결 비법.pdf"}, {"part": 7, "taskId": "vibe_curri_07", "title": "07차시. 첫 게임 개발 1단계: 가위바위보 한판 승부!", "totalSlides": 10, "folder": "part_07", "thumb": "./vibe-curriculum-slides/part_07/thumb.webp", "slides": ["./vibe-curriculum-slides/part_07/slide_01.webp", "./vibe-curriculum-slides/part_07/slide_02.webp", "./vibe-curriculum-slides/part_07/slide_03.webp", "./vibe-curriculum-slides/part_07/slide_04.webp", "./vibe-curriculum-slides/part_07/slide_05.webp", "./vibe-curriculum-slides/part_07/slide_06.webp", "./vibe-curriculum-slides/part_07/slide_07.webp", "./vibe-curriculum-slides/part_07/slide_08.webp", "./vibe-curriculum-slides/part_07/slide_09.webp", "./vibe-curriculum-slides/part_07/slide_10.webp"], "pdfName": "07차시 첫 게임 개발 1단계 가위바위보 한판 승부.pdf"}, {"part": 8, "taskId": "vibe_curri_08", "title": "08차시. 첫 게임 개발 2단계: 긴장감 넘치는 숫자 맞히기 (업다운)", "totalSlides": 13, "folder": "part_08", "thumb": "./vibe-curriculum-slides/part_08/thumb.webp", "slides": ["./vibe-curriculum-slides/part_08/slide_01.webp", "./vibe-curriculum-slides/part_08/slide_02.webp", "./vibe-curriculum-slides/part_08/slide_03.webp", "./vibe-curriculum-slides/part_08/slide_04.webp", "./vibe-curriculum-slides/part_08/slide_05.webp", "./vibe-curriculum-slides/part_08/slide_06.webp", "./vibe-curriculum-slides/part_08/slide_07.webp", "./vibe-curriculum-slides/part_08/slide_08.webp", "./vibe-curriculum-slides/part_08/slide_09.webp", "./vibe-curriculum-slides/part_08/slide_10.webp", "./vibe-curriculum-slides/part_08/slide_11.webp", "./vibe-curriculum-slides/part_08/slide_12.webp", "./vibe-curriculum-slides/part_08/slide_13.webp"], "pdfName": "08차시 첫 게임 개발 2단계 긴장감 넘치는 숫자 맞히기 업다운.pdf"}, {"part": 9, "taskId": "vibe_curri_09", "title": "09차시. 액션 게임 개발 3단계: 순발력 팡팡 두더지 잡기", "totalSlides": 10, "folder": "part_09", "thumb": "./vibe-curriculum-slides/part_09/thumb.webp", "slides": ["./vibe-curriculum-slides/part_09/slide_01.webp", "./vibe-curriculum-slides/part_09/slide_02.webp", "./vibe-curriculum-slides/part_09/slide_03.webp", "./vibe-curriculum-slides/part_09/slide_04.webp", "./vibe-curriculum-slides/part_09/slide_05.webp", "./vibe-curriculum-slides/part_09/slide_06.webp", "./vibe-curriculum-slides/part_09/slide_07.webp", "./vibe-curriculum-slides/part_09/slide_08.webp", "./vibe-curriculum-slides/part_09/slide_09.webp", "./vibe-curriculum-slides/part_09/slide_10.webp"], "pdfName": "09차시 액션 게임 개발 3단계 순발력 팡팡 두더지 잡기.pdf"}, {"part": 10, "taskId": "vibe_curri_10", "title": "10차시. 세상과 연결하기: 내 컴퓨터를 방송국(웹 서버)으로 만들기", "totalSlides": 12, "folder": "part_10", "thumb": "./vibe-curriculum-slides/part_10/thumb.webp", "slides": ["./vibe-curriculum-slides/part_10/slide_01.webp", "./vibe-curriculum-slides/part_10/slide_02.webp", "./vibe-curriculum-slides/part_10/slide_03.webp", "./vibe-curriculum-slides/part_10/slide_04.webp", "./vibe-curriculum-slides/part_10/slide_05.webp", "./vibe-curriculum-slides/part_10/slide_06.webp", "./vibe-curriculum-slides/part_10/slide_07.webp", "./vibe-curriculum-slides/part_10/slide_08.webp", "./vibe-curriculum-slides/part_10/slide_09.webp", "./vibe-curriculum-slides/part_10/slide_10.webp", "./vibe-curriculum-slides/part_10/slide_11.webp", "./vibe-curriculum-slides/part_10/slide_12.webp"], "pdfName": "10차시 세상과 연결하기 내 컴퓨터를 방송국웹 서버으로 만들기.pdf"}, {"part": 11, "taskId": "vibe_curri_11", "title": "11차시. 실전 프로젝트 1단계: 나만의 스마트 모니터링 대시보드 틀 짜기", "totalSlides": 13, "folder": "part_11", "thumb": "./vibe-curriculum-slides/part_11/thumb.webp", "slides": ["./vibe-curriculum-slides/part_11/slide_01.webp", "./vibe-curriculum-slides/part_11/slide_02.webp", "./vibe-curriculum-slides/part_11/slide_03.webp", "./vibe-curriculum-slides/part_11/slide_04.webp", "./vibe-curriculum-slides/part_11/slide_05.webp", "./vibe-curriculum-slides/part_11/slide_06.webp", "./vibe-curriculum-slides/part_11/slide_07.webp", "./vibe-curriculum-slides/part_11/slide_08.webp", "./vibe-curriculum-slides/part_11/slide_09.webp", "./vibe-curriculum-slides/part_11/slide_10.webp", "./vibe-curriculum-slides/part_11/slide_11.webp", "./vibe-curriculum-slides/part_11/slide_12.webp", "./vibe-curriculum-slides/part_11/slide_13.webp"], "pdfName": "11차시 실전 프로젝트 1단계 나만의 스마트 모니터링 대시보드 틀 짜기.pdf"}, {"part": 12, "taskId": "vibe_curri_12", "title": "12차시. 실전 프로젝트 2단계: 눈이 즐거운 그래프와 차트 시각화 마법", "totalSlides": 12, "folder": "part_12", "thumb": "./vibe-curriculum-slides/part_12/thumb.webp", "slides": ["./vibe-curriculum-slides/part_12/slide_01.webp", "./vibe-curriculum-slides/part_12/slide_02.webp", "./vibe-curriculum-slides/part_12/slide_03.webp", "./vibe-curriculum-slides/part_12/slide_04.webp", "./vibe-curriculum-slides/part_12/slide_05.webp", "./vibe-curriculum-slides/part_12/slide_06.webp", "./vibe-curriculum-slides/part_12/slide_07.webp", "./vibe-curriculum-slides/part_12/slide_08.webp", "./vibe-curriculum-slides/part_12/slide_09.webp", "./vibe-curriculum-slides/part_12/slide_10.webp", "./vibe-curriculum-slides/part_12/slide_11.webp", "./vibe-curriculum-slides/part_12/slide_12.webp"], "pdfName": "12차시 실전 프로젝트 2단계 눈이 즐거운 그래프와 차트 시각화 마법.pdf"}, {"part": 13, "taskId": "vibe_curri_13", "title": "13차시. 든든한 방패 만들기: 비밀번호와 안전한 AI 코딩 보안 수칙", "totalSlides": 12, "folder": "part_13", "thumb": "./vibe-curriculum-slides/part_13/thumb.webp", "slides": ["./vibe-curriculum-slides/part_13/slide_01.webp", "./vibe-curriculum-slides/part_13/slide_02.webp", "./vibe-curriculum-slides/part_13/slide_03.webp", "./vibe-curriculum-slides/part_13/slide_04.webp", "./vibe-curriculum-slides/part_13/slide_05.webp", "./vibe-curriculum-slides/part_13/slide_06.webp", "./vibe-curriculum-slides/part_13/slide_07.webp", "./vibe-curriculum-slides/part_13/slide_08.webp", "./vibe-curriculum-slides/part_13/slide_09.webp", "./vibe-curriculum-slides/part_13/slide_10.webp", "./vibe-curriculum-slides/part_13/slide_11.webp", "./vibe-curriculum-slides/part_13/slide_12.webp"], "pdfName": "13차시 든든한 방패 만들기 비밀번호와 안전한 AI 코딩 보안 수칙.pdf"}, {"part": 14, "taskId": "vibe_curri_14", "title": "14차시. 대망의 완성: 나만의 멋진 작품 배포하고 바이브 코더로 거듭나기", "totalSlides": 15, "folder": "part_14", "thumb": "./vibe-curriculum-slides/part_14/thumb.webp", "slides": ["./vibe-curriculum-slides/part_14/slide_01.webp", "./vibe-curriculum-slides/part_14/slide_02.webp", "./vibe-curriculum-slides/part_14/slide_03.webp", "./vibe-curriculum-slides/part_14/slide_04.webp", "./vibe-curriculum-slides/part_14/slide_05.webp", "./vibe-curriculum-slides/part_14/slide_06.webp", "./vibe-curriculum-slides/part_14/slide_07.webp", "./vibe-curriculum-slides/part_14/slide_08.webp", "./vibe-curriculum-slides/part_14/slide_09.webp", "./vibe-curriculum-slides/part_14/slide_10.webp", "./vibe-curriculum-slides/part_14/slide_11.webp", "./vibe-curriculum-slides/part_14/slide_12.webp", "./vibe-curriculum-slides/part_14/slide_13.webp", "./vibe-curriculum-slides/part_14/slide_14.webp", "./vibe-curriculum-slides/part_14/slide_15.webp"], "pdfName": "14차시 대망의 완성 나만의 멋진 작품 배포하고 바이브 코더로 거듭나기.pdf"}];

// data.js - 우리 집 SQLite DB와 100% 완전 동기화된 마스터 데이터셋
window.DASH26_SYNC_DATA = {
  "updatedAt": "2026-10-19 18:41:35",
  "note": {
    "id": 1,
    "title": "바이브코딩 대시보드 심화 실습 핵심 요약 & 강사 특별 노트",
    "content": "반갑습니다 수강생 여러분! 강사 채경원입니다.\n\n오늘 실습하는 [Gemini CLI 대시보드 심화 26] 과정의 핵심 철학과 꼭 기억해야 할 핵심 지침 및 실시간 질의응답 연동 가이드입니다.\n\n==================================================\n🎨 [특강 선물] 2026 블루프린트 허브 (BlueprintHub) 디자인 컴포넌트 무료 배포!\n==================================================\n수강생 여러분의 빠른 실무 대시보드 제작을 위해, 본 과정의 디자인 시스템이자 100여 개 2026 다크 글래스모피즘 컴포넌트 칠판인 '블루프린트 허브'를 무료로 개방해 두었습니다.\n개인 및 회사 실무 프로젝트 어디서든 마음껏 가져다 쓰셔도 됩니다! (상용/개인 100% 무료 허용)\n\n🔗 접속 주소: https://kyungwonchai.github.io/dashboard26/blueprint-hub/\n\n1. KPI 지표 카드, 실시간 스트리밍 차트, 데이터그리드, 공정 텔레메트리 컴포넌트 탑재\n2. 칠판(화이트보드)에 원하는 컴포넌트를 배치하고 AI에게 프롬프트 스냅샷을 주면 0% 오차로 화면 코드를 자동 생성합니다.\n3. 특정 상용 벤더 라이선스 종속이 없는 100% 순수 React 19 + Tailwind CSS 오픈소스입니다.\n\n==================================================\n📌 [강사 철학 노트 1] 프롬프트 4대 핵심 구조\n==================================================\n1. 어디에 (@app.py, @index.html 등 대상 파일 명시)\n2. 무엇을 (추가하거나 수정할 기능)\n3. 어떻게 (디자인, 에러 처리, 조건)\n4. 유지할 것 (기존 DB와 데이터는 절대 지우지 말 것)\n\n==================================================\n📌 [강사 철학 노트 2] 사내망 팀원 배포 (--team 모드)\n==================================================\n- start_team.bat으로 실행하면 사내망 IP로 0.0.0.0 바인딩됩니다.\n- 팀원이 접속하지 못할 때는 윈도우 고급 방화벽 인바운드에서 TCP 10211 포트를 열어주세요.\n\n==================================================\n📌 [강사 철학 노트 3] 데이터 안전 제1원칙 (자동 백업)\n==================================================\n- 모든 코드 수정 전에는 backup/ 폴더의 백업 상태를 확인하세요.\n- 서버를 재시작할 때마다 최근 7개의 SQLite 파일이 자동으로 회전 보존됩니다.\n\n==================================================\n📋 [특별 가이드] 실시간 Q&A 구글 스프레드시트 연동 방법\n==================================================\n가입/서버 포트 개방 없이 구글 스프레드시트를 무료 실시간 DB로 연결하는 3단계:\n\n1단계. 구글 스프레드시트 생성 (1분)\n- sheets.google.com 접속 -> 새 시트 만들기 (이름: 대시보드26_문의보관함)\n- 1행 헤더 입력:\n  A1: id | B1: createdAt | C1: author | D1: type | E1: content | F1: reply\n\n2단계. Apps Script 코드 붙여넣기 (1분)\n- 상단 메뉴 [확장 프로그램] -> [Apps Script] 클릭\n- 기존 코드를 지우고 아래 코드 복사/붙여넣기:\n\nfunction doGet(e) {\n  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();\n  var data = sheet.getDataRange().getValues();\n  var result = [];\n  for (var i = 1; i < data.length; i++) {\n    if (!data[i][0]) continue;\n    result.push({\n      id: data[i][0],\n      createdAt: Utilities.formatDate(new Date(data[i][1]), \"Asia/Seoul\", \"yyyy-MM-dd HH:mm\"),\n      author: data[i][2],\n      type: data[i][3],\n      content: data[i][4],\n      reply: data[i][5] || \"\"\n    });\n  }\n  return ContentService.createTextOutput(JSON.stringify(result.reverse()))\n    .setMimeType(ContentService.MimeType.JSON);\n}\n\nfunction doPost(e) {\n  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();\n  var data = JSON.parse(e.postData.contents);\n  var newId = new Date().getTime();\n  sheet.appendRow([newId, new Date(), data.author || \"익명\", data.type || \"질문\", data.content || \"\", \"\"]);\n  return ContentService.createTextOutput(JSON.stringify({ status: \"success\", id: newId }))\n    .setMimeType(ContentService.MimeType.JSON);\n}\n\n3단계. 배포 및 연동 (1분)\n- 우측 상단 [배포] -> [새 배포] 클릭\n- 유형: 웹 앱(Web App) 선택\n- 다음 사용자로 실행: 나(내 계정)\n- 액세스 권한: 모든 사용자 (Anyone) 선택 후 [배포] 클릭\n- 생성된 웹 앱 URL(https://script.google.com/macros/s/.../exec) 복사!\n\n\n\n==================================================\n🚀 [강사 미래 철학 4] 시작이 반(半)이다: 학습 ↔ 제작의 무한 사이클\n==================================================\n- 완벽한 상태에서 시작하려 하지 마세요. 작은 화면 하나를 띄우는 것부터가 위대한 첫걸음입니다.\n- [학습 ➔ 제작 ➔ 피드백 ➔ 효율화] 사이클을 반복하다 보면 코드를 몰라도 머릿속 구상을 실시간 소프트웨어로 빚어내는 AI 감각(바이브)이 체화됩니다.\n- 지금은 AI 컴퓨팅/API 비용이 비싸게 느껴질 수 있지만, 반도체 혁신과 모델 경량화로 수요 대비 공급이 넘쳐나며 추론 비용은 매년 급락하고 있습니다.\n- 머지않아 누구나 공짜처럼 AI를 쓸 수 있는 시대가 올 때, 지금 미리 시간과 정성을 들여 직접 만들어보고 겪어본 사람만이 어떤 서비스를 창조해야 할지 꿰뚫어 보는 통찰과 지혜(기회의 눈)를 선점하게 됩니다.\n\n==================================================\n🛠️ [강사 도구 가이드] Google AI Studio & NotebookLM 활용법\n==================================================\n1. Google AI Studio (ai.google.dev):\n   - Gemini 최신 모델(Gemini 2.5/Flash/Pro)을 무료 API 키로 즉시 테스트할 수 있는 개발자 놀이터.\n   - 시스템 프롬프트, 창의성 파라미터(Temperature), 이미지/문서 멀티모달 프롬프트를 코딩 없이 GUI에서 설계 및 검증 가능.\n2. Google NotebookLM (notebooklm.google.com):\n   - 내 PDF, 업무 일지, 유튜브, 기획안을 통째로 올려 나만의 완벽한 지식 비서(RAG)를 구축.\n   - 환각(할루시네이션) 없이 내 문서만을 근거로 출처를 제시하며, 딥 다이브 오디오(팟캐스트) 생성까지 무료 지원.\n\n==================================================\n🌐 [강사 배포 철학] 보안 위험 제로! 누구나 무료로 웹앱 공유하는 3대 비법\n==================================================\n* 절대 주의: 내 집이나 회사 PC의 포트를 외부에 직접 열면 해킹 및 보안 위험이 큽니다!\n1. GitHub Pages (추천 1위):\n   - HTML/CSS/JS 정적 파일을 깃허브에 올리고 버튼 한 번 누르면 무료 보안 HTTPS 웹사이트 즉시 생성.\n   - 백엔드 DB는 구글 스프레드시트 Apps Script API로 연결하면 서버 한 푼 안 들이고 완벽한 풀스택 공유 가능!\n2. Vercel / Netlify:\n   - 가입 후 웹 화면에 내 작업 폴더를 마우스로 드래그앤드롭(Drag & Drop)만 하면 30초 만에 글로벌 전 세계 배포.\n3. Google Colab + ngrok 임시 터널:\n   - 내 PC 대신 구글의 무료 웹 컴퓨터에서 Python Flask 서버를 켜고 안전한 임시 퍼블릭 URL로 실습 공유.\n\n==================================================\n🏛️ [구글 기업 철학에서 배우는 바이브코딩 정신]\n==================================================\n1. Focus on the user and all else will follow (사용자에게 집중하라, 나머지는 저절로 따라온다)\n   - 기술 자체보다 동료와 팀원의 실제 불편함을 해결해주는 작은 도구를 만드세요.\n2. It is best to do one thing really, really well (한 가지를 정말 잘하는 것이 최고다)\n   - 거창한 시스템보다 팀 할 일 관리, 업무일지 자동화 등 핵심 기능 하나를 완벽히 작동시키세요.\n3. Launch and Iterate (일단 출시하고 계속 개선하라)\n   - 완벽을 기다리지 말고 바로 배포하고 피드백을 받아 다음 단계로 진화시키세요.\n\n\n\n==================================================\n🎯 [오늘의 4대 학습 목표 & LLM 본질]\n==================================================\n1. [의도와 맥락의 주입]: 왜(Why), 무엇을(What), 어떻게(How)의 명확한 의도를 제시해 AI가 스스로 고품질 코드를 생성하도록 조율한다.\n2. [실전 풀스택 대시보드 완성]: Flask + SQLite + Chart.js + 엑셀(openpyxl) 자동화로 100% 동작하는 업무 포털을 내 손으로 구축한다.\n3. [규칙 기반 자동 안전망]: GEMINI.md 규칙과 7회 자동 회전 백업으로 코드와 데이터를 절대 날리지 않는 엔터프라이즈 안전성을 확보한다.\n4. [경험의 선점과 안전한 공유]: 사내망 0.0.0.0 및 GitHub Pages·구글시트 NoSQL로 보안 위협 없이 세상에 내 앱을 배포하고 AI 미래를 선점한다.\n\n* LLM의 본질: 문맥과 의도가 모호하면 거짓말을 하지만, '왜·무엇을·어떻게'가 명확하고 GEMINI.md 규칙 문서가 주어지면 시니어 개발자보다 더 완벽하게 정답을 스스로 도출합니다.\n\n==================================================\n⏰ [4시간 강의 편성표 (교시당 50분)]\n==================================================\n- 1교시 (50분): 바이브코딩 철학 & GEMINI.md 규칙 설계, Flask 웹서버 틀과 요약 카드 (STEP 01~02)\n- 2교시 (50분): SQLite DB 설계, 할 일 CRUD 및 지연 감지, '나는 누구?' 내 업무 필터, 팀 현황판 (STEP 03~05)\n- 3교시 (50분): openpyxl 엑셀 업로드/다운로드, Chart.js 3종 통계 차트, 원클릭 주간보고 텍스트/엑셀 생성 (STEP 06~08)\n- 4교시 (50분): start.bat 원클릭 기동 및 자동 회전 백업, 보안 걱정 없는 GitHub Pages 무료 공유, Google AI Studio/NotebookLM 연동 및 피날레 Q&A (STEP 09~12)\n\n궁금한 점은 언제든 상단 [문의 & 질문함] 버튼을 눌러 남겨주세요.\n화이팅입니다!",
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
