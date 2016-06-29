// You will be given text on process.stdin. Buffer the text and reverse it using
// the `concat-stream` module before writing it to stdout.
//
// `concat-stream` is a write stream that you can pass a callback to get the
// complete contents of a stream as a single buffer. Here's an example that uses
// concat to buffer POST content in order to JSON.parse() the submitted data:
//
//     var concat = require('concat-stream');
//     var http = require('http');
//
//     var server = http.createServer(function (req, res) {
//         if (req.method === 'POST') {
//             req.pipe(concat(function (body) {
//                 var obj = JSON.parse(body);
//                 res.end(Object.keys(obj).join('\n'));
//             }));
//         }
//         else res.end();
//     });
//     server.listen(5000);
//
// In your adventure you'll only need to buffer input with `concat()` from
// process.stdin.

var fs = require('fs');
var concat = require('concat-stream');

process.stdin.pipe(concat(function(data) {
  data = data.toString();
  var result = [];
  for(var i = data.length - 1; i >= 0; i--) {
    result.push(data[i]);
  }
  result = result.join('');
  process.stdout.write(result);
}));
