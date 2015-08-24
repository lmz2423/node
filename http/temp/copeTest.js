/**
 * Created by creditease on 2015/8/24.
 */
var fs = require('fs');
var oppressor = require('oppressor');
var readStream = fs.createReadStream('./index.js');
var writeStream = fs.createWriteStream('./index.txt');
readStream.pipe(oppressor(writeStream)).pipe(writeStream);
