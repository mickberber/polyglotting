//Exercise #9
//GENERATORS!!

const max = process.argv[2];

let FizzBuzz = function*() {
  let cur = 0;
  while(cur < max) {
        cur++;
        let val = cur;
        if(cur % 3 === 0 && cur % 5 === 0) {
          val = 'FizzBuzz';
        } else if (cur % 3 === 0) {
          val = 'Fizz';
        } else if (cur % 5 === 0){
          val = 'Buzz';
        }
        yield val;
  }
}();

for(var n of FizzBuzz) {
  console.log(n);
}
