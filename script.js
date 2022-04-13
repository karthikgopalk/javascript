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

const date = new Date();
const dayNumber = date.getDay();
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
console.log('Today is:', days[dayNumber]);
let hours = date.getHours();
let amPm;
hours < 12 ? (amPm = 'AM') : (amPm = 'PM') ? (hours -= 12) : hours;
console.log(
  `Current time is: ${hours} ${amPm} : ${date.getMinutes()} : ${date.getSeconds()}`
);
