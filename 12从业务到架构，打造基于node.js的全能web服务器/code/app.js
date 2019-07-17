const Koa = require('koa');
const Router = require('koa-router');

let app = new koa();
let router = new Router();

app.listen(2019);
// 引入数据库信息的，context对象请求到响应过程中的一个描述对象
// koa提供了一个contex对象，表示一次对话的上下文（包括的http请求和http回复）
// 通过加工这个对象，就可以控制返回给用户
app.context.db = require('./libs/database');

// 测试数据库
router.get('/data', async ctx => {
    let data = await ctx.db.query('SELECT id,user,password FROM admin');
    ctx.body = data;
})

router.use('/', require('./router/index'));
router.use('/admin', require('./router/admin'));

app.use(router.routes());