var fs = require('fs');
var http = require('http');

//isolate arguments
var args = process.argv.slice(2);
//results array
var results = [];
var count = args.length;

function get(path, i) {
  //http get to specific path
  http.get(path, function self(res) {
    var data = '';
    res.setEncoding('utf8');
    //catch data chunks
    res.on('data', function (chunk) {
      data += chunk;
    });
    res.on('end', function() {
      results[i] = data;
      count--;
      if(count === 0) {
        console.log(results.join('\n'));
      }
    });
  }).on('error', function(e) {
    console.log("got error message: " + e.message);
  });
}

args.forEach(function(path, i) {
  get(path, i);
});
