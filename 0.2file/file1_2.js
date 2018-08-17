const fs = require('fs');
const util = require('util');
const readAsync = util.promisify(fs.readFile);
const writeAsync = util.promisify(fs.writeFile);
async function writefile(){
    let data = "你好 node的文件写入方法";
    await writeAsync('./temp/hello.txt' , data);
    let dataend = await readAsync('./temp/hello.txt');
    dataend = dataend.toString();
    console.log(data);
}

function main() {

    writefile();
}
main();