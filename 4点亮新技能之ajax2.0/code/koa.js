const koa = require('koa');
const route = require('koa-router');

const app = new koa();
// 监听端口
app.listen(2019);

// 新建路由对象
let router = new route();

// 处理路由
router.get('/',async ctx => {
    ctx.body = '主页';
})

// 使用路由
app.use(router.routes());