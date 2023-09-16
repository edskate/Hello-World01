

var http = require('http');

http.createServer(function(req, res){
    res.end('Hello World camp');
}).listen(8081);

console.log('O Servidor');