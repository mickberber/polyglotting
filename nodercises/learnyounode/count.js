//TAKE COMMAND LINE ARGS (EXPECTING NUMBERS)
//ADD THEM
//OUTPUT TOTAL

var args = process.argv.slice(2);

var total = 0;

args.forEach(function(arg) {
  arg = parseInt(arg);
  total += arg;
});

console.log(total);
