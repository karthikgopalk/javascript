//object reference//

// let a = {};
// let b = a;
// console.log(a == b);

//shallow copy object//

// let c = 'hello';
// let d = c;
// d = 'hi';
// console.log(d, c);
// console.log(d == c);

// let e = {
//   name: 'karthi',
// };
// let f = e;
// console.log('f->', f);
// f.name = 'gopal';
// console.log('f->', f);
// console.log('e->', e);

//two empty object never equal//

// let g = {};
// let h = {};
// console.log(g == h);

// object deep clone//

// let original = {
//   dataOne: 'one',
//   dataTwo: 'two',
// };
// let clone = {};
// for (let key in original) {
//   clone[key] = original[key];
// }
// console.log(clone);
// clone.dataOne = 'big one';
// console.log(clone);
// console.log(original);

// object assign//

// let user = { name: 'mohan' };
// let permission1 = { isEdit: true };
// let permission2 = { isView: true };
// Object.assign(user, { name: 'karthi' }, permission1, permission2);
// console.log(user);

// object assign deep clone//

// let original = {
//   dataOne: 'one',
//   dataTwo: 'two',
// };
// let clone = Object.assign({}, original);
// console.log(clone);
// clone.dataOne = 'big one';
// console.log(clone);
// console.log(original);
// console.log(typeof original.dataOne);

// in shallow copy one reference became null rest will show the object//

// let admin = {
//   name: 'san',
// };
// let user = admin;
// admin = null;
// console.log(user);

//interlink object//

// function marry(man, woman) {
//   man.wife = woman;
//   woman.husband = man;
//   return {
//     father: man,
//     mother: woman,
//   };
// }
// let relation = marry({ name: 'karthi' }, { name: 'santhiya' });
// console.log(relation);

//interlink object//

// function marry(man, woman) {
//   woman.husband = man;
//   man.wife = woman;

//   return {
//     father: man,
//     mother: woman,
//   };
// }

// let family = marry(
//   {
//     name: 'John',
//   },
//   {
//     name: 'Ann',
//   }
// );
// console.log(family);
// delete family.father;
// delete family.mother.husband;
// console.log(family);

// this keyword //

// let user = {
//   nameUser: 'k',
//   sayhi() {
//     return this.nameUser;
//   },
// };
// console.log(user.sayhi());

// this function //

// function sayHi() {
//   return this.name;
// }
// let user = {
//   name: 'karthi',
//   d1() {
//     let de = () => this.name;
//     return de();
//   },
// };
// let admin = { name: 'gopal' };
// user.fun = sayHi;
// admin.fun = sayHi;
// console.log(user.fun());
// console.log(admin['fun']());
// console.log(user['d1']());

// this will not work //

// function makeUser() {
//   return {
//     name: 'karthi',
//     firstName: this,
//   };
// }
// let user = makeUser();
// console.log(user.firstName.name);

// this with function //

// let user = {
//   name: 'k',
//   makeUser() {
//     return this;
//   },
// };
// console.log(user.makeUser().name);

// calculator //

// let calculator = {
//   read() {
//     this.enterA = +prompt('enter the first number', 0);
//     this.enterB = +prompt('enter the second number', 0);
//   },
//   sum() {
//     return this.enterA + this.enterB;
//   },
//   mul() {
//     return this.enterA * this.enterB;
//   },
// };
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

//object chaining//

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     console.log(this.step);
//     return this;
//   },
// };
// ladder.up().up().down().up().up().showStep();

// length,key,value,push//

// let student = {
//   name: 'jhon',
//   sClass: 'b1',
//   rollno: 12,
// };
// let keyVal = [];
// for (let key in student) {
//   keyVal.push(key);
// }
// console.log(keyVal);
// console.log(student);
// delete student.rollno;
// console.log(student);
// let length = Object.keys(student).length;
// console.log(length);
// console.log(Object.keys(student));
// console.log(Object.keys(student).map((k) => student[k]));

//constructor//

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }
// const isUser = new User('john');
// console.log(isUser['name']);

// function User() {
//   if (!new.target) {
//     return new User();
//   }
//   console.log(new.target);
// }
// let check = User();

//object creation//

// let obj1 = { name: 'san' };
// console.log(obj1);
// let obj2 = new Object();
// obj2.name = 'ranjani';
// console.log(obj2);
// let obj3 = new User();
// function User() {
//   if (!new.target) {
//     return new User();
//   }
//   this.name = 'aarthi';
//   this.age = 20;
//   return this;
// }
// console.log(obj3);
// const orgObject = { company: 'ABC Corp' };
// const obj4 = Object.create(orgObject, { name: { value: 'EmployeeOne' } });
// console.log(obj4);
// let obj5 = Object.assign({}, orgObject, obj2);
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }
// let PersonObj = new Person('karthi', 'gopal');
// console.log(obj5);

// object comparision //

// const z = {};
// function A() {
//   return z;
// }
// function B() {
//   return z;
// }
// console.log(new A() == new B());

// calculator in constructor //

// let calc = new Calculator();
// function Calculator() {
//   this.read = function () {
//     this.a = +prompt('enter a', 0);
//     this.b = +prompt('enter b', 0);
//   };
//   this.add = function () {
//     return this.a + this.b;
//   };
//   this.mul = function () {
//     return this.a * this.b;
//   };
// }
// calc.read();
// console.log(calc.add());
// console.log(calc.mul());

//accumualtor//

// let accumualtor = new Accumulator(1);
// function Accumulator(currentValue) {
//   this.value = currentValue;
//   this.read = function () {
//     this.userValue = +prompt('enter value: ', 0);
//     this.value += this.userValue;
//     return this;
//   };
// }
// accumualtor.read();
// accumualtor.read();
// console.log(accumualtor.value);

//optional chaining//

// let user = {
//   demo() {
//     return 'hello';
//   },
// };
// console.log(user.demo?.());

//symbol//

// let id = Symbol('id');
// let user = {
//   name: 'demo',
//   [id]: 123,
// };
// user[id] = 1;
// console.log(user);
// console.log(user[id]);
// let idval = Symbol.keyFor(id);
// console.log(idval);
// let sym = Symbol('id');
// console.log(sym);
// let symfor = Symbol.for('demo');
// console.log(symfor);
// console.log(Symbol.keyFor(symfor));

// let library = [
//   {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//     readingStatus: true,
//   },
//   {
//     author: 'Steve Jobs',
//     title: 'Walter Isaacson',
//     readingStatus: true,
//   },
//   {
//     author: 'Suzanne Collins',
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     readingStatus: false,
//   },
// ];
// let obj = Object.keys(library).map((k) => {
//   let out = `Author name: ${library[k].author}
//     Title: ${library[k].title}
//     Reading status: ${library[k].readingStatus}`;
//   console.log(out);
// });
