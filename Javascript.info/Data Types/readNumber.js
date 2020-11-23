function readNumber() {
  let number = +prompt("Enter a Number", 5);
  if (typeof number !== "number" ){
      readNumber()
  } 
  alert(number);
}
readNumber()