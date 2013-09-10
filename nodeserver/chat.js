var ip = "127.0.0.1"
var port = "8080"

var net = require('net');

var sockets = []

var server = net.Server(function(socket){
		socket.on('data',function(data){
				  socket.write(data);
				  console.log(data);
				 });
		socket.on('end',function(){
				  var ind = sockets.index(socket);
				  sockets.splice(i,1);
				 });
             });

server.listen(port)
