var express = require('express');
var utility = require('utility');
var child = require('child_process');
var ip = require('ip');
var app = express();
const open = require('opn');

var ipStr = ip.address();

app.get('/', function (req, res) {
    var q = req.query.q;
    if (q) {
        var md5Value = utility.md5(q);
        res.send(md5Value);
    }
    else
        res.send('参数错误');
});
app.listen(3000, function (req, res) {
    console.log('app is running at port 3000');
});
open('http://'+ipStr+':3000/');