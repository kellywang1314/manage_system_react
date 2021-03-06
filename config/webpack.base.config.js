const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry:  path.resolve(__dirname, "../src/index.js"),
    output:{
        path: path.resolve(__dirname, "../docs"),
        filename:'bundle.js',
    },
    module:{
        rules:[
            {
                test: /(\.jsx|\.js)$/,
                use:'babel-loader',
                include:path.resolve(__dirname, "../src"),
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader'
                    }
                ],
            }
        ]
    },
    resolve: {
        modules: [ // 优化模块查找路径
            resolve('src'),
            resolve('node_modules') // 指定node_modules所在位置 当你import第三方模块式 直接从这个路径下搜寻
        ],
        extensions: ['.js', '.jsx']
    },
    plugins:[
        new webpack.DefinePlugin({
            "process.env":{
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new HtmlWebpackPlugin({
            template:resolve('index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
        /* new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./manifest.json'),
        }), */
    ]


}