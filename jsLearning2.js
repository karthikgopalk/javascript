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

//object range iterator//

// let range = {
//   from: 5,
//   to: 10,
// };
// range[Symbol.iterator] = function () {
//   return {
//     current: this.from,
//     last: this.to,
//     next() {
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else return { done: true };
//     },
//   };
// };
// for (let rangeValue of range) {
//   console.log(rangeValue);
// }

//Map//

// let map = new Map();
// map.set(1, 'one');
// map.set(true, 'yes');
// map.set('hello', 'hi');
// console.log(map.has(1));
// console.log(map.has(12));
// console.log(map.get(true));
// console.log(map.get('hello'));
// map.delete('hello');
// console.log(map.size);
// map.clear();
// console.log(map.get(1));

//typeof object key//

// let obj = {
//   1: 10,
// };
// console.log(typeof obj);
// for (let key in obj) {
//   console.log(typeof key + key);
// }

//set object as key in map//

// let obj = { name: 'karthi' };
// let map = new Map();
// map.set(obj, 123);
// console.log(map.get(obj));

//map chaining//

// let map = new Map();
// map.set(1, 10).set(2, 20).set(3, 30);
// for (let entry of map) {
//   console.log(entry);
// }

//for keys values entries//

// let fruits = new Map([
//   [1, 'apple'],
//   [2, 'banana'],
//   [3, 'mango'],
// ]);
// for (let entrykey of fruits.keys()) {
//   console.log(entrykey);
// }
// for (let entryval of fruits.values()) {
//   console.log(entryval);
// }
// for (let entry of fruits.entries()) {
//   console.log(entry);
// }

//for each//

// fruits.forEach((value, key, map) => console.log(value, key, map));

//create map from object//

// let obj = { name: 'karthi', age: 25 };
// let map = new Map(Object.entries(obj));
// for (let mapVal of map) {
//   console.log(mapVal);
// }

//create object from map//

// let obj = Object.fromEntries([
//   ['one', 1],
//   ['two', 2],
// ]);
// console.log(obj);

// let obj2 = Object.fromEntries(fruits.entries());
// console.log(obj2);

//set//

// let set = new Set();
// let jhon = { name: 'jhon' };
// let dani = { name: 'dani' };
// let peter = { name: 'peter' };
// set.add(jhon);
// set.add(dani);
// set.add(jhon);
// set.add(dani);
// set.add(peter);
// console.log(set.size);
// for (let val of set) {
//   console.log(val);
// }
// set.forEach((val, key, set) => console.log(val, key, set));

// function unique(arr) {
//   return Array.from(new Set(arr));
// }

// let values = [
//   'Hare',
//   'Krishna',
//   'Hare',
//   'Krishna',
//   'Krishna',
//   'Krishna',
//   'Hare',
//   'Hare',
//   ':-O',
// ];

// console.log(unique(values)); // Hare, Krishna, :-O

//anagram//

// let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

// console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"\

// function aclean(arr) {
//   let map = new Map();
//   for (let arrVal of arr) {
//     let sorted = arrVal.toLowerCase().split('').sort().join('');
//     map.set(sorted, arrVal);
//   }
//   return Array.from(map.values());
// }

//convert map to array//

// let map = new Map();

// map.set('name', 'John');

// let keys = Array.from(map.keys());
// keys.push('more');
// console.log(keys);

//trim//

// let a = '    hello    '.trim();
// console.log(a);

//object reference//

// let obj = { name: 'jhon' };
// let arr = [obj];
// obj = null;
// console.log(obj);
// console.log(arr);

//map object reference//

// let obj = { name: 'jhon' };
// let map = new Map(Object.entries(obj));
// obj = null;
// console.log(obj);
// console.log(Array.from(map));

//weekmap//

// let obj = { name: 'jhon' };
// let weekmap = new WeakMap();
// weekmap.set(obj, 123);
// obj = null;
// console.log(obj);
// console.log(Array.from(weekmap));

//weekset//

// let obj = { name: 'jhon' };
// let obj2 = { name: 'jhon' };
// let obj3 = { name: 'jhon' };

// let weekset = new WeakSet();
// weekset.add(obj);
// weekset.add(obj2);
// obj = null;
// console.log(weekset.has(obj));

//problem weakset//

