function inBetween(a,b) {
    return function (x) {
        return x >= a && x <= b
    }
}
let num = [1,2,3,4,5];

console.log(num.filter(inBetween(2,5)))
console.log(num.filter(inArray([2, 5])));

function inArray(arr) {
    return function (x) {
        return arr.includes(x)
    }
}