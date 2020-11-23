function copySortedArr(arr) {
  return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySortedArr(arr);
console.log(sorted);
console.log(arr);

let plus = "+";
