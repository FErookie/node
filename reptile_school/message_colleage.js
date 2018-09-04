const superagent = require("superagent");
const cheerio = require("cheerio");
const fs = require('fs');
const log = function () {
    console.log.apply(console , arguments);
};

// 定义一个我们用来保存数据的类
function Message() {
     this.title = '';
     this.url = '';
     this.message = '';
}

function getMessage(url) {
    superagent.get(url)
        .end(function (err , res) {
            if(err){
                console.log("there is a error");
            }else {
                getNews(res.text);
            }
        });
}

function getNews(webpage) {
    let news = [];
    if(webpage) {
        let $ = cheerio.load(webpage);
        const data = $('ul');
        for(let i = 0 ; i < data.length ; i++) {
            let element = data[i];
            const div = $(element).html();
            const m = messageFromDiv(div);
            news.push(m);
        }
        saveNews(news);
    }else{
        console.log("there is not a webpage");
    }
}
function messageFromDiv(div) {
    const message = new Message();
    let e = cheerio.load(div);
    message.title = e('a').text();

    message.url = e('a').attr('href');
    superagent.get('http://physics.dlut.edu.cn/' + message.url)
        .end(function (err , res) {
            if(err){
                console.error(err);
            }else{
                message.message = getDetailedNews(res.text);
            }
        })

    return message;
}

function saveNews(news) {
    const fs = require('fs');
    const path = 'news.txt';
    const s = JSON.stringify(news, null, 2);
    fs.appendFile(path, s, function(error) {
        if (error !== null) {
            log('*** 写入文件错误', error);
        } else {
            log('--- 保存成功');
        }
    })
}

function getDetailedNews(webpage) {
    let $ = cheerio.load(webpage);
    let data = $('form').text();
    log(data);
    return data;
}

function __main() {
    const url = 'http://physics.dlut.edu.cn/';
    getMessage(url);
}

__main();