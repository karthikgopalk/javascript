class Demo {
  constructor(name) {
    this.name = name;
  }
  printHello() {
    console.log(this.name);
  }
}
let demo = new Demo('karthi');
demo.printHello();