// let messages = [
//   { text: 'Hello', from: 'John' },
//   { text: 'How goes?', from: 'John' },
//   { text: 'See you soon', from: 'Alice' },
// ];
// let weakset = new WeakSet();
// weakset.add(messages[0]);
// weakset.add(messages[1]);
// weakset.add(messages[2]);
// console.log(weakset.has(messages[0]));
// messages.shift();

// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };
// let doublePrice = Object.fromEntries(
//   Object.entries(prices).map((val) => [val[0], val[1] * 2])
// );
// console.log(doublePrice.meat);

//sum of object values//

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// console.log(sumSalaries(salaries)); // 650

// function sumSalaries(salaries) {
//   let total = 0;
//   Object.fromEntries(
//     Object.entries(salaries).map((value) => [value[0], (total += value[1])])
//   );
//   return total;
// }

//destructuring//

// let arr = ['hello', 'hi', 'everyone'];
// [greating, , people] = arr;
// console.log(greating);
// console.log(people);

//string destructuring//

// let [a, b, c] = 'a,b,c';
// console.log(a);

//destructuring assignment//

// let user = {};
// [user.name, user.lastname] = 'jhon cena'.split(' ');
// console.log(user.name);
// console.log(user.lastname);

//object value destructuring//

// let user = {
//   name: 'randy',
//   lastname: 'ortan',
// };

// for (let [key, value] of Object.entries(user)) {
//   console.log(`key: ${key}, value: ${value}`);
// }

//map destructuring//

// let map = new Map();
// map.set('one', 'value one');
// map.set('two', 'value two');
// for (let [keys, value] of map) {
//   console.log(keys + ',' + value);
// }

//swap by destructuring//

// let guest = 'Jane';
// let admin = 'Pete';
// [guest, admin] = [admin, guest];
// console.log(guest);
// console.log(admin);

//rest operator//

// let [name1, name2, ...rest] = [
//   'Julius',
//   'Caesar',
//   'Consul',
//   'of the Roman Republic',
// ];
// console.log(rest);

//destructuring assignment//

// let [nameval = 'jhon', age = 20] = ['cena'];
// console.log(nameval, age);

//object destructuring//

// let obj = { no: 10, name: 'karthi', age: 20 };
// let { no: rollno, name, address = 'chennai', ...rest } = obj;
// console.log(obj);

//nested object destructuring//

// let options = {
//   size: {
//     width: 100,
//     height: 200,
//   },
//   items: ['Cake', 'Donut'],
//   extra: true,
// };

// let {
//   size: { width, height },
//   items: [item1, item2],
//   extra,
// } = options;
// console.log(width);

//smart function pramenters//

// function smartFunctionParameters(name = 'demo', age = 10, user = true) {
//   return `${name} ${age} ${user}`;
// }
// console.log(smartFunctionParameters('karthi', 20));

// let option = {
//   name: 'karthi',
//   age: 20,
// };
// function smartFunctionParameters({ name = 'demo', age = 10, user = true }) {
//   return `${name} ${age} ${user}`;
// }
// console.log(smartFunctionParameters(option));

//object destructuring problem//

// let user = {
//   name: 'John',
//   years: 30,
// };
// let { name: userName, years, isAdmin = false } = user;
// console.log(userName, years, isAdmin);

//array destructuring problem//

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };
// console.log(topSalary(salaries));

// function topSalary(salaries) {
//   let maxSalary = 0;
//   let maxName = null;
//   for (let [name, value] of Object.entries(salaries)) {
//     if (maxSalary < value) {
//       maxSalary = value;
//       maxName = name;
//     }
//   }
//   return maxName;
// }

//date//

// let date = new Date(0);
// console.log(date);

//hour to second//

// let date = new Date(24 * 3600 * 1000);
// console.log(date);

// let date = new Date('1997-05-01');
// console.log(date);

//date properties//

// let date = new Date();
// console.log('date:', date.getDate());
// console.log('day:', date.getDay());
// console.log('month:', date.getMonth());
// console.log('year:', date.getFullYear());
// console.log('hours:', date.getHours());
// console.log('minutes:', date.getMinutes());
// console.log('sec:', date.getSeconds());
// console.log('milli sec:', date.getMilliseconds());
// console.log('timezone:', date.getTimezoneOffset());
// console.log('time:', date.getTime());
// console.log('utc date:', date.getUTCDate());
// console.log('utc day:', date.getUTCDay());
// console.log('utc year:', date.getUTCFullYear());
// console.log('utc month:', date.getUTCMonth());
// console.log('utc hours:', date.getUTCHours());
// console.log('utc minutes:', date.getUTCMinutes());
// console.log('utc sec:', date.getUTCSeconds());
// console.log('utc milli sec:', date.getUTCMilliseconds());

