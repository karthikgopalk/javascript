//array methods//

// let arr = new Array();
// let arr1 = [];
// let fruits = ['kiwi', 'apple', 'orange'];
// console.log(fruits);
// fruits[1] = 'mango';
// console.log(fruits[1]);
// fruits[3] = 'grapes';
// console.log(fruits);
// console.log(fruits.length);
// let arr3 = [
//   'demo',
//   1,
//   { obj: 'objVal' },
//   function () {
//     return 10;
//   },
//   true,
// ];
// console.log(arr3);

//at//

// console.log(fruits[fruits.length - 1]);
// console.log(fruits.at(-3));

//pop push shift unshift//
// let fruits = ['kiwi', 'apple', 'orange'];
// fruits.pop();
// fruits.push('mango', 'guava');
// fruits.shift();
// fruits.unshift('strawberry', 'papaya');
// console.log(fruits);

//array is object//

// let arr = [];
// arr[3] = 'one';
// arr.age = 10;
// console.log(arr);

//for of//

// let arr = ['red', 'blue', 'green'];
// for (let as of arr) {
//   console.log(as);
// }
// for (let key in arr) {
//   console.log(key);
// }

//matrix//

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(arr);

//tostring//

// let arr = [1, 2, 3];
// console.log(String(arr) == '1,2,3');
// console.log([] + 1);

//array problem//

// let arr = ['jazz', 'blues'];
// console.log(arr);
// arr.push('rock-n-roll');
// console.log(arr);
// arr[Math.floor((arr.length - 1) / 2)] = 'classics';
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift('rap', 'regge');
// console.log(arr);

//aray function//
// let arr = ['a', 'b'];
// arr[2] = function () {
//   return this;
// };
// console.log(arr[2]());
// function sum() {
//   let arr = [];
//   let a = +prompt('enter number', 0);
//   while (true) {
//     if (a === '' || undefined || null) break;
//     arr.push(a);
//   }
//   let sum = 0;
//   for (let key of arr) {
//     sum += key;
//   }
//   console.log(sum);
//   return sum;
// }
// sum();

// splice//

// let arr = ['a', 'b', 'c', 'd'];
// // arr.splice(1, 1);
// // arr.splice(0, 3, 'z', 'y');
// arr.splice(2, 0, 'x');
// console.log(arr);

//slice//

// let arr = ['a', 'b', 'c', 'd'];
// console.log(arr.slice(-1));

//concat//

// let arr = [1, 2];
// console.log(arr.concat([3, 4], [5, 6]));

//array like object//

// let arr = [1, 2];
// let arrayLike = {
//   0: 'something',
//   1: 'else',
//   [Symbol.isConcatSpreadable]: true,
//   length: 2,
// };
// console.log(arr.concat(arrayLike));

//for each//

// ['a', 'b', 'c'].forEach(console.log);
// ['a', 'b', 'c'].forEach((item, index, array) =>
//   console.log(item, index, array)
// );

//indexof lastindexof includes//

// let arr = ['a', 'b', 'c', 'd'];
// console.log(arr.indexOf('c'));
// console.log(arr.lastIndexOf('c'));
// console.log(arr.includes('c'));

//find//

// let arr = [
//   { id: 1, name: 'karthi' },
//   { id: 2, name: 'santhiya' },
//   { id: 3, name: 'sneha' },
// ];
// let find = arr.find((item, index) => index === 1);
// console.log(find.name);

//find index//

// let arr = [5, 7, 9, 12, 76, 45, 100];
// let filter = (val) => val > 120;
// console.log(arr.findIndex(filter));

