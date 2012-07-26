
/* Module dependencies */
var express = require('express')
  , errorHandler = require('./lib/errorHandler')
  , staticPageHandler = require('./lib/staticPageHandler')
  , http = require('http');

var server = express();

/* Configuring server */
server.configure(function()
{
  server.set('port', process.env.PORT || 3000);
  server.set('views', __dirname + '/views');
  server.set('view engine', 'jade');
  server.use(express.favicon());
  server.use(express.logger('dev'));
  server.use(express.bodyParser());
  server.use(express.methodOverride());
  server.use(require('stylus').middleware(__dirname + '/public'));
  server.use(express.static(__dirname + '/public'));
  server.use(server.router);
  server.use(errorHandler());
});

/* Init page handlers */
var sp = new staticPageHandler();
sp.init(server);

/* Create server */
http.createServer(server).listen(server.get('port'), function()
{
  console.log("Express server listening on port " + server.get('port'));
});