//string//

//specific character//

// console.log('hello'.length);
// let a = 'hi people';
// console.log(a[1]);
// console.log(a.charAt(3));
// console.log(a[a.length - 1]);

// for (let d of a) {
//   console.log(d);
// }

// let s = 'javascript';
// s[2] = 'a';
// console.log(s[2]);
// s = 'live' + s[4];

// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s[0].toUpperCase());

//pascalcase//

// for (let caseVal of s) {
//   let caps;
//   if (caseVal == 'j') {
//     caps = caseVal.toUpperCase();
//     console.log(caps);
//   } else console.log(caseVal);
// }

//indexof//
// let a = 'asdfg';
// console.log(a.indexOf('s'));

// let b = 'lets complete javascript soon';
// console.log(b.indexOf('javascript', 15));

//search//

// let val = 'let as search as for as';
// let search = 'as';
// let pos = 0;
// while (true) {
//   let foundPos = val.indexOf(search, pos);
//   if (foundPos == -1) break;
//   console.log(foundPos);
//   pos = foundPos + 1;
// }
// if (pos == 0) console.log('no search found');

//bitwise or//

// console.log(~2);

//includes startswith endswith//

// let a = 'it is a test';
// console.log(a.includes('is', 4));
// console.log(a.startsWith('it'));
// console.log(a.endsWith('est'));

//slice substring substr//

// let demo = 'cutting value';
// console.log(demo.slice(2, 5));
// console.log(demo.substring(5, 2));
// console.log(demo.substr(2, 5));

//codepointat//

// console.log('Z'.codePointAt(0));

// let str = '';
// for (let i = 65; i < 123; i++) {
//   str += String.fromCodePoint(i);
// }
// console.log(str);

//compare string//
// console.log('hello'.localeCompare('Hello'));

// console.log('😀'.charCodeAt(0).toString());

//normalize//

// let a = '\u0041\u006d\u00e9\u006c\u0069\u0065';
// console.log(a);
// let aNfc = a.normalize('NFC');
// console.log(aNfc);

//pascalcase//

// function ucFirst(text) {
//   let pascalcase = text[0].toUpperCase() + text.slice(1);
//   return pascalcase;
// }
// console.log(ucFirst('demo'));

//checkspam//

// function checkSpam(text) {
//   let lowercase = text.toLowerCase();
//   return lowercase.includes('viagra') || lowercase.includes('xxx');
// }
// console.log(checkSpam('VIAgra'));
// console.log(checkSpam('xxxxx'));
// console.log(checkSpam('check'));

//truncate//

// function truncate(inputText, maxLength) {
//   return inputText.length > maxLength
//     ? `${inputText.substr(0, maxLength)}...`
//     : inputText;
// }
// console.log(truncate('hello how are you', 10));
// console.log(truncate('hello how are you', 5));

//extract currency value//

// function extractCurrencyValue(inputText) {
//   return parseInt(inputText.slice(1));
// }
// console.log(extractCurrencyValue('$100') == 100);