//auto adjust//

// let date = new Date(2000, 0, 1);
// date.setDate(date.getDate() + 2);
// console.log(date);

//timestamp//

// let date = new Date();
// console.log(+date);

//timestamp from 1970//

// let now = Date.now();
// console.log(now);

// let date = Date.parse('2020');
// console.log(date);

//calculate milli second from page loads//

// console.log(performance.now());

// let date = new Date(2012, 01, 20, 03, 12);
// console.log(date);

// let date = new Date(2012, 0, 4);
// console.log(getWeekDay(date));
// function getWeekDay(date) {
//   let day = date.getDay();
//   let week = ['SUN', 'MO', 'TU', 'WED', 'THU', 'FRI', 'SAT'];
//   return week[day];
// }

// console.log(getLocalDay(date));

// function getLocalDay(date) {
//   let day = date.getDay();

//   if (day == 0) {
//     // weekday 0 (sunday) is 7 in european
//     day = 7;
//   }
//   return day;
// }

//get correct date even subract//

// let date = new Date(2015, 0, 2);

// console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
// console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
// console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)

// function getDateAgo(date, num) {
//   let dateClone = new Date(date);
//   dateClone.setDate(date.getDate() - num);
//   return dateClone.getDate();
// }

//get last day of month//

// function getLastDayOfMonth(year, month) {
//   let date = new Date(year, month + 1, 0);
//   return date.getDate();
// }
// console.log(getLastDayOfMonth(2021, 02));

//get second of date//

// function getSecondsToday() {
//   let now = new Date();
//   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//   let diff = now - today;
//   return diff / 1000;
// }
// console.log(getSecondsToday());

// function getSecondsToday() {
//   let date = new Date();
//   return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
// }
// console.log(getSecondsToday());

//get seconds till tomorrow//

// function getSecondsToTomorrow() {
//   let date = new Date();
//   let tomorrow = new Date(
//     date.getFullYear(),
//     date.getMonth(),
//     date.getDate() + 1
//   );
//   let diff = tomorrow - date;
//   return Math.round(diff / 1000);
// }
// console.log(getSecondsToTomorrow());

//convert object to string//

// let obj = { name: 'karthi', age: 20, de: 'jf' };
// function convertObjectToString(obj) {
//   return Object.entries(obj).reduce((str, [p, val]) => {
//     return `${str}${p}::${val}\n`;
//   }, '');
// }
// console.log(convertObjectToString(obj));

//json stringify//

// let student = {
//   name: 'John',
//   age: 30,
//   isAdmin: false,
//   courses: ['html', 'css', 'js'],
//   wife: null,
// };
// console.log(JSON.stringify(student));
// console.log(JSON.stringify(1));
// console.log(JSON.stringify('hello'));
// console.log(JSON.stringify([1, 2, 3]));

//tojson//

// let obj = {
//   name: 'karthi',
//   toJSON() {
//     return this.name;
//   },
// };
// console.log(obj);

//json parse//

// let num = '[1,2,3]';
// console.log(JSON.parse(num));

// let user = {
//   name: 'John Smith',
//   age: 35,
// };

// console.log(JSON.parse(JSON.stringify(user)));

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

//new function//

// let sum = new Function('a', 'b', 'return a+b');
// console.log(sum(5, 6));

// let hi = new Function('console.log("hi hi")');
// hi();

//scheduling//

// function hello() {
//   console.log('hello');
// }
// setTimeout(hello, 5000);

// function hello(one, two) {
//   console.log(one, two);
// }
// setTimeout(hello, 3000, 'hello', 'world');

// setTimeout('console.log("hello")', 2000);

// setTimeout(() => console.log('hello wrld'), 2000);

// let timerId = setTimeout('hello', 2000);
// console.log(timerId);
// clearTimeout(timerId);

// let time = setInterval(() => console.log('hi'), 4000);
// clearInterval(time);

// let interval = setInterval(() => console.log('interval'), 2000);
// setTimeout(() => clearTimeout(interval), 5000);

//print number//

// function printNumbers(from, to) {
//   let current = from;
//   let timerId = setInterval(function () {
//     console.log(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 1000);
// }
// printNumbers(5, 10);
