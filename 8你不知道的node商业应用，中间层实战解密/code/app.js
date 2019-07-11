const express = require('express');
const app = express();
const router = require('./src/router/router.js');
// 设置静态目录
app.use(express.static('./static'));
// 设置模版引擎
app.engine('art', require('express-art-template'));
app.set('views','./src/views');
app.use()
app.listen(3300);