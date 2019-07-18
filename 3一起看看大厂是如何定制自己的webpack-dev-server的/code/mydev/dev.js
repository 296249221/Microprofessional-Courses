const express = require('express');
const webpackDevMid = require('webpack-dev-middleware');
const webpackHotMid = require('webpack-hot-middleware');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const app = express();
// 可能存在多入口文件，需要遍历拼接
// 拼接结果['webpack-hot-middleware/client?noInfo=true&reload=true','./app.js']
Object.keys(config.entry).forEach(function (name) {
    config.entry[name] = ['webpack-hot-middleware/client?noInfo=true&reload=true'].concat(config.entry[name]);
})
var compiler = webpack(config); // 使用webpack配置打包并拿到打包结果
app.use(
    webpackDevMid(compiler, {
        // 自己的配置，不配置就采用预配置
    })
);
app.use(
    webpackHotMid(compiler, {
        overlayStyle: true,
    })
)
app.listen(2007);