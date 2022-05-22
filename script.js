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
