var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Look, I\'m working');
})

app.post('/api/test', function (req, res) {
  console.log('POST request to the homepage');
  res.send('POST request to the homepage');
});

var server = app.listen(process.env.PORT || 3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
})