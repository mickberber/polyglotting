var net = require('net');
var server = net.createServer(function(socket) {
  var data;
  var date = new Date();
  var year = date.getFullYear() + '-';
  var month = date.getMonth();
  var day = date.getDate();
  var hrs = date.getHours();
  var mins = date.getMinutes();
  data = year;
  if(month < 10) {
    month++;
    month = '0' + month.toString();
  }
  data = data + month + '-';
  if(day < 10) {
    day = '0' + day.toString();
  }
  data = data + day  + ' ';
  if(hrs < 10) {
    hrs = '0' + hrs.toString();
  }
  data = data + hrs  + ':';
  if(mins < 10) {
    mins = '0' + mins.toString();
  }
  data = data + mins + '\n';
  socket.end(data);
});

server.listen(process.argv[2]);
