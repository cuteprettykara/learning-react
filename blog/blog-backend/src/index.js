const Koa = require('koa');

const app = new Koa();

// Promise를 이용하여 구현
/* app.use((ctx, next) => {
  console.log(1);
  next().then(() => {
    console.log('bye');
  });
}); */

// async/await를 이용하여 구현
app.use(async (ctx, next) => {
  console.log(1);
  await next();
  console.log('bye');
});

app.use((ctx, next) => {
  console.log(2);
  next();
});

app.use(ctx => {
  ctx.body = 'hello world';
});

app.listen(4000, () => console.log('listening to port 4000'));