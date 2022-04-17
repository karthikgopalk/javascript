// let admin;
// const NAME = 'jhon';
// admin = NAME;
// alert(admin);

// let ourPlanetName = 'Earth'
// let currentUserName

// alert(1 / 0);

// const infinity = Infinity;
// console.log(typeof infinity);

// let world = 'world';
// let demo = `hello ${world}`;
// console.log(demo);

// function demo() {
//   'hello';
// }
// console.log(typeof demo);

// let arr = [1, 2, 3];
// console.log(typeof arr);

// alert(`hi ${1}`);
// alert(`hi ${'hi'}`);

// let promtTest = prompt('enter the text');
// console.log(promtTest);
// let trythis = confirm('hi');
// console.log(trythis);

// let age = prompt('your age');
// console.log(`your age is ${2022 - age}`);

// let val = NaN;
// alert(Boolean(val));

// function arg(a, b, c) {
//   console.log(arguments[0]);
//   console.log(arguments[1]);
//   console.log(arguments[2]);
//   console.log(arguments[3]);
// }
// arg(55, 66, 77);

// console.log(5 % 3);
// console.log(3 ** 3);

// console.log(3 * '3');

// let a = true;
// console.log(-a);

// let a, b;
// a = b = 2;
// console.log(a, b);

// let n = 5;
// n += 6;
// console.log(n);

// let a = 5;
// alert(a++);

// let a = 5;
// console.log(--a);
// console.log(a);

// let a = (1 + 2, 5 + 3);
// console.log(a);

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

// function printHandler() {
//   window.print();
// }

// const date = new Date();
// let currentDay = date.getDate();
// let currentMonth = date.getMonth();
// currentDay <= 9 ? (currentDay = '0' + currentDay) : currentDay;
// currentMonth <= 9 ? (currentMonth = '0' + currentMonth) : currentMonth;
// console.log(`${currentDay}-${currentMonth}-${date.getFullYear()}`);

// let s1 = 5,
//   s2 = 6,
//   s3 = 7;
// let s = (s1 + s2 + s3) / 2;
// let area = Math.sqrt(s * (s - s1) * (s - s2) * (s - s3));
// console.log(area);

// if (0) {
//   console.log('0');
// }

// const value = +prompt('enter the value');
// let result;
// if (value > 0) result = 'greater than 0';
// else if (value < 0) result = 'lesser than 0';
// else result = 'equals to ero';
// console.log(result);

// let a = 10;
// if (a == 11 || a == 12 || a == 5) {
//   console.log('or');
// }

// const checkAdmin = prompt('Enter the user');
// if (checkAdmin == 'Admin') {
//   const enterPassword = prompt('Enter the password');
//   if (enterPassword == 'TheMaster') console.log('Welcome');
//   else if (enterPassword == '' || null || undefined) console.log('cancelled');
//   else console.log('wrong password');
// } else if (checkAdmin == '' || null || undefined) console.log('cancelled');
// else console.log("I don' know you");

// let a,
//   b = 5;
// console.log(a != undefined && a != null ? a : b);
// console.log(a ?? b);

// let bio = {
//   name: 'karthy',
//   bio: null,
// };
// console.log(bio?.age);

// let i = 5;
// while (i) {
//   console.log(i--);
// }

// let j = 0;
// while (j < 5) console.log('while', j++);

// let i = 0;
// do {
//   console.log('do', i++);
// } while (i < 5);

// for (let k = 0; k < 5; k++) {
//   console.log('for', k);
// }

// let i = 0;
// for (; i < 5; ) {
//   console.log(i++);
// }

// let sum = 0;
// for (let i = 0; i < 10; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// let txt = 'I can eat bananas all day';
// let x = txt.slice(10, 17);
// console.log(x);

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// for (let i = 0; i < 3; i++) {
//   console.log(`${i}`);
// }
// let j = 0;
// while (j < 3) console.log('while', j++);

// let n = 10;
// primeNumber: for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue primeNumber;
//   }
//   console.log(i);
// }

// let num;
// do {
//   num = +prompt('enter number greater than 100', 0);
// } while (num <= 100 && num);

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

// function demo(p1, p2 = 'world') {
//   return console.log(p1, p2);
// }
// demo('hi', 'people');

// function checkAgeHandler() {
//   let age = +prompt('enter the age', 0);
//   if (age < 18) console.log('minor');
//   else if (age > 18) console.log('Major');
//   return;
// }
// checkAgeHandler();

// function showCode() {
//   10;
// }
// console.log(showCode);

function ask(question,yes,no){
if(confirm(question))
}
function yes(){
  console.log('user pressed yes')
}
function no(){
  console.log('user pressed no')
}
ask('are you sure to press',yes(),no())