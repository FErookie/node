const koa = require('koa');
const router = require('koa-router')();

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
    ctx.body =content;
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
    });
    return item;
};


app.use(router.routes());
app.listen(3000 , function () {
    console.log("这个服务已经启动");
});

