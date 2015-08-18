/**
 * Created by creditease on 2015/8/17.
 */
var events = require('events');
var net = require('net');

var channel = new events.EventEmitter();

channel.clients = {};//定义客户端

channel.subscriptions = {};

channel.on('join', function (id, client) {
    this.clients[id] = client;
    this.subscriptions[id] = function (sendId, message) {
        if (id !== sendId) {
            this.clients[id].write(message);
        }
    };
    this.on('broadcast', this.subscriptions[id]);
});

var server = net.createServer(function (client) {
    var id = client.remoteAddress + ':' + client.remotePort;
    client.on('connect', function () {
        channel.emit('join', id, client);
    });
    client.on('data', function(data){
        data = data.toString();
        channel.emit('broadcast', id, data);
    });
});

server.listen(8888);