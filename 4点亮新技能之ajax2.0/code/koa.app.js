const koa = require('koa');
const body = require('koa-better-body');
const convert = require('koa-convert');
const Router = require('koa-router');

let app = new koa();

const router = new Router();

// 处理跨域
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    await next();
})

app.listen(2019);

// 处理文件上传
app.use(convert(body({
    uploadDir: './upload', // 指定上传文件的路径，实际开发中最好使用绝对路径.path.resolve(__dirname)
    keepExtensions: 'true' // 文件是否需要扩展名
})))

// 处理路由
router.post('/upload', async ctx => {
    console.log('fields', ctx.request.fields); // 全部接收
    let { username, password, file } = ctx.request.fields;
    ctx.body = 'success';
})

// 使用路由
app.use(router.routes());