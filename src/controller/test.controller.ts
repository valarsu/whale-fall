import { BaseController, Path, Param, Query, Result } from '@umajs/core';

@Path('/page')
export default class Test extends BaseController {
  @Path('/:name')
  index(@Param('name') name: string, @Query('name') title: string, @Query('busted') busted: string) {
    console.log(this.ctx.param, '========');
    console.log(this.ctx.query.busted, '========');
    console.log(this.ctx.cookies.get('i18n'), '========cookie');
    console.log(this.ctx.session, '========session');
    console.log(this.userAgent, '======userAgent');
    console.log(this.param, '======param');

    return Result.json({
      name: `this is ${name}/${title}${busted} router`,
    });
  }
}
