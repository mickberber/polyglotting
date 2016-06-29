var path = process.argv[2];
var fileType = process.argv[3];
var module = require('./filteredLSFUNC.js');


//use our module to log our filtered results
module(path, fileType, function(err, files) {
  if(err) {
    console.log('This threw an error');
  } else {
    console.log(files.join('\n'));
  }
});
