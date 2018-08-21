//http 服务器 构建网页的运行实际上我们使用的就是http服务器
//http 路由 在koa中我们有koa-router 来控制路由 但是在原生的node中我们就是使用http模块中的路由控制来操作的
let fs = require('fs');
let http = require('http');
let server = http.createServer(function (req , res) {
   res.writeHead(200 , {
       'content-type' : 'text/html'
   });
   let data = fs.readFileSync('./index.html');
   res.write(data);
   res.end();
});
server.listen(3000 , function () {
    console.log('this server has listen 3000');
});