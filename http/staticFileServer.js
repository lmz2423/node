/**
 * Created by creditease on 2015/8/19.
 * @description 提供静态文件服务
 */
var http = require('http');
var parse = require('url').parse;
var join = require('path').join;
var fs = require('fs');

var root = __dirname;

var server = http.createServer(function (req, res) {
    var url = parse(req.url);
    var path = join(root, url.pathname);
    var stream = fs.createReadStream(path +"temp");
    stream.on('data', function(chunk) {
        res.write(chunk);
    });
    stream.on('end', function(){
        res.end();
    });
});
server.listen(80,'10.106.2.93');
