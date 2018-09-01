const koa = require('koa');
const router = require('koa-router')();
const fs = require('fs');
let app = new koa();
let superagent = require('superagent');
let cheerio = require('cheerio');

router.get('/rep' , async(ctx , next) => {
    let content =  superagent.get('http://teach.dlut.edu.cn/')
        .end(function(err , res){
            if(err){
                console.error("出现错误");
            }else if(res.statusCode != 200){
                console.log("请求失败");
            } else{
                console.log(res.text);
                console.log(showRes(res.text));

                return showRes(res.text);
            }
        });

    await next;
});

const showRes = (res) => {
    let $ = cheerio.load(res);
    let item = [];
    $('.txt a').each(function (idx , element) {
        let $element = $(element);
        item.push({
            title: $element.attr('title'),
            href: $element.attr('href')
        });
        getNews('http://teach.dlut.edu.cn/' + $element.attr('href'));
    });
    return item;
};
let getNews = (hrefstring) => {
    let newsContent = superagent.get(hrefstring)
        .end(function (err , res) {
            console.log(hrefstring);
            if (!err) {
                if (res.statusCode != 200) {
                    console.log("请求失败");
                } else {
                    console.log("请求成功");
                    let $ = cheerio.load(res);
                    console.log($('#vsb_content'));
                }
            }
            else {
                console.log("there is a error appear");
            }
        })


}

app.use(router.routes());
app.listen(3000 , function () {
    console.log("这个服务已经启动");
});

