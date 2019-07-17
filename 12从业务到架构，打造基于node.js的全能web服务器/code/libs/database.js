// 连接mysql的一个模块
const mysql = require('mysql');
// 封装了一个promise对象，同步mysql的异步化操作
const co = require('co-mysql');

// 引入配置文件

const config = require('../config');

let db = mysql.createPool({
    host:config.DB_HOST,
    user:config.DB_USER,
    password:config.DB_PASS
})