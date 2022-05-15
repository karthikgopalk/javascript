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

//append array//

// let arr = [1, 2, 3, 4];
// arr[arr.length] = 5;
// arr.push(6);
// console.log(arr);

// let obj = { num: 10 };
// delete obj;
// obj = null
// console.log(obj);
// let a
// a = 10
// delete a
// console.log(a)

//class//

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayhi() {
//     console.log(this.name);
//   }
// }
// let user = new User('john');
// user.sayhi();

// class Admin {
//   constructor(name) {
//     this.name = name;
//   }
//   sayhi() {
//     return this.name;
//   }
// }
// let admin = new Admin('karthi');
// console.log(admin.sayhi());

//prototype//

// function Student(name, sub) {
//   this.name = name;
//   this.sub = sub;
// }
// let student1 = new Student('karthi', 'cse');
// console.log(student1.__proto__);
// console.log(Student.prototype);
// console.log(student1.prototype);
// console.log(typeof Student.prototype);
// console.log(typeof student1.__proto__);
// console.log(Student.prototype == student1.__proto__);

// Student.prototype.age = 20;
// console.log(student1);
// console.log(typeof student1);

// let student2 = new Student('jhon', 'cse');
// console.log(student2.age);

// function Student() {
//   this.name = 'karthi';
//   this.dept = 'cse';
// }
// let student1 = new Student();
// console.log(student1);
// console.log(Student);
// Student.prototype.age = function () {
//   return 'the age is ' + 10;
// };
// Student.prototype.date = 01;
// console.log(student1.date);
// Student.prototype = { date: 5 };
// console.log(student1.date);
// console.log(student1.age());
// let proto = Object.getPrototypeOf(student1);
// console.log(proto.constructor);
// console.log(Object.prototype);

// let x = 'constructor';
// console.log(x[x]);

// let animal = {
//   name: 'lion',
// };
// let type = {
//   veg: 'vegiterian',
// };
// animal.__proto__ = type;
// console.log(animal.veg);

// let head = {
//   glasses: 1,
// };
// let table = {
//   pen: 3,
//   demo() {
//     return 'hello';
//   },
// __proto__: head,
// };
// head.__proto__ = table;

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   // __proto__: pockets,
// };

// let pockets = {
//   money: 2000,
// };

// console.log(head.demo());

let lion = {
  num: 10,
};
function Animal() {
  this.name = 'tiger';
  this.place = 'india';
}
// Animal.prototype = lion;
// let animal1 = new Animal();
// console.log(animal1.num);
// console.log(Animal.constructor);
// console.log(Animal);
// console.log(Animal.prototype);
// console.log(Animal.prototype.constructor == Animal);
// console.log(Animal.prototype.constructor);

// let animal = {
//   eats: true,
// };

// function Rabbit(name) {
//   this.name = name;
// }

// Rabbit.prototype = animal;

// let rabbit = new Rabbit('White Rabbit');
// console.log(rabbit);

//constructor//

// function User(name) {
//   this.name = name;
// }

// let user = new User('John');
// let user2 = new user.constructor('Pete');

// console.log(user2.name);

// let obj = {};
// console.log(obj.__proto__ == Object.prototype);
// console.log(obj.toString == obj.__proto__.toString);
// console.log(obj.toString == Object.prototype.toString);

// Object.prototype.toString = function () {
//   return 'hello';
// };
// let obj = {
//   name: 'karthi',
// };
// console.log([1, 2, 3].toString());

// let obj = {};
// console.log(obj.toString());

//custom method//

// function f() {
//   console.log('hello');
// }
// Function.prototype.defer = function (ms) {
//   setTimeout(this, ms);
// };
// f.defer(1000);

// let animal = {
//   name: 'tiger',
// };
// let rabbit = Object.create(animal);
// console.log(rabbit.name);
// console.log(Object.getPrototypeOf(rabbit));
// Object.setPrototypeOf(rabbit, {});
// console.log(rabbit.name);
