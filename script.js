//recursion//
// function power(x, n) {
//   return x ** n;
// }
// console.log(power(2, 2));
// console.log(power(2, 3));
// console.log(power(2, 4));

// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }
// console.log(pow(2, 6));

//factorial//

// function factorial(n) {
//   return n == 1 || n == 0 ? 1 : n * factorial(n - 1);
// }
// console.log(factorial(4));
// console.log(factorial(6));

//sum of numbers//

// function sumTo(n) {
//   return n == 1 || n == 0 ? 1 : n + sumTo(n - 1);
// }
// console.log(sumTo(5));

// function sumTo(n) {
//   return (n * (n + 1)) / 2;
// }
// console.log(sumTo(5));

//fibonaci//

// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
// console.log(fib(3));

//sum of numbers by rest//

// function sumOfNum(...arg) {
//   let sum = 0;
//   for (let val of arg) sum += val;
//   return sum;
// }
// console.log(sumOfNum(1, 2, 3, 4));

//arguments//

// function nameFun() {
//   return arguments[0];
// }
// console.log(nameFun('karthi'));

// let arr = [1, 2, 3];
// let arrCopy = [...arr];
// console.log(JSON.stringify(arr) == JSON.stringify(arrCopy));
// console.log(arr === arrCopy);
// arrCopy.push(4);
// console.log(arr);
// console.log(arrCopy);

//closure//

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// console.log(sum(5)(6));

// console.log(14);

//IIFE//

// (function () {
//   var a = 10;
//   return console.log(a);
// })();

// function as() {
//   var b = 20;
//   console.log(b);
// }

// as();

//window//

// window.console.log('hello');

// if (!window.Promise) {
//   console.log('your browser is old');
// }
// console.log(window.innerHeight, window.innerWidth);
// console.log(globalThis);

//function object//

// function demo(a, b) {
//   console.log('arg', arguments.length);
//   return 10;
// }
// console.log(demo.name);
// demo(2, 3, 4, 5);

// demo(2, 3);
// console.log('len', demo.length);

//custom property//

// function demo() {
//   console.log(demo.counter++);
//   return 10;
// }
// demo.counter = 0;
// demo();
// console.log(demo.counter);

//funcion expression//

// let sayhi = function (world) {
//   return `hello ${world}`;
// };
// console.log(sayhi('world!!!'));

//closure//

// function makeCounter() {
//   let count = 0;

//   function counter() {
//     return count++;
//   }

//   counter.set = (value) => (count = value);

//   counter.decrease = () => count--;

//   return counter;
// }

// function sum(a) {
//   let current = a;
//   function rest(b) {
//     current += b;
//     return rest;
//   }
//   rest.toString = function () {
//     return current;
//   };
//   return rest;
// }
// alert(sum(5)(6)(7));
