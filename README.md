# 웹팩
- 웹팩은 기본적으로 자바스크립트 리소스만 읽고 처리할 수 있다. html,css,image,font 와 같은 리소스도 모듈로 처리될 수 있도록 하려면 
 별도의 전처리기가 필요하다. 이 과정을 수행해주는 것이 로더의 역할이다. 
 
# 개발용 서버를 사용하기 전
- scss, js 파일을 수정하고 다시 npm run build를 돌려줘야 수정이 되었다.
- html 파일도 직접 열어서 확인해야 했다.

# 개발용 서버 사용 후
- npm run start로 서버를 돌려주면 자동으로 html 오픈, 수정 후 저장하면 변경 사항 자동반영

# webpack-dev-server 란?
- 개발 시에 매번 빌드를 실행하지 않고 웹서버를 띄워서 사용(빠른 실시간 리로드)
- 소스가 수정되면 build -> reload를 지원하는 node server
- webpack-dev-server는 실제 번들링된 파일을 생성하지 않고 번들링 된 결과를 메모리에 저장하기 때문에 빌드 속도가 빠르다.

- --hot : webpack의 HMR 기능 활성화, 옵션이다.
- contentBase : 콘텐츠를 제공할 경로지정(정적파일을 제공하려는 경우에만 필요)
- port : 접속 포트 설정
- host : 사용될 호스트 지정 ex) webpack-dev-server –host 127.0.0.1

# HMR(Hot Module Replacement)
- 브라우저를 새로고침하지 않아도 웹팩으로 빌드한 결과물이 실시간 반영됨
- 데브서버 옵션에 hot: true 추가

# 참고
- 꼭 --hot 옵션을 주지 않아도 
- "watch": "cross-env webpack --watch --mode=development" 여기 명령문에 "--watch" 추가하니깐 자동 반영 된다.? 
- [hash]는 웹팩 컴파일 시 랜덤한 문자열을 붙여준다.
- css-loader는 css 파일을 읽는 역할을 하고 style-loader는 읽은 css 파일을 html 파일에 넣어주는 역할을 합니다

# .map 
- 파일은 소스맵이 적용될 때 컴파일 된다.

# 자바스크립트
- 함수선언문
function hellowTest(a, b) {
    return a + b;
};

- 함수표현식
const hellowTest = function(a, b) {
    return a + b;
};

# filter vs map
- map은 새로운 배열 반환
- filter는 테스트를 통과하는? 걸러주는 값과 같은 것을 제외한 새로운 배열을 반환해준다.

# ES6 화살표 함수
- this는 window가 아닌 상위 함수가 this를 가르킴
- 반대로 그냥 function의 this는 항상 window

# 로컬스토리지(localStorage)
- 사용자가 지우지 않는 이상 계속 브라우저에 남아있는다. 지속적으로 필요한 데이터 저장(자동로그인 등)

# 세션스토리지(sessionStorage)
- 윈도우나 브라우저를 닫을 경우 제거된다. 일회성 정보 저장용

# 쿠키(cookie)
- 만료 기한이 있는 저장소