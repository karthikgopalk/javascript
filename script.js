//generator funnction//

function* generatorFun() {
  yield 1;
  yield 2;
  return 5;
}
let generator = generatorFun();
console.log(generator);
