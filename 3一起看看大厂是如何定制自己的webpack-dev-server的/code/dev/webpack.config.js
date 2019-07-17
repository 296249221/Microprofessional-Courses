const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // webpack4目标是消灭配置文件
    // webpack4新增mode
    mode:'development', // development:开发模式，不会压缩代码||production:生产模式，自动压缩代码
    // 打包的入口文件
    entry:{
        app:'./app.js'
    },
    output:{
        // 输出文件名
        filename:'[name].bundle2.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {
                        loader:'style-loader',
                        options:{
                            sourceMap:true
                        }
                    },
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders:2,
                            sourceMap:true
                        }
                    }
                ]
            }
        ]
    },
    devServer:{
        port:9002,
        // 错误遮罩，显示错误
        overlay:true,
        // 热更新
    },
    plugins:[
        // 帮助我们把打包的js自动插入到index.html里
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./index.html',
            minify:{
                collapseWhitespace:true
            },
            inject:true
        })
    ]
}