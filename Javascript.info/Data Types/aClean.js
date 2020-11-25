function aclean(arr) {
    let newMap = new Map()
  for (const i of arr) {
    let sorted = i.toLowerCase()
                    .split("")
                    .sort()
                    .join("");
    newMap.set(i,sorted);
  }
  return Array.from(newMap)
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));