var fs = require('fs');

//modularize filter function
module.exports = function(dirName, ext, callback) {
  fs.readdir(dirName, function(err, files) {
    //early error return to callback
    if(err) {
      return callback(err);
    } else {
      ext = '.' + ext;
      var len = ext.length;
      var filtered = files.filter(function(val) {
        if(val.slice(-len) === ext){
          return val;
        }
      });
      callback(err, filtered);
    }
  });
};
