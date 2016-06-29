
//PARSE A DIRECTORY USING FS
var fs = require('fs');
var path = process.argv[2];
//FIND A FILE OF A GIVEN TYPE
var fileType = '.' + process.argv[3];
var len = fileType.length;

fs.readdir(path, function(err, files) {
  if(err) {
    console.log(err);
  } else {
    var filtered = files.filter(function(val) {
      if(val.slice(-len) === fileType) {
        return val;
      }
    });
    //OUTPUT EACH MATCHING FILE ON ITS OWN LINE
    console.log(filtered.join('\n'));
  }
});
