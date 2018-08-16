const http = require('http');
let reqData = '';
http.request({
    'host' : '127.0.0.1',
    'port' : '3000',
    'method' : 'get'
} , function (res) {
    res.on('data' , function (chunk) {
        reqData += chunk;
    });
    res.on('end' , function () {
        console.log(reqData);
    });
}).end();
//与服务端一样 http.request() 和 http.get() 方法返回的是一个 http.ClientRequest() 实例
// 主要事件 response 当接受响应时触发 write 发送请求数据 end 完毕 应始终指定这个方法