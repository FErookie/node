const cheerio = require('cheerio');

function findImage(dom , callback) {
    let $ = cheerio.load(dom);
    $('a.photolst_photo').each(function (i , elem) {
        let imgsrc = $(this).attr('src');
        callback(imgsrc , i);
    });
}
module.exports.findImage = findImage;