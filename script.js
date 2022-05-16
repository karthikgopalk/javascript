//callback//

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

setTimeout(function () {
  console.log('setTimeout');
}, 5000);
function x(y) {
  console.log('x');
  y();
}
x(function () {
  console.log('y');
});
