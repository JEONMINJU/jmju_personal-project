const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    // 시작점
    entry : {
        'assets/js/main' : ['./src/dist/js/app.js', './src/dist/scss/app.scss']
    },
    // 최종 결과(파일)
    output : {
        path: path.resolve(__dirname, './src'), // 현재경로 하위에 assets로 떨어져라
        filename: '[name].js', // main.js (entry에서 넣어준 key값이 네임으로)
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/, // babel-loader에서는 제외되지 않기 때문에 추가(webpack5이상은 다를수도..)
                use : {
                    loader: 'babel-loader',
                }
            },
            {
                test : /\.(css|scss|sass)$/,
                // use : ['style-loader','css-loader']
                use : [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader', // sass 파일을 css로 컴파일
                        options: {
                            outputStyle: 'expanded', // 컴파일 된 css 파일 확장하여 보이기
                            // outputStyle: 'compressed', // 컴파일 된 css 파일 압축
                            sourceMap: true, // 배포용으로 빌드한 파일과 원본파일을 연결 시켜줌(개발자도구에서 파일의 출처를 알 수 있다.)
                        },
                    }
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
                }
            },
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(), // 이전 빌드 파일들 모두 삭제 시켜줌(최신만 남기고 알아서 정리해줌)
        new MiniCssExtractPlugin(
            {
                filename : 'assets/css/main.css'
            }
        )
    ],
}