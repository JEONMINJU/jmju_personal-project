const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/* process.env 는 환경변수 */
const isProductionMode = process.env.NODE_ENV.includes('production');
// const isProductionMode = process.env.NODE_ENV == 'production';

console.log(isProductionMode,  "여기@@")

module.exports = {
    devtool : isProductionMode ? false : "source-map",
    // mode: 'development',

    // 개발서버 설정
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, './src'), // 웹서버가 주시할 디렉토리 설정
    },
    // 시작점
    entry : {
        'assets/js/main' : ['./src/dist/js/app.js', './src/dist/scss/app.scss']
    },
    // 최종 결과(파일)
    output : {
        path: path.resolve(__dirname, './src'), // 현재경로 하위에 assets로 떨어져라
        filename: '[name].js', // main.js (entry에서 넣어준 key값이 네임으로)
    },
    // module 프로퍼티는 프로젝트 내의 여러 유형의 모듈들을 처리할 방법을 결정
    module: {
        // 하나의 로더 규칙, module.rules 는 모듈이 생성 될 때 요청과 일치하는 규칙의 배열
        rules: [
            //js
            {
                // module.rules.test : 로더를 적용할 파일 유형, 변환 할 파일 지정(일반적으로 정규표현식 사용)
                test:/\.js$/,

                // loader가 실행될 때 배제시킬 파일들을 명시, 노드모듈 외에 다른 폴더, 파일등 제외하고 싶을때 사용법 - 배열?
                exclude: [
                    /node_modules/,
                    /test/,
                ],

                // 해당 파일에 적용할 로더의 이름
                use : {
                    loader: 'babel-loader',
                }
            },
            //css
            {
                test : /\.(css|scss|sass)$/,
                use : [
                    // 배포,개발 분리하여 로더 적용
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    
                    // 순서
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1 // 0 은 no loaders(default)
                        },
                    },
                    {
                        loader: 'sass-loader',  
                        // 옵션 안썼을때 디폴트 적용 형식 어떤거?
                        options: {
                            outputStyle: 'expanded', // 컴파일 된 css 파일 확장하여 보이기
                            // outputStyle: 'compressed', // 컴파일 된 css 파일 압축
                            sourceMap: true, // 배포용으로 빌드한 파일과 원본파일을 연결 시켜줌(개발자도구에서 파일의 출처를 알 수 있다.)
                        },
                    },
                ]
            },
            //이미지
            {
                test : /\.(png|jpg|gif|jpeg|eot|svg)$/,
                loader : 'file-loader',
                options : {
                    name : '[name].[ext]', // 결과물이 원본 파일 이름과 동일하게 떨어지도록
                    publicPath: '../../', // assets > main.css에 떨어진 이미지 호출하도록 상대경로 설정
                    outputPath: '/images', // 복사된 파일이 출력될 위치
                    esModule: false, //빌드후에 [object Module] 라고 보일것이다. 이것은 url을 commonJS 스펙으로 처리하기 때문이다. 그러므로 esModule 방식을 꺼야한다.
                }
            },
            // 폰트(outputPath를 따로 지정하기 위해 추가)
            {
                test : /\.(ttf|woff|woff2)$/,
                loader : 'file-loader',
                options : {
                    name : '[name].[ext]',
                    publicPath: '../../',
                    outputPath: '/font',
                    esModule: false,
                } // 폰트 컴파일 (복제) 안해도 외부에 있는 거 ., 외부에 놓고 복제를 안해도 잘 불러오게
            },
        ],
    },
    // [path] 를 이용, 대체 방법이 있는지 , 통합가능한지

    // 생성자 함수로 생성한 객체 인스턴스만 추가 가능
    plugins: [
        // new CleanWebpackPlugin(), // 이전 빌드 파일들 모두 삭제 시켜줌(최신만 남기고 알아서 정리해줌)
        new MiniCssExtractPlugin(
            {
                filename : 'assets/css/main.css'
            } // 파일을 여러개로 나눠서 올릴 수 있는 방법, css 파일을 어떻게 여러개로?
        )
    ],
}