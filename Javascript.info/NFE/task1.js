function makeCounter() {
  let count = 0;
  function counter() {
    return count++;
  }
  counter.set = (value) => (count = value);
  counter.decrease = () => count--;
  return counter;
}

let testFn = makeCounter();

console.log(testFn());
console.log(testFn());