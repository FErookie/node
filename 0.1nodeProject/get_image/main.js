var fs = require('fs'),
    request = require('request');

var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

download('https://www.bilibili.com/i0.hdslb.com/bfs/archive/6063fb40e90a17912b71d2cfd4ea56f69abb70de.png', 'google.png', function(){
    console.log('done');
});
