function sumSalaries(obj) {
  let sumOfSalaries = 0;
  for (const key in obj) {
    sumOfSalaries += obj[key];
  }
  return sumOfSalaries;
}


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

console.log(sumSalaries(salaries));