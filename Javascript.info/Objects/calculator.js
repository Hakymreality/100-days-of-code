let calculator = {
  read() {
    this.a = +prompt("First Value", 1);
    this.b = +prompt("Second Value", 2);
  },
  sum() {
    return this.a + this.b;
  },
  multiply() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.multiply());
