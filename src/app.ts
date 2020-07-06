import Uma from '@umajs/core';
import { Router } from '@umajs/router';

const uma = Uma.instance({
  Router,
  bodyParser: { multipart: true },
  ROOT: __dirname,
  env: process.argv.indexOf('production') > -1 ? 'production' : 'development',
  // beforeLoad(umajs: Uma) {
  //   console.log(umajs, '=======before');
  // },
  // afterLoaded(umajs: Uma) {
  //   console.log(umajs, '=======after');
  // },
});
const { app } = uma;

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE');
  ctx.set('Access-Control-Allow-Headers', 'x-requested-with, accept, origin, content-type');
  ctx.set('Content-Type', 'application/json;charset=utf-8');
  ctx.set('Access-Control-Allow-Credentials', 'true');
  if (ctx.method === 'OPTIONS') {
    ctx.body = '';
    ctx.status = 204;
  } else {
    await next();
  }
});

uma.start(8058);
