function spy(func) {
  function wrapper(...args) {
    console.log(args)
    wrapper.calls.push(args);
    return func.apply(this,arguments);
  }
  wrapper.calls = [];
  return wrapper;
}

function work(a, b) {
  console.log(a + b);
}
work = spy(work);
work(1, 2); // 3
work(4, 5); // 9
for (let args of work.calls) {
  console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}
