let net = require('net');

let server = net.createServer(function (socket) {
    console.log("someone connects");
    socket.on('data' , function (chunk) {
       console.log(chunk.toString());
    })
});
server.listen(8001 , function () {
    console.log('server is listening');
});
server.on('listening' , function () {
    console.log('server is listening');
});

// tcp 服务器支持以下事件 connection（回调是一个socket对象） close error（回调是一个error对象）