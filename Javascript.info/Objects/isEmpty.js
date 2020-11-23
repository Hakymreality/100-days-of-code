function isEmpty(obj) {
  for (const key in obj) {
      return false;
  }
  return true;
}

let schedule = {};

console.log(isEmpty(schedule));