// let a = {
//   name: 'hello',
// };
// let b = { ...a };
// b.name = 'test';
// console.log(a);
// console.log(b);

// let a = {
//   name: 'test',
//   add: 1,
//   // add: {
//   //   code: 1,
//   // },
// };
// let b = { ...a };
// b.add = 2;
// console.log(a.add);
// console.log(b.add);

// let a = 10;
// let b = a;
// b = 5;
// console.log(a);
// console.log(b);

// function square(n) {
//   let result = 0;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       result += n;
//     }
//   }
//   return result;
// }
// console.log(square(555));

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// const product = (a) => (b) => a * b;
// console.log(product(4)(5));

// console.log('starts');
// setTimeout(() => console.log('settimeout'), 0);
// Promise.resolve()
//   .then((res) => console.log('promise 1'))
//   .then((res) => console.log('promise 2'));
// console.log('end');

// console.log('starts');
// function demo(sample) {
//   console.log('demo');
//   return sample();
// }
// function sample() {
//   console.log('sample');
// }
// demo(sample);
// console.log('end');

// function outer() {
//   let innerValue = 10;
//   function inner() {
//     let b = 'xyz';
//     console.log(innerValue, b);
//   }
//   return inner;
// }
// outer()();

// const items = [
//   { name: 'Bike', price: 100 },
//   { name: 'TV', price: 200 },
//   { name: 'Album', price: 10 },
//   { name: 'book', price: 5 },
//   { name: 'Phone', price: 500 },
//   { name: 'Computer', price: 1000 },
//   { name: 'Keyboard', price: 25 },
// ];

// const filtered = items.filter((val) => val.price > 10);
// console.log(filtered);

// const mapped = items.map((val) => val.price + 10);
// console.log(mapped);

// const forEaches = items.forEach((val) => val.price);
// console.log('foreach', forEaches);

// const somes = items.some((val) => val.price > 10);
// console.log(somes);

// const everys = items.every((val) => val.price > 20);
// console.log(everys);

// // const filled = items.fill(20);
// // console.log(filled);

// const find = items.find((val) => {
//   return val.name === 'TV';
// });
// console.log(find);

// const reduce = items.reduce((acc, cur) => {
//   return acc + cur.price;
// }, 0);
// console.log(reduce);

// const arr = [1, 2, 3, 4, 5];
// const includes = arr.includes(1
//   );
// console.log(includes);

// let obj = {
//   firstName: 'pika',
//   lastName: 'chu',
//   fname: this.firstName,
//   onFullName() {
//     return this.firstName + this.lastName;
//   },
// };
// function getFullName() {
//   return this.onFullName() + ' ' + 'like pokeman';
// }
// let bindName = getFullName.bind(obj);
// console.log(bindName());
// console.log(obj.fname);

// const obj = {
//   firstName: 'sachin',
//   lastName: 'tendulkar',
// };
// let fullName = function(city) {
//   return console.log(this.firstName + ' ' + this.lastName+' '+city);
// },
// const obj2 = {
//   firstName: 'virat',
//   lastName: 'kohli',
// };
// fullName.call(obj2,'mumbai');
// fullName.call(obj,'delhi')

// function demo(d){
//   console.log('val',d)
// }
// demo.call('hello')
// demo('hi')

// let bindVal = fullName.bind(obj)
// console.log(bindVal)
// bindVal('check')

// console.log(Number);

// const math = Math.max.apply(null, [1, 2, 3]);
// console.log(math);

// let obj = {
//   fname: 'karthi',
//   lname: 'gopal',
//   fullName() {
//     console.log(this.fname + this.lname);
//   },
// };
// let bindVal = obj.fullName.bind(obj);
// setTimeout(bindVal, 0);

// const sum = (a) => (b) => b ? sum(b + a) : a;
// console.log(sum(2)(4)(6)(8)(10)());
