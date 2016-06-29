//Tower-of-babel
//these exercises can be found at https://www.npmjs.com/package/tower-of-babel
//Exercise #1
//
//template string
// var string = process.argv[2];
//
// console.log('Hello ' + `${string}`);
//
//
//Exercise #2
//Constructing a class
// class Character {
//   constructor(x,y) {
//     this.x = x;
//     this.y = y;
//     this.health_ = 100;
//   }
//
//   damage() {
//     this.health_ = this.health_ - 10;
//   }
//
//   getHealth() {
//     return this.health_;
//   }
//
//   toString() {
//     return 'x: ' + this.x + ' y: ' + this.y + ' health: ' + this.getHealth();
//   }
//
// }

//Exercise #3
//Extending a class

// class Player extends Character {
//   constructor(x, y, name) {
//     super(x, y);
//     this.name = name;
//   }
//   move(dx, dy) {
//     this.x += dx;
//     this.y += dy;
//   }
//   toString() {
//     return "name: " + this.name + " "+ super.toString();
//   }
// }

//Exercise #4
//Modules by name

// var arg1 = process.argv[2];
// var arg2 = process.argv[3];
// import { PI, sqrt, square } from './math';
//
// console.log(PI);
// console.log(sqrt(+arg1));
// console.log(square(+arg2));


//Exercise #5
//Rewrite Math to use export default
//
// var arg1 = process.argv[2];
// var arg2 = process.argv[3];
// import mathMod from './math';
//
// console.log(mathMod.PI);
// console.log(mathMod.sqrt(+arg1));
// console.log(mathMod.square(+arg2));


//Exercise #11
//Arrow Functions

// var inputs = process.argv.slice(2);
// var result = inputs.map((x) => x.slice(0,1)).reduce((tot, x) => tot + x);
//     console.log(result);


//Exercise #12
//Rest and Spread

var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

// write a function called `avg` here that calculates the average.

var avg = function(...args) {
  let total = args.reduce((tot, x) => tot + x);
  let len = args.length;
  return total/len;
}

console.log(avg(...args));
