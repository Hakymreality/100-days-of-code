function printNumber(from,to) {
    let count = from;

    setTimeout(function go() {
        console.log(count);

        if (count < to) {
            setTimeout(go,1000)
        }
        count++
    },1000)
}

console.log(printNumber(5,15))