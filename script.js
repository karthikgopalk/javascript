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
// ['a', 'b', 'c'].forEach((item, index, array) => console.log(item));

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
// let filter = (val) => val > 7;
// console.log(arr.findIndex(filter));

//filter//

// let arr = [2, 4, 6, 8, 10];
// let filter = (item) => item > 4;
// console.log(arr.filter(filter));

//map//

// let arr = [1, 2, 3].map((item) => item * 5);
// console.log(arr);

// let arr = ['abc', 'gtf'].map((item) => item.length);
// console.log(arr);

// let arr = [
//   { name: 'karthi', lastname: 'gopal' },
//   { name: 'gopal', lastname: 'kandhi' },
// ];
// let mapValue = arr.map(setMap);
// function setMap(item) {
//   return [item.name, item.lastname].join(' ');
// }
// console.log(mapValue);

//sort//

// let arr = [1, 20, 5, 12];
// arr.sort();
// console.log(arr);

// let arr = [1, 20, 5, 12];
// function compareValue(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }
// arr.sort(compareValue);
// console.log(arr);

// let arr = [1, 20, 5, 12];
// let sortValue = arr.sort((a, b) => a - b);
// console.log(sortValue);

// let arr = ['hello', 'everyone', 'zebra', 'Österreich'];
// arr.sort((a, b) => a.localeCompare(b));
// console.log(arr);

//reverse//

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);

//split//

// let stringval = 'hello,jhon,iam,karthik';
// let split = stringval.split(',');
// console.log(split);

//convert string to array//

// let stringval = 'hello';

// let split = stringval.split(',');
// console.log(split);

// console.log([...stringval]);

// console.log(Array.from(stringval));

// console.log(Object.assign([], stringval));

//join//

// let arr = ['hello', 'hi', 'bob'];
// console.log(arr.join(' '));

//reduce//

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.reduce((acc, item) => acc + item));

//reduceright//

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.reduceRight((acc, item) => acc + item));

// isArray//

// console.log(Array.isArray({}));
// console.log(Array.isArray([]));

//thisArgs//

// let army = {
//   minAge: 18,
//   maxAge: 30,
//   filterVal(user) {
//     return user.age >= this.minAge && user.age < this.maxAge;
//   },
// };
// let user = [
//   { age: 10, [Symbol.isConcatSpreadable]: true, length: 1 },
//   { age: 20, [Symbol.isConcatSpreadable]: true, length: 1 },
//   { age: 18 },
//   { age: 31 },
// ];
// let filterVal = user.filter(army.filterVal, army);
// console.log(filterVal.length);

//some//

// let arr = [2, 4, 6, 8, 10];
// console.log(arr.some((item) => item / 3));

//every//

// let arr = [2, 4, 6, 8, 10];
// console.log(arr.every((item) => item > 1));

//fill//

// let arr = ['one', 'two', 'three', 'five'];
// arr.fill('four', 1, 3);
// console.log(arr);

//copywithin//

// let arr = ['one', 'two', 'three', 'four'];
// arr.copyWithin(1, 2);
// console.log(arr);

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Papaya'];
// console.log(fruits.copyWithin(2, 1, 2));

//flat//

// let arr = [1, 2, 3, [4, 5]];
// console.log(arr.flat());

// let arr = [1, 2, 3, [[4, 5]], [6, 7]];
// console.log(arr.flat(2));

//camalize//

// function camalize(text) {
//   return text
//     .split('-')
//     .map((item, index) =>
//       index === 0 ? item : item[0].toUpperCase() + item.slice(1)
//     )
//     .join('');
// }
// console.log(camalize('bottom-color'));
// console.log(camalize('bottom-color-background'));

//filter//

// let arr = [5, 3, 8, 1];
// let filterd = filterRange(arr, 1, 4);
// console.log(filterd);
// console.log(arr);
// function filterRange(arr, minValue, MaxValue) {
//   return arr.filter((item) => item >= minValue && item <= MaxValue);
// }

//filter Range//

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i <= arr.length; i++) {
//     let val = arr[i];
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }

// console.log(arr);

//sort desending//

// let arr = [5, 2, 1, -10, 11, 8];
// arr.sort((a, b) => b - a);
// console.log(arr);

//copy sorted//

// let arr = ['HTML', 'JavaScript', 'CSS'];

// let sorted = copySorted(arr);

// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (no changes)

// function copySorted(arr) {
//   return arr.slice().sort();
// }
