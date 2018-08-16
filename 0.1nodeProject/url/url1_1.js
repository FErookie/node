const url = require('url');
let parseUrl = 'http://www.baidu.com';
let urlObj = url.parse(parseUrl);
console.log(urlObj);
let urlAdress = url.format(urlObj);
console.log(urlAdress);
let urlMessage = url.resolve('http://www.baidu.com' , '/image');
console.log(urlMessage);