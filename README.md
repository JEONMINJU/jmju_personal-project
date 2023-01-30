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