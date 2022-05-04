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

let [name1, name2, ...rest] = [
  'Julius',
  'Caesar',
  'Consul',
  'of the Roman Republic',
];
console.log(rest);
