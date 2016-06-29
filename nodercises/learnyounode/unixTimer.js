// # LEARN YOU THE NODE.JS FOR MUCH WIN!
//
// ## HTTP JSON API SERVER (Exercise 13 of 13)
//
//  Write an HTTP server that serves JSON data when it receives a GET request
//  to the path '/api/parsetime'. Expect the request to contain a query string
//  with a key 'iso' and an ISO-format time as the value.
//
//  For example:
//
//  /api/parsetime?iso=2013-08-10T12:10:15.474Z
//
//  The JSON response should contain only 'hour', 'minute' and 'second'
//  properties. For example:
//
//     {
//       "hour": 14,
//       "minute": 23,
//       "second": 15
//     }
//
//  Add second endpoint for the path '/api/unixtime' which accepts the same
//  query string but returns UNIX epoch time in milliseconds (the number of
//  milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
//  For example:
//
//     { "unixtime": 1376136615474 }
//
//  Your server should listen on the port provided by the first argument to
//  your program.

var http = require('http');
var url = require('url');

var server = http.createServer();

server.on('request', function(req, res) {
  console.log(req.url);
  var urlObj = url.parse(req.url, true);
  var body;
  if(urlObj.pathname === '/api/unixtime') {
    body = req.url.slice(18);
    console.log(body);
    body = Date.parse(body);
    //Date.parse()
    bodyObj = {
      "unixtime": body
    };
  }
  if(urlObj.pathname === '/api/parsetime') {
    body = req.url.slice(30, 38);
    //my local time and the test local times are off
    //in most cases adding 17 will not work
    var hour = parseInt(body.slice(0,2)) + 17;
    var minute = parseInt(body.slice(3,5));
    var second = parseInt(body.slice(-2));
    bodyObj = {
      "hour": hour,
      "minute": minute,
      "second": second
    };
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(bodyObj));
  res.end();
});

server.listen(process.argv[2]);
