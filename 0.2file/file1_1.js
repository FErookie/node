const fs = require('fs');

fs.open('./temp/hello.txt' , 'r' , function (err , readContent) {
    if(err){
        console.error(err);
    }else{
        let readBuffer = new Buffer(1024);
        let offset = 0;
        fs.read(readContent , readBuffer , offset , readBuffer.length , 8 , function (err , readRes) {
            console.log(readBuffer.toString());
        })
    }
});//这里我使用数字指定的哪个参数就是读取文件时开始的位置 而readFile() 函数 只能从头开始读取

fs.readFile('./temp/hello.txt' , function (err , readContent) {
    console.log(readContent.toString());
})

//两种写法 事实上第一种更强大 但第二种非常常用（但是第二种不能指定文件开始读取的位置）
let data = "你好 node的文件写入方法";
fs.writeFile('./temp/hello.txt' , data , function () {
    console.log('文件写入成功');
    fs.readFile('./temp/hello.txt' , function (err , res) {
        console.log(res.toString());
    })
})

fs.appendFile('./temp/hello.txt' , data , function () {
    console.log('文件追加写入成功');
    fs.readFile('./temp/hello.txt' , function (err , res) {
        console.log(res.toString());
    })
})
