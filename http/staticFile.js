/**
 * Created by luomingzhong on 15/8/22.
 * @description 本脚本是一个静态资源文件服务器
 */
var http = require('http');
var parse = require('url').parse;
var join = require('path').join;
var fs = require('fs');

var root = __dirname;

var server = http.createServer(function(req,res) {
    var url = parse(req.url);
    console.log(url);
    console.log(root);
    var path = join(root,url.pathname);
    var stream = fs.createReadStream(path);
    stream.on('data', function(chunk){
        res.write(chunk);
    });
    stream.on('end', function(){
       res.end();
    });
});
server.listen(3000);
