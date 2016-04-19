#!/usr/bin/env node

'use strict';
const fs = require("fs");
const path = process.cwd();

var run = function (obj) {
    if (obj[0] === "-v") {
        console.log('version is 1.0.0');
    }
    else if (obj[0] === '-h') {
        console.log('Useage:');
        console.log(' -v --version [show version]');
    } else {
        fs.readdir(path, function (err, files) {
            if (err) {
                return console.log(err);
            }
            for (let i = 0; i < files.length; i += 1) {
                console.log(files[i]);
            }
        });
    }
};

run(process.argv.slice(2));