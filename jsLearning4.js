// 'use strict';
// power

// console.log(Math.pow(5, 2));
// console.log(5 ** 3);

//replace string

// let str = 'hello welcome to js hello';
// console.log(str.replace('hello', 'hi'));
// console.log(str.replace(/HELLO/i, 'es6'));
// console.log(str.replace(/hello/g, 'es6'));
// console.log('hello'.concat(' ', 'world'));

// let a = 20;
// console.log(typeof String(a));

//RegEx//

// let reg = new RegExp();
// let reg2 = /pattern/gim;

// let str = 'we will, WE will rock you';
// let result = str.match(/we/i);
// console.log(result);
// console.log(result.length);
// console.log(result[0]);
// console.log(result.input);
// console.log(result.index);

// let str = 'we will, WE will rock you';
// let result = str.match(/demo/i) || [];
// console.log(result);
// if (!result.length) console.log('no data found');

// let str = 'we will WE will rock you'.replace(/we/gi, 'i');
// console.log(str);

// let str = 'we will WE will rock you';
// let regex = /we/i;
// console.log(regex.test(str));

// let number = '+91-9876-543210';
// console.log(number.match(/\d/g).join(''));

// let space = 'one two three four';
// console.log(space.match(/\s/g).length);

// let one = 'hello4hi3 d5';
// console.log(one.match(/\d/g));

// let one = '1';
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let find = num.find((str) => str == one);
// console.log(find);

// let one = 'hello4hi3 d5';
// console.log(one.replace(/\D/g, ''));

// console.log('Z'.match(/./));
// console.log('csl4'.match(/cs.4/g));
// console.log('A\nB'.match(/A.B/s));

// function regexVar(input) {
//   /*
//    * Declare a RegExp object variable named 're'
//    * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
//    */
//   let re;
//   if (input >= 3) {
//     re = input.match(/^[a,e,i,o,u]/gi);
//   }

//   /*
//    * Do not remove the return statement
//    */
//   return re;
// }
// console.log(regexVar('hello'));

// console.log(/^o..o$/gi.test(input));
// console.log(/^[a,e,i,o,u]/gi.test(input));

// function regex(input) {
//   if (input.length > 3) {
//     let out = ['a', 'e', 'i', 'o', 'u'].filter(
//       (val) => input.startsWith(val) && input.endsWith(val) == true
//     );
//     return out.length ? true : false;
//   }
//   return 'input is lesser than 3';
// }
// console.log(regex('owseo'));

// function reverseString(s) {
//   if (typeof s === 'String') {
//     return console.log(s.split('').reverse().join(''));
//   }
//   throw { message: 'error' };
// }
// reverseString(123);

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.NaN);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number.POSITIVE_INFINITY);
// console.log(typeof NaN);

// console.log('Breakfast at 09:00 in the room 123:456.'.match(/\b\d\d:\d\d\b/)); // 09:00

// function hello(one, two) {
//   return 'hello world';
// }
// console.log(hello.name);
// console.log(hello.length);
// console.log(hello);

// console.log('alice15@gmail.com'.match(/[^\d\w]/g).join(''));
// console.log('10+9-15'.match(/[\D]/g));

// let regexp = /\d{2}[:-]\d{2}/g;
// alert('Breakfast at 09:00. Dinner at 21-30'.match(regexp)); // 09:00, 21-30

// console.log("I'm 12345 years old".match(/\d{5}/g).join(''));

// console.log("I'm not 12, but 345678 years old".match(/\d{3,5}/g));

// console.log('+7(903)-123-45-67'.match(/\d+/g));

// let regexp = /\.+/g;
// console.log('Hello!... How goes?.....'.match(regexp)); // ..., .....

// let regexp = /\#[a-f0-9]{6}\b/gi;

// let str =
//   'color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #1234567 #12qwas3';

// console.log(str.match(regexp)); // #121212,#AA00ef

// let str = 'a "witch" and her "broom" is one';
// console.log(str.match(/".+?"/));

// let num = `1234567890
// 123-456-7890
// 123 456 7890`;
// console.log(num);
// console.log(num.match(/(?<g1>\d{3})[\s-]?(\d{3})[\s-]?(\d{4})/gm));

