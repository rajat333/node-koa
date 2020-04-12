var koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-body');
var path = require('path');
const logger = require('koa-logger');
var staticCache = require('koa-static-cache');
var app = new  koa();
const router = new Router();
app.use(async (ctx, next) => {
    try {
        console.log("1");
    await next();
    } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
    }
   });
   
app.use(router.routes());
app.use(logger());
app.use(router.allowedMethods());

router.get('/', (ctx, next) => {
    console.log("2");
    ctx.body = 'Hello World!';
   });
// app.use(function* (){
//     this.body = 'Hello world!';
//  });
// var _ = router();              //Instantiate the router
// _.get('/hello', getMessage);   // Define routes
// function *getMessage() {
//    this.body = "Welcome to Hello world!";
// };
// app.use(_.routes());           //Use the routes defined using the router
var server = app.listen(3000,function(){
    console.log("Server listening on port 3000")
});
module.exports = server;
