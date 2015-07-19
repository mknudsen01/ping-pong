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

app.post('/api/score/:player', function(req, res) {
  var player = req.param('player');
  io.emit('score', { player: player });
  console.log(player);
  res.sendStatus(200)
})

app.post('/api/join/:player', function(req, res) {
  var player = req.param('player');
  io.emit('join', { player: player });
  console.log(player);
  res.sendStatus(200);
})

var server = server.listen(process.env.PORT || 3000, function() {
  console.log('App listening at *3000');
})