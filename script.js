//call apply bind//

// let person1 = { name: 'karthy' };
// let person2 = { name: 'santhiya' };
// function message() {
//   return `${arguments[0]} ${this.name} ${arguments[1]}`;
// }
// let call = message.call(person1, ['hello'], 'welcome');
// console.log(call);

// let apply = message.apply(person2, ['hi', 'welcome']);
// console.log(apply);

// let bind = message.bind(person2, 'hi', ['come']);
// console.log(bind());

//property flag//

// let user = {
//   age: 20,
// };
// Object.defineProperty(user, 'name', {
//   value: 'john',
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });
// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
// console.log(user);
// console.log(JSON.stringify(descriptor));

// let admin = {
//   isAdmin: true,
//   hello: 'hi',
// };

// Object.defineProperty(admin, 'hello', {
//   value: 'hello world',
//   writable: false,
//   enumerable: true,
//   configurable: false,
// });

// admin.hello = 'hi';
// delete admin.hello;
// let desc = Object.getOwnPropertyDescriptor(admin, 'hello');
// console.log(desc);
// console.log(admin);

//getter setter//

// let user = {
//   firstName: 'karthi',
//   lastName: 'gopal',
//   get fullname() {
//     return this.firstName + this.lastName;
//   },
//   set fullname(value) {
//     return ([this.firstName, this.lastName] = value.split(' '));
//   },
// };
// user.fullname = 'ranjani devi';
// console.log(user.fullname);

// let user = {
//   name: 'karthi',
//   age: 25,
//   get userDetails() {
//     return `${this.name} ${this.age}`;
//   },
//   set userDetails(value) {
//     return ([this.name, this.age] = value.split(' '));
//   },
// };
// user.userDetails = 'santhiya 24';
// console.log(user.userDetails);

//prototype//

// let rabbit = {
//   food: 'carrot',
//   drink: 'water',
//   place: 'home',
// };
// let tiger = {
//   place: 'forest',
//   // ...rabbit,
// };
// Object.assign(rabbit, tiger);
// rabbit.__proto__ = tiger;
// console.log(rabbit.__proto__);
// console.log(rabbit.__proto__.__proto__);
// console.log(rabbit.__proto__.__proto__.__proto__);

// console.log(tiger);

// console.info('hello %cWorld %ckyle', 'color:green', 'background-color:red');

// let car = {
//   carName: 'toyoto',
//   carType: 'bs6',
//   country() {
//     alert(this.carName + ' from korea');
//   },
// };
// let bike = {
//   bikeName: 'royal enfield',
//   __proto__: car,
// };
// let vehicle = {
//   both: 'car/bike',
//   __proto__: bike,
// };
// alert(vehicle.carName);
// car.country();

//getter setter prototype//

// let user = {
//   firstname: 'karthi',
//   lastname: 'gopal',
//   get fullname() {
//     return `${this.firstname} ${this.lastname}`;
//   },
//   set fullname(value) {
//     return ([this.firstname, this.lastname] = value.split(' '));
//   },
// };
// let admin = {
//   isAdmin: true,
//   __proto__: user,
// };
// admin.fullname = 'ranjani devi';
// console.log(admin.fullname);

//for in proto//

// let user = {
//   name: 'karthi',
// };
// let admin = {
//   isAdmin: true,
//   __proto__: user,
// };
// console.log(admin);
// for (let keys in admin) {
//   let isOwn = admin.hasOwnProperty(keys);
//   let check = isOwn
//     ? 'own property' + ' :' + isOwn
//     : 'prototype' + ': ' + isOwn;
//   console.log(check);
//   console.log(keys);
// }
