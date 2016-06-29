//make http get request and output each chunk of data to the console on its own line

var http = require('http');


var data = '';
http.get(process.argv[2], function(res) {
  res.setEncoding('utf8');
  res.on("data", function (chunk) { console.log(chunk); });
}).on('error', function(e) {
  console.log("got error message: " + e.message);
});
