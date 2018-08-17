const cheerio = require('cheerio');

function findImage(dom , callback) {
    let $ = cheerio.load(dom);
    $('div#p-content a img').each(function (i , elem) {
        let imgsrc = $(this).attr('src');
        callback(imgsrc , i);
    });
}
module.exports.findImage = findImage;