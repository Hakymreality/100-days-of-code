function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

console.log(camelize("-webkit-transition"));

function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

let arr = [5, 3, 1, 7, 2, 4];
let filtered = filterRange(arr, 1, 4);

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

filterRangeInPlace(arr, 1, 4);
console.log(arr);


let arrSort = [5, 2, 1, -10, 8];
arrSort.sort((a,b) =>  b - a)
console.log(arrSort);


