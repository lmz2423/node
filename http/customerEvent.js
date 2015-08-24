/**
 * Created by luomingzhong on 15/8/15.
 * @description 自定义事件 采用EventEmitter
 */

var EventEmitter = require('events').EventEmitter;
var channel = new EventEmitter();
channel.on('join', function(){
    console.log('Welcome');
});
channel.emit('join');
