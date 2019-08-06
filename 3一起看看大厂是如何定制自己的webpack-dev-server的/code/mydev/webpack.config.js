const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    entry:{
        app:'./app.js'
    },
    output:{
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
    devtool:'cheap-source-map',
    devServer:{
        port:9002,
        overlay:true,
        hot:true,
        proxy:{
            "/":{
                target:"https://mooc.study.163.com",
                changeOrigin:true,
                pathRewrite:{
                    "^/apione":"/smartSpec/detail/1202816603.htm"
                }
            }
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./index.html',
            minify:{
                collapseWhitespace:true
            },
            inject:true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
}