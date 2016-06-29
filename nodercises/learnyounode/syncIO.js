//READ A FILE SYNCRONOUSLY, COUNT HOW MANY NEW LINE CHARS EXIST
//OUTPUT TOTAL


var fs = require('fs');
var path = process.argv[2];

var lines = -1;
var file = fs.readFileSync(path).toString();
file = file.split('\n');
file.forEach(function() {
  lines++;
});
console.log(lines);
