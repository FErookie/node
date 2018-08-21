// 以下代码通过net.Server 类来创建一个TCP服务器 添加connection close error 事件
let net = require('net');
let server = new net.Server();

server.on('connection' , function (socket) {
    console.log("someone connect");
});

server.listen(8001);

server.on('listening' , function () {
    console.log("is listenning");
});

server.on('close' , function () {
    console.log('close');
});

server.on('error' , function (error) {
    console.error("error appear");
});