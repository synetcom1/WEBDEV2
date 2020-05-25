// var, let, const

// hoisting (pushed up to the beginning)
// a = 3;
// console.log(a);
// var a;

// named function will do hoisting (also var)
// console.log(test());
// function test() {
//   let a = 10;
//   return a;
// }

// There are anonymous function
// var showConsole = function () {
//   console.log("Hey, how are you?");
// };
// showConsole();

// From ES6 because of hoisting that take memory space and holding the memory(perofrmance will be downgrading). So, that's shy they decided to use "anonymous function rather than named function", "let or const rater than var".

let number = 3;
console.log(typeof number);

// object
let array1 = [1, 2, 3, 4, 5];
console.log(typeof array1);

// object
let data1 = null;
console.log(typeof data1);

let data2 = "";
console.log(typeof data2);

// object
const obj1 = {
  name: "Steve",
  height: 177,
  wiight: 90,
};
console.log(typeof obj1);

let value1 = 9 > 3;
console.log(typeof value1);

let number3 = 3.56;
console.log(typeof number3);
