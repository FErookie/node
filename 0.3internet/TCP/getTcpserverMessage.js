let net = require('net');

let client = net.Socket();

client.connect(8001 , '127.0.0.1' , function () {

    console.log('connnect the server');
    client.write('message from client');
});
client.on('data' , function (data) {
   consol.log('the data of server is ' + data.toString());
});
client.on('end' , function () {
    console.log('end');
})