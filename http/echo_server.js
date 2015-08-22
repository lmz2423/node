/**
 * Created by luomingzhong on 15/8/15.
 */
/**
 * @description 这个脚本是用来测试node的事件发射器的demo
 *
 * */

var net = require('net');

var server = net.createServer(socketSendData);

function socketSendData(socket) {

    //响应只发生一次
    socket.once('data', function(data){
        socket.write(data);
    })
}
server.listen(8888);