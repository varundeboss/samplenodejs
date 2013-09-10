var ip = "127.0.0.1"
var port = "8080"

var http = require('http');
var url  = require('url');
var querystring = require('querystring');

function startServer(route){
function onRequest(request,response){
    var path = url.parse(request.url).pathname
    var qs = url.parse(request.url).query
    console.log("Request Received for path: " + path);
    console.log("And it has a querystring: " + qs);

    route(path);

    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write("Hello World\n");
    setTimeout(function (){
        response.end("Varun\n");
    },2000);
    response.write("Kumar\n");
}

http.createServer(onRequest).listen(port, ip);

console.log('Server running at http://' + ip + ':' + port + '/');
}

exports.startServer = startServer;
