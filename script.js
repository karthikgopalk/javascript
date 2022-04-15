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
