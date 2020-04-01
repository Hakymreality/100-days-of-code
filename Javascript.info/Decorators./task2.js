function delay(func,ms) {
  function wrapper(...args) {
    let test = func.apply(this,arguments);
    return test
  };

  return wrapper;
}
function work(a, b) {
  console.log(a + b);
}
work = delay(work);
work(1, 2); // 3
work(4, 5); // 9
console.log(work(5,8));
