"use strict"


const request = require('request')
const cheerio = require('cheerio')


function Movie() {
    this.title = ''
    this.Url = ''
}


const log = function() {
    console.log.apply(console, arguments)
}


const movieFromDiv = function(div) {
    // 这个函数来从一个电影 div 里面读取电影信息
    const movie = new Movie()
    // 使用 cheerio.load 函数来返回一个可以查询的特殊对象
    const e = cheerio.load(div)

    // 然后就可以使用 querySelector 语法来获取信息了
    // .text() 获取文本信息
    movie.title = e('.c56628')
    const pic = e('.c56628')
    movie.coverUrl = pic.attr('src')

    return movie
}


const saveMovie = function(movies) {
    // 这个函数用来把一个保存了所有电影对象的数组保存到文件中
    const fs = require('fs')
    const path = 'jiaowu.txt'
    const s = JSON.stringify(movies, null, 2)
    fs.appendFile(path, s, function(error) {
        if (error !== null) {
            log('*** 写入文件错误', error)
        } else {
            log('--- 保存成功')
        }
    })
}


const moviesFromUrl = function(url) {
    // request 从一个 url 下载数据并调用回调函数
    request(url, function(error, response, body) {
        // 回调函数的三个参数分别是  错误, 响应, 响应数据
        // 检查请求是否成功, statusCode 200 是成功的代码
        if (error === null && response.statusCode == 200) {
            // cheerio.load 用字符串作为参数返回一个可以查询的特殊对象
            const e = cheerio.load(body)
            const movies = []
            // 查询对象的查询语法和 DOM API 中的 querySelector 一样
            const movieDivs = e('.c56628')
            for(let i = 0; i < movieDivs.length; i++) {
                let element = movieDivs[i]
                log(element.children);
                // 获取 div 的元素并且用 movieFromDiv 解析
                // 然后加入 movies 数组中
                const div = e(element).html()
                const m = movieFromDiv(div)
                movies.push(m)
            }
            // 保存 movies 数组到文件中
            saveMovie(movies)
        } else {
            log('*** ERROR 请求失败 ', error)
        }
    })
};


const __main = function() {
    const url = 'http://ssdut.dlut.edu.cn/index/bkstz.htm';
    moviesFromUrl(url);
}


// 程序开始的主函数
__main()
