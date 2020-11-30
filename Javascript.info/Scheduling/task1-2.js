function printNumbers(from,to) {
  let  count = from;

  let timerId = setInterval(() => {
    console.log(count);

    if (count === to) {
      clearInterval(timerId);
    }
    count++
  }, 1000);
}

printNumbers(5,15)