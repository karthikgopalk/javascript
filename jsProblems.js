//variable//

// let admin;
// const NAME = 'jhon';
// admin = NAME;
// alert(admin);

//infinity//

// alert(1 / 0);

//typeOf infinity//

// const infinity = Infinity;
// console.log(typeof infinity);

//backtick//

// let world = 'world';
// let demo = `hello ${world}`;
// console.log(demo);

//typeOf funcion//

// function demo() {
//   'hello';
// }
// console.log(typeof demo);

//typeOf arr//

// let arr = [1, 2, 3];
// console.log(typeof arr);

//backtick embeded//

// alert(`hi ${1}`);
// alert(`hi ${'hi'}`);

//prompt and confirm //

// let promtTest = prompt('enter the text');
// console.log(promtTest);
// let trythis = confirm('hi');
// console.log(trythis);

//prompt input//

// let age = prompt('your age');
// console.log(`your age is ${2022 - age}`);

//NaN//

// let val = NaN;
// alert(Boolean(val));

//arguments//

// function arg(a, b, c) {
//   console.log(arguments[0]);
//   console.log(arguments[1]);
//   console.log(arguments[2]);
//   console.log(arguments[3]);
// }
// arg(55, 66, 77);

//operators//

// console.log(5 % 3);
// console.log(3 ** 3);
// console.log(3 * '3');

//unary operator//

// let a = true;
// console.log(-a);

//chaining assignment//

// let a, b;
// a = b = 2;
// console.log(a, b);

//+=//

// let n = 5;
// n += 6;
// console.log(n);

// increment //

// let a = 5;
// alert(a++);

// decrement //

// let a = 5;
// console.log(--a);
// console.log(a);

// data takes last value//

// let a = (1 + 2, 5 + 3);
// console.log(a);

//date//

// const date = new Date();
// const dayNumber = date.getDay();
// const days = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
// ];
// console.log('Today is:', days[dayNumber]);
// let hours = date.getHours();
// let amPm;
// hours < 12 ? (amPm = 'AM') : (amPm = 'PM') ? (hours -= 12) : hours;
// console.log(
//   `Current time is: ${hours} ${amPm} : ${date.getMinutes()} : ${date.getSeconds()}`
// );

// const date = new Date();
// let currentDay = date.getDate();
// let currentMonth = date.getMonth();
// currentDay <= 9 ? (currentDay = '0' + currentDay) : currentDay;
// currentMonth <= 9 ? (currentMonth = '0' + currentMonth) : currentMonth;
// console.log(`${currentDay}-${currentMonth}-${date.getFullYear()}`);

//print//

// function printHandler() {
//   window.print();
// }

//area of triangle//

// let s1 = 5,
//   s2 = 6,
//   s3 = 7;
// let s = (s1 + s2 + s3) / 2;
// let area = Math.sqrt(s * (s - s1) * (s - s2) * (s - s3));
// console.log(area);

//falsy statement//

// if (0) {
//   console.log('0');
// }

//comparision//

// const value = +prompt('enter the value');
// let result;
// if (value > 0) result = 'greater than 0';
// else if (value < 0) result = 'lesser than 0';
// else result = 'equals to ero';
// console.log(result);

//Logical or///

// let a = 10;
// if (a == 11 || a == 12 || a == 5) {
//   console.log('or');
// }

// logical or//

// const checkAdmin = prompt('Enter the user');
// if (checkAdmin == 'Admin') {
//   const enterPassword = prompt('Enter the password');
//   if (enterPassword == 'TheMaster') console.log('Welcome');
//   else if (enterPassword == '' || null || undefined) console.log('cancelled');
//   else console.log('wrong password');
// } else if (checkAdmin == '' || null || undefined) console.log('cancelled');
// else console.log("I don' know you");

// nullish coalshing//

// let a,
//   b = 5;
// console.log(a != undefined && a != null ? a : b);
// console.log(a ?? b);

// object undefined //

// let bio = {
//   name: 'karthy',
//   bio: null,
// };
// console.log(bio?.age);

// while //

// let i = 5;
// while (i) {
//   console.log(i--);
// }

//while//

// let j = 0;
// while (j < 5) console.log('while', j++);

// let j = 0;
// while (j < 3) console.log('while', j++);

//do while//

// let i = 0;
// do {
//   console.log('do', i++);
// } while (i < 5);

// let num;
// do {
//   num = +prompt('enter number greater than 100', 0);
// } while (num <= 100 && num);

//for loop//

// for (let k = 0; k < 5; k++) {
//   console.log('for', k);
// }

