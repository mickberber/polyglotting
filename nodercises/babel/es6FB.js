//Exercise #8
//Fizz Buzz with symbol.iterator

//FOR OF Loops
const max = process.argv[2];

let FizzBuzz = {
  [Symbol.iterator]() {
    let cur = 0;
    return {
      next() {
        cur++;
        let val = cur;
        if(cur % 3 === 0 && cur % 5 === 0) {
          val = 'FizzBuzz';
        } else if (cur % 3 === 0) {
          val = 'Fizz';
        } else if (cur % 5 === 0){
          val = 'Buzz';
        }
        if(cur <= max) return { done: false, value: val }
        return { done: true, value: val };
      }
    }
  }
}

for(var n of FizzBuzz) {
  console.log(n);
}
