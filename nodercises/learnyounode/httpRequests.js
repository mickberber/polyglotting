var getCall = require('./httpCollect.js');

var args = process.argv.slice(2);

var count = args.length;
var results = {};
args.map(function(file) {
  getCall(file);
});
