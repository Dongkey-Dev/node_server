var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
 res.sendfile('index.html'); // default page
});

http.listen(3000,function(){
 console.log('listening on *: 3000');
});

io.sockets.on('connection',function(socket){
 //apply default message when connected remotly
 socket.emit('message_from_server','hello,world');

 //apply when message income
 socket.on('message_from_client',function(msg){
  console.log('message:',msg);
  /* return received message
	 or using received data */
  socket.emit('message_from_server','"' + msg+'"라고 하셨군요.');
});

});
