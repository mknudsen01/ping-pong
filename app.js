var express = require('express');
var app = express();
var server =require('http').createServer(app);

var io = require('socket.io')(server);

app.get('/', function(req, res) {
  console.log('GET request to homepage');
  res.sendfile(__dirname + '/index.html');
})

io.on('connection', function(socket) {
  console.log('user connected');
})

app.post('/api/test', function (req, res) {
  console.log('POST request to the homepage');
  res.send('POST request to the homepage');
});

var server = server.listen(process.env.PORT || 3000, function() {
  console.log('App listening at *3000');
})