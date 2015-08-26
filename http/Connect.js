/**
 * Created by creditease on 2015/8/25.
 * @description connect≤‚ ‘
 */

var connect = require('connect');
var app = connect();
app.use(logger);
app.use(hello);
app.listen(3000);

function logger(req, res, next){
    console.log('%s %s', req.method, req.url);
    next();
}
function hello(req,res){
    res.setHeader('Content-type', 'text/plain');
    res.end('hello world');
}

