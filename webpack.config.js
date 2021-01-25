const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const CopyWebpackPlugin       = require('copy-webpack-plugin');

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'development',

    entry: {
        index: [
            './src/assets/ts/main.ts',
            './src/assets/scss/main.scss'
        ],
    },

    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: `${__dirname}/dist/assets/js`,
        // 出力ファイル名
        filename: "main.js"
    },

    // ローカル開発用環境を立ち上げる
    // 実行時にブラウザが自動的に localhost を開く
    devServer: {
        contentBase: "dist",
        open: true
    },

    module: {
        rules: [
            {
                // 拡張子 .ts の場合
                test: /\.ts$/,
                // TypeScript をコンパイルする
                use: 'ts-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'},
                ],
            }
        ],
    },

    // import 文で .ts ファイルを解決するため
    // これを定義しないと import 文で拡張子を書く必要が生まれる。
    // フロントエンドの開発では拡張子を省略することが多いので、
    // 記載したほうがトラブルに巻き込まれにくい。
    resolve: {
        // 拡張子を配列で指定
        extensions: [
            '.ts', '.js',
        ],
    },

    plugins: [
        // cssの出力先を指定する
        new MiniCssExtractPlugin({filename: '../css/[name].css'}),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './',
                    to: '../../',
                    filter: async (resourcePath) => {
                        return new RegExp('\.html$').test(resourcePath);
                    },
                    context: 'src'
                },
            ],
        }),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './',
                    to: '../images/',
                    filter: async (resourcePath) => {
                        return new RegExp('\.(png|jpg|jpeg|gif|svg)$').test(resourcePath);
                    },
                    context: 'src/assets/images'
                },
            ]
        })
    ]
};