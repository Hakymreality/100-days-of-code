  let shooters = [];
function makeArmy() {
  let i = 0;
  while (i < 10) {
    shooters.push(i);
    i++;
  }
  return shooters;
}
let army = makeArmy();
console.log(army[5]);