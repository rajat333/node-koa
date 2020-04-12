var koa = require('koa');
var router = require('koa-router');
var bodyParser = require('koa-body');
var path = require('path');
var staticCache = require('koa-static-cache');
var app = new  koa();

var _ = router();              //Instantiate the router
_.get('/hello', getMessage);   // Define routes

function *getMessage() {
   this.body = "Welcome to Hello world!";
};
app.use(function* (){
    this.body = 'Hello world!';
 });

app.use(_.routes());           //Use the routes defined using the router
app.listen(3000,function(){
    console.log("Server listening on port 3000")
});