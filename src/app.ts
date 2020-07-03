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

console.log(uma.config, '======');

uma.start(8058);
