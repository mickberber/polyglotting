// ## HTTP UPPERCASERER (Exercise 12 of 13)
//
//  Write an HTTP server that receives only POST requests and converts
//  incoming POST body characters to upper-case and returns it to the client.
//
//  Your server should listen on the port provided by the first argument to
//  your program.
//


var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function(req, res) {
  //only allow for POST requests
  if(req.method !== 'POST') {
    return res.end('SEND ME A POST');
  }
  var body = [];
  req.on('error', function(err) {
    console.error(err);
  }).on('data', function(chunk) {
    body.push(chunk.toString().toUpperCase());
  }).on('end', function() {
    var resBody = {
      body: body.join('')
    };
    res.write(resBody.body);
    res.end();
  });

});

server.listen(process.argv[2]);
