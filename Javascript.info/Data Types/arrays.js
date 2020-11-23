let styles = ["jazz", "blues"];
styles.push("rock-n-roll");
function midIndex(arr) {
    return (arr.length + 1) / 2 - 1;
}

let midValue = midIndex(styles);
styles[midValue] = "classics"
let firstValue = styles.shift();
console.log(styles);
styles.shift;
styles.unshift("rap","reggae");
console.log(styles)