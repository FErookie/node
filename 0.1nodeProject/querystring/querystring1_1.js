const querystring = require('querystring');

let str = 'https://www.baidu.com/s?wd=%E7%9F%A5%E4%B9%8E&rsv_spt=1&rsv_iqid=0xbe0a91f000038a12&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=7&rsv_sug1=6&rsv_sug7=101&rsv_sug2=0&inputT=1865&rsv_sug4=3377&rsv_sug=1';
let queryObject = querystring.parse(str);
console.log(queryObject);

console.log(querystring.stringify(queryObject));