const http = require('http');

const server = http.createServer(function (req , res) {
    res.writeHead(200 , {
        'content-type' : 'text/plain'
    });
    res.end('Hello Nodejs');
});
//http.createServer() 返回的是一个http服务器 同样http.request 封装的是一个http客户端工具 用来向http服务器发送请求 上面的req 和 res 分别是http.IncomingMessage 和 http.ServerResponse 的实例
//http.Server 最常用的事件主要有 request 当客户端请求到来时该事件被触发 提供req res两个参数 表示请求和响应信息 connection 当TCP连接建立时 该事件被触发 提供一个socket参数 是net.Socket的实例 还有close 当服务器关闭时触发事件
//http.IncomingMessage (我们在函数的参数列表中将其写成req) 表示http请求的信息提供了一下三个事件 , data请求体数据到来时事件被触发该事件 | 提供一个chunk事件 | 表示接受的数据 ,end当请求体数据传输完毕时该事件被触发 ， 此后不再会有数据 | close 请求结束)
//http.IncomingMessage 提供的主要属性有 method | http 请求的方法 比如GET， headers | http请求头 ， url | 请求路径 ， httpVersion | http协议的版本。
//http.ServerResponse是返回给客户端的信息 res.writeHead(statusCode , [heasers]) : 向请求的客户端发送响应头 | res.write(data , [enCoding]): 向请求发送内容 | res.end([data] , [enCoding]):结束请求 |
server.listen(3000 , function () {
    console.log('listen port 3000');
})