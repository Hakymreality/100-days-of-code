function byField(prop) {
        return (a,b)=>a[prop] > b[prop] ? 1 : -1;

}

let users = [
  { name: "Ann", age: 19, surname: "Hathaway" },
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Sue", age: 27, surname: "Olive" },
  { name: "Pete", age: 18, surname: "Peterson" },
];

console.log(users.sort(byField("age")))