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
    // source-map，可以直接查看源码，共7种模式
    devtool:'cheap-source-map',
    devServer:{
        port:9002,
        // 错误遮罩，显示错误
        overlay:true,
        // 热更新，配置后对js采用reloader，对css采用热更新
        hot:true,
        // 只采用热更新，配置后对js和css均采用热更新，需要在js中配置module.hot.accept();
        // 配置module.hot.accept()非常复杂，所以一般项目中不配置hotOnly
        // hotOnly:true,
        // 接口代理,前端解决跨域问题
        proxy:{
            "/":{
                target:"https://mooc.study.163.com",
                // 解决同源策略
                changeOrigin:true,
                // 重写路径，让路径更简便
                pathRewrite:{
                    "^/apione":"/smartSpec/detail/1202816603.htm"
                }
            }
        }
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
        }),
        // 热更新
        new webpack.HotModuleReplacementPlugin()
    ]
}