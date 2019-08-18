// const Koa = require('koa'); // 官网 koa2
const Koa = require('./like-koa2/index') // like koa2
const app = new Koa();


console.log('koa2: ', Koa)

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx['X-Response-Time'];
  console.log(`${ctx.req.method} ${ctx.req.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx['X-Response-Time'] = `${ms}ms`;
});

// response
app.use(async ctx => {
  ctx.res.end('Hello songmengyao')
});

app.listen(3001);
