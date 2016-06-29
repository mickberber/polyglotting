//READ A FILE ASYNCHRONOUSLY, COUNT HOW MANY NEW LINE CHARS EXIST
//OUTPUT TOTAL

var fs = require('fs');
var path = process.argv[2];
fs.readFile(path, function(err, data) {
  if(err) {
    console.log(err);
  } else {
    var lines = -1;
    data = data.toString().split('\n');
    data.forEach(function() {
      lines++;
    });
    console.log(lines);
  }
});