// let obj = {
//   userName: 'karthi',
// };
// let descriptor = Object.getOwnPropertyDescriptor(obj, 'userName');
// console.log(descriptor);
// Object.defineProperty(obj, 'password', {
//   value: 'abc',
//   writable: true,
//   enumerable: true,
//   configurable: false,
// });
// obj.password = 'bbb';
// delete obj.password;
// console.log(obj);
// let obj2 = Object.defineProperties(
//   {},
//   {
//     name: { value: 'John', writable: false },
//     surname: { value: 'Smith', writable: false },
//   }
// );
// console.log(obj2);

// let user = {
//   userName: 'karthi',
//   surname: 'gopal',
//   get fullName() {
//     return `${this.userName} ${this.surname}`;
//   },
//   set fullName(value) {
//     [this.userName, this.surname] = value.split(' ');
//   },
// };
// console.log(user.fullName);
// user.fullName = 'demo d';
// console.log(user.fullName);

// let user = {
//   name: 'karthi',
// };
// let admin = {
//   permission: 'allow',
// };
// user.__proto__ = admin;
// console.log(user.permission);

// let animal = {
//   live: 'forest',
//   type() {
//     console.log(this.live + ' ' + 'alagetor');
//   },
// };
// let rabbit = {
//   character: 'soft',
//   __proto__: animal,
// };
// rabbit.type();
// console.log(rabbit.live);

// let user = {
//   firstName: 'karthi',
//   lastName: 'gopal',
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(value) {
//     [this.firstName, this.lastName] = value.split(' ');
//   },
// };
// let admin = {
//   isAdmin: true,
//   __proto__: user,
// };
// console.log(admin.fullName);
// admin.fullName = 'jhon peter';
// console.log(admin.fullName);

// console.log(Object.keys(admin));
// for (let key in admin) {
//   let original = admin.hasOwnProperty(key);
//   console.log(original ? 'original ' + key : 'inherited ' + key);
// }

// let head = {
//   glasses: 1,
// };

// let table = {
//   pen: 3,
//   __proto__: head,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table,
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed,
// };
// console.log(pockets.pen);
// console.log(bed.glasses);

// let animal = {
//   eat() {
//     return (this.full = true);
//   },
// };

// let rabbit = {
//   __proto__: animal,
// };

// console.log(rabbit.eat());

// let user = {
//   type: 'simple',
// };
// function Admin() {
//   this.isAdmin = true;
// }
// // Admin.prototype = user;
// let admin = new Admin();
// console.log(admin.isAdmin);
// console.log(admin.type);
// console.log(Admin);
// console.log(Admin.prototype);
// console.log(Admin.prototype.constructor);
// console.log(admin);
// console.log(admin.constructor);

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true,
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// console.log(rabbit.eats);

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true,
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// console.log(rabbit.eats);

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true,
// };

// let rabbit = new Rabbit();

// delete Rabbit.prototype.eats;

// alert(rabbit.eats); // ?

// function Obj() {
//   this.name = 'karthi';
// }
// let obj = new Obj();

// let obj2 = new obj.constructor();

// let obj1 = {};
// console.log(obj1);
// console.log(obj.toString());
// console.log(typeof obj.toString());

// let arr = [1, 2, 3];
// console.log(arr.__proto__ == Array.prototype);
// console.log(arr.__proto__.__proto__ == Object.prototype);
// console.log(arr.__proto__.__proto__.__proto__ == null);
// let str = 'one';
// console.log(str.__proto__ == String.prototype);

// let obj = {
//   0: 'hello',
//   1: 'world',
//   length: 2,
// };
// obj.join = Array.prototype.join;
// console.log(obj.join());

// function f() {
//   alert('Hello!');
// }

// Function.prototype.defer = function (ms) {
//   setTimeout(this, ms);
// };

// f.defer(2000);

// let rabbit = {
//   eats: true,
// };
// let animal = Object.create(rabbit);
// console.log(animal.eats);
// console.log(Object.getPrototypeOf(animal) == rabbit);
// console.log(Object.setPrototypeOf(rabbit, {}));
// console.log(rabbit);
