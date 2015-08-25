/**
 * Created by luomingzhong on 15/8/22.
 * @description 管道测试
 */

var fs = require('fs');
var opressor = require('oppressor');
var readStream = fs.createReadStream('./index.js');
var writeStream = fs.createWriteStream('./copy.txt');
readStream.pipe(writeStream);