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

function square(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      result += n;
    }
  }
  return result;
}
console.log(square(555));
