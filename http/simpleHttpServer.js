/**
 * Created by creditease on 2015/8/18.
 * @description ����һ���򵥵�http Server����
 */
var http = require('http');
var server = http.createServer(function (req, res) {
    var body = "Hello, World";
    res.setHeader('Content-Length', body.length);
    res.setHeader('Content-Type', 'text/plain');
    res.end(body);
});
server.listen(80, '10.106.2.93');
