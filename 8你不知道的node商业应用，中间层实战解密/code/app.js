const express = require('express');
const app = express();
const router = require('./src/router/router.js');
const BodyParser = require('body-parser'); // 将请求体序列化
// 设置静态目录
app.use(express.static('./static'));
// 设置模版引擎
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.engine('art', require('express-art-template'));
app.set('views', './src/views');
app.use('/', router);
app.listen(3300);