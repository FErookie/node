/*
var dgram = require('dgram');
let socket = dgram.createSocket('udp4' , function (msg , rinfo) {

});
socket.bind(41234 , 'localhost' , function () {
    console.log('bind 41234');
});
*/
//createSocket 会返回一个socket对象 一个socket对象会有以下的几个事件 message 接收数据时触发 listening 开始监听数据报文时触发 close 关闭时触发 error 发生错误时触发
//当然既然是出发时间的情况我们就可以把他写成on的写法
//一个socket对象主要会包括以下方法 bind 绑定端口 send 发送数据 address 获取socket端口对象相关的地址信息 close 关闭socket对象

//一个真正能用的socket通信实例
const dgram = require('dgram');
let message = new Buffer('some message from server');
let socket = dgram.createSocket('udp4' , function (msg , rinfo) {
    console.log(msg.toString());
    socket.send(message , 0 , message.length , rinfo.port , rinfo.address , function (err , bytes) {
        if(err){
            console.error(err);
            return;
        }
        console.log("send" + bytes + "message");
    });
});
socket.bind(41234 , 'localhost' , function () {
    console.log('bind 41234')
})