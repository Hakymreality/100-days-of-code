function unique(arr) {
  let uniqueArr = [];
  for (let index of arr) {
      if (!uniqueArr.includes(index)) {
            uniqueArr.push(index);
      }
  }
  return uniqueArr;
}
let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
console.log(unique(strings));