// let i = 0;
// for (; i < 5; ) {
//   console.log(i++);
// }

// continue//

// let sum = 0;
// for (let i = 0; i < 10; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

//slice//

// let txt = 'I can eat bananas all day';
// let x = txt.slice(10, 17);
// console.log(x);

//modules//

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//string literal//

// for (let i = 0; i < 3; i++) {
//   console.log(`${i}`);
// }

//prime number//

// let n = 10;
// primeNumber: for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue primeNumber;
//   }
//   console.log(i);
// }

//switch//

// let a = 2 + 2;
// switch (a) {
//   case 3:
//     console.log('too low');
//     break;
//   case 4:
//     console.log('equal');
//     break;
//   case 5:
//     console.log('high');
//     break;
//   default:
//     console.log('number');
// }

//prompt if//

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert(0);
// }
// if (a == 1) {
//   alert(1);
// }

// if (a == 2 || a == 3) {
//   alert('2,3');
// }

//prompt switch//

// let a = +prompt('a?', '');
// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2 || 3:
//     alert('2,3');
//     break;
//   default:
//     alert('nothing');
// }
// variable declare in pramenters//

// function demo(p1, p2 = 'world') {
//   return console.log(p1, p2);
// }
// demo('hi', 'people');

//age//

// function checkAgeHandler() {
//   let age = +prompt('enter the age', 0);
//   if (age < 18) console.log('minor');
//   else if (age > 18) console.log('Major');
//   return;
// }
// checkAgeHandler();

// without return keyword//

// function showCode() {
//   10;
// }
// console.log(showCode);

//function//

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// function yes() {
//   console.log('user pressed yes');
// }
// function no() {
//   console.log('user pressed no');
// }
// ask('are you sure to press', yes, no);

// arrow funcion//

// let sum = (a, b) => a + b;
// console.log(sum(2, 5));

// let double = (n) => n * 2;
// console.log(double(5));

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

// let ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };
// ask(
//   'do you agree',
//   () => alert('aggred'),
//   () => alert('not')
// );

// addition of 2 number//

// let add1 = parseInt(prompt('enter 1st value', 0));
// let add2 = parseInt(prompt('enter 2nd value', 0));
// let sum = add1 + add2;
// console.log(`${add1} and ${add2} = ${sum}`);

//sqrt//

// const num = parseInt(prompt('enter num'));
// const sqrt = Math.sqrt(num);
// console.log(sqrt);

//object//

// let enterVal = prompt('enter number', '');
// const obj1 = new Object();
// const obj2 = {
//   name: 'karthy',
//   age: 20,
//   'last name': 'gopal',
//   [enterVal + 'fruit']: 5,
//   98: 6,
// };
// obj2.admin = true;
// obj2['property address'] = 'chennai';
// delete obj2.age;
// console.log(typeof obj1);
// console.log(obj2);

//funcion object//

// function obj3(name, age) {
//   return {
//     name,
//     age,
//   };
// }
// let obj3Val = obj3('santhiya', 25);
// console.log(obj3Val);
// console.log(typeof obj3Val, typeof obj3);

//for in//

// let nameVal = 'hello';
// let obj4 = {
//   nameVal,
//   10: 'ten',
// };
// console.log('nameVal' in obj4);
// for (let key in obj4) {
//   console.log('key:', obj4[key]);
// }
// console.log(obj4);
// console.log(obj4['10']);

//object add delete//

// let user = {};
// user.name = 'jhon';
// user.surName = 'smith';
// user.name = 'pete';
// delete user.name;
// console.log(user);

//for key//

// let schedule = {};
// function isEmpty(schedule) {
//   for (let key in schedule) {
//     return false;
//   }
//   return true;
// }
// console.log(isEmpty(schedule));
// schedule['8.30'] = 'get up';
// console.log(isEmpty(schedule));
// console.log(schedule);

// sum of object//

// let salary = {
//   john: 100,
//   annie: 160,
//   pete: 130,
// };
// let sum = 0;
// for (let salarySum in salary) {
//   sum += salary[salarySum];
// }
// console.log('Total salary:', sum);

//multiply object//

// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };
// multiplyNumeric(menu);
// function multiplyNumeric(menu) {
//   for (let key in menu) {
//     if (typeof menu[key] == 'number') {
//       menu[key] *= 2;
//     }
//   }
//   console.log(menu);
// }

//change object value//

// let user = {
//   name: 'john',
// };
// let admin = user;
// admin.name = 'peter';
// console.log(user.name);

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
