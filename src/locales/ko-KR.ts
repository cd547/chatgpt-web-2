export default {
  common: {
    add: '추가',
    addSuccess: '성공적으로 추가',
    edit: '편집',
    editSuccess: '편집 성공',
    delete: '삭제',
    deleteSuccess: '삭제 성공',
    save: '저장',
    test: '테스트',
    saveSuccess: '저장 성공',
    reset: '재설정',
    action: '액션',
    export: '내보내기',
    exportSuccess: '내보내기 성공',
    import: '가져오기',
    importSuccess: '가져오기 성공',
    clear: '지우기',
    clearSuccess: '비우기 성공',
    yes: '예',
    no: '아니오',
    confirm: '확인',
    download: '다운로드 중',
    noData: '현재 데이터가 없습니다',
    wrong: '오류가 있는 것 같습니다, 나중에 다시 시도하세요.',
    success: '작업이 성공했습니다',
    failed: '작업 실패',
    register: '등록',
    login: '로그인',
    notLoggedIn: '로그인/등록',
    logOut: '로그아웃',
    unauthorizedTips: '승인되지 않음, 로그인 해주세요.',
    email: '이메일',
    password: '비밀번호',
    passwordConfirm: '비밀번호 확인',
    NewChat: '새로운 채팅',
    PromptStore: '프롬프트 스토어',
  },
  chat: {
    placeholder: '질문해보세요... (Shift + Enter = 줄 바꿈)',
    placeholderMobile: '입력하세요...',
    copy: '복사',
    copied: '복사 성공',
    copyCode: '코드 복사',
    clearChat: '세션을 지우다',
    clearChatConfirm: '세션이 지워졌나요?',
    exportImage: '세션을 이미지로 저장',
    exportImageConfirm: '세션을 이미지로 저장하나요?',
    exportSuccess: '성공적으로 저장되었습니다',
    exportFailed: '저장에 실패했습니다',
    usingContext: '컨텍스트 모드',
    turnOnContext: '현재 모드에서 메시지를 보내면 이전 채팅 기록이 전달됩니다',
    turnOffContext: '현재 모드에서, 이전 채팅 기록 없이 메시지를 보냅니다',
    deleteMessage: '메시지 삭제',
    deleteMessageConfirm: '이 메시지를 삭제하시겠습니까?',
    deleteHistoryConfirm: '정말 이 기록을 삭제하시겠습니까?',
    clearHistoryConfirm: '채팅 기록을 지우시겠습니까?',
    showRawText: '원문 표시',
  },
  setting: {
    setting: '설정',
    general: '개요',
    advanced: '고급',
    config: '구성',
    siteConfig: '사이트 설정',
    mailConfig: '메일 설정',
    avatarLink: '아바타 링크',
    name: '이름',
    description: '설명',
    saveUserInfo: '사용자 정보 저장',
    chatHistory: '채팅 기록',
    theme: '테마',
    language: '언어',
    role: 'AI 캐릭터 설정',
    api: 'API',
    reverseProxy: '역방향 프록시',
    timeout: '시간 초과',
    socks: '양말',
    httpsProxy: 'HTTPS 프록시',
    balance: '잔액',
    smtpHost: 'Host',
    smtpPort: 'Port',
    smtpTsl: 'Tsl',
    smtpUserName: '계정',
    smtpPassword: '비밀번호/비밀번호',
    siteTitle: '웹사이트 제목',
    siteDomain: '도메인 이름 없음 “/”',
    registerEnabled: '신규 사용자',
    registerMails: '이메일 접미사',
    apiBaseUrl: '인터페이스 주소',
    apiModel: 'Api 모델',
    accessToken: 'Access Token',
    loginEnabled: '등록 로그인',
    loginSalt: '로그인 혼돈 소금',
    loginSaltTip: '변경하면 모든 로그인이 무효화됩니다',
  },
  store: {
    local: '현지의',
    online: '온라인',
    title: '제목',
    description: '설명',
    clearStoreConfirm: '데이터를 지우시겠습니까?',
    importPlaceholder: '여기에 JSON 데이터를 붙여넣으세요',
    addRepeatTitleTips: '제목이 중복되었습니다, 다시 입력하세요',
    addRepeatContentTips: '중복된 콘텐츠: {msg}, 다시 입력하세요',
    editRepeatTitleTips: '충돌하는 제목, 다시 입력하세요',
    editRepeatContentTips: '콘텐츠 충돌 {msg}, 다시 입력하세요',
    importError: '키 값 불일치',
    importRepeatTitle: '제목 중복 건너뛰기: {msg}',
    importRepeatContent: '중복 콘텐츠 건너뛰기: {msg}',
    onlineImportWarning: '참고: JSON 파일의 소스를 확인하세요!',
    downloadError: '네트워크 상태와 JSON 파일 유효성을 확인하세요',
  },
  home: {
    Examples1: '간단한 언어로 양자 컴퓨팅을 설명해주세요',
    Examples2: '10살 생일에 적합한 창의적인 아이디어가 있나요?',
    Examples3: '자바스크립트에서 HTTP 요청을 하는 방법은 무엇인가요?',
    Capabilities1: '이전 대화에서 사용자가 말한 내용을 기억합니다',
    Capabilities2: '사용자가 후속 수정을 제공할 수 있도록 허용합니다',
    Capabilities3: '훈련된 모델은 부적절한 요청을 거부할 수 있습니다',
    Limitations1: '가끔 오류가 발생할 수 있습니다',
    Limitations2: '가끔 해로운 명령이 생성되거나 편견이 있는 내용이 생성될 수 있습니다',
    Limitations3: '지식 한계 시점이 2021년이기 때문에 2021년 이후의 세상과 사건에 대한 이해는 제한적입니다',
    Examples: '예시',
    Capabilities: '기능',
    Limitations: '제한사항',
    Me: '나에 대해',
    Open: '이 프로젝트는 개방 소스로 제공됩니다',
    Base: '에 기초하여 제작되었습니다',
    Come: '왔습니다.',
    Relation: '웹 사이트 운영 유지를 위해 해당 웹 사이트에는 요금이 부과되거나 광고가 포함될 수 있으며 프로그램 작성자와는 무관합니다.',
    Donate: '기부를 클릭하세요'
  },
}
