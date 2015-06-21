var express = require('express');
var utils = require('./utils');
var app = express();
var port = process.env.port || 3000;

// Serve some static assets
app.use(express.static(__dirname + '/../app/js'));
app.use(express.static(__dirname + '/../public'));
app.use('/js', express.static(__dirname + '/../app/js'));
app.use('/partial', express.static(__dirname + '/../app/partial'));
app.use('/vendor', express.static(__dirname + '/../vendor'));
app.use('/api', express.static(__dirname + '/../api'));

app.get('/', function(req, res, next) {
  utils.sendFile(__dirname + '/../app/layout/index.html', res, next);
});
app.use('*', function(req, res, next) {
  console.error('Not found: ', req.baseUrl);
  res.status(404).send('Page not found');
});

app.listen(port);
console.log('Development server started on port ' + port + ' ...');
