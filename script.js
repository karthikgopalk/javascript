// let range = {
//   from: 10,
//   to: 20,
// };
// range[Symbol.iterator] = function () {
//   return {
//     current: this.from,
//     last: this.to,
//     next() {
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else return { done: true };
//     },
//   };
// };
// for (let key of range) {
//   console.log(key);
// }

let range = {
  from: 5,
  to: 10,
};
range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else return { done: true };
    },
  };
};
for (let rangeValue of range) {
  console.log(rangeValue);
}
