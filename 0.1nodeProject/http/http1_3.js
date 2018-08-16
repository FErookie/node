const http = require('http');

const server = new http.Server();
server.on('request' , function (req , res) {
    let data = '';
    req.on('data' , function (chunk) {
        data += chunk;
        console.log(chunk);
    });
    req.on('end' , function () {
        let method = req.method;
        let url = req.url;
        let headers = JSON.stringify(req.headers);
        let httpVersion = req.httpVersion;
        res.writeHead(200 , {
            'content-type' : 'text/html'
        });
        let dataHtml = '<p>data : ' + data + '</p>';
        let methodHtml = '<p>data : ' + method + '</p>';
        let urlHtml = '<p>data : ' + url + '</p>';
        let headersHtml = '<p>data : ' + headers + '</p>';
        let httpVersionHtml = '<p>data : ' + httpVersion + '</p>';
        let resData = dataHtml + methodHtml + urlHtml + headersHtml + httpVersionHtml;
        res.end(resData);
    });

});
server.listen(3000 , function () {
    console.log("this server is running in 3000");
})