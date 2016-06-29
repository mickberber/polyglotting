//use external module to cocat stream of data
//output data length and data to the console

var http = require('http');
var concatStream = require('concat-stream');


module.exports = function(file) {
  http.get(file, function(res) {
    res.setEncoding('utf8');
    res.pipe(concatStream(function (data) { console.log(data); }));
  }).on('error', function(e) {
    console.log("got error message: " + e.message);
  });
};
