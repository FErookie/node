const request = require('request');
const path = require('path');
const config = require('./config');
const analyze = require('./analyze');
const fs = require('fs');

function start() {
    request(config.url , function (err , res , body) {
        console.log('start');
        console.log(res.statusCode);
        if(err){
            console.error(err);
        }
        if(!err && res){
            console.log('emmm');
            analyze.findImage(body , download);
        }
    })
}
function download(imgUrl , i ){
    console.log(imgUrl);
    let ext = imgUrl.split('.').pop();
    request(imgUrl).pipe(fs.createWriteStream(path.join(config.imgDir , i + '.' + ext),{
        'encoding' : 'utf8'
    }));

    console.log(i);
}
start();