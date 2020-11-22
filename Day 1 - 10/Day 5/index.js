let count = 0;
let countText = document.getElementById("counterText");

function addCount() {
  count++;
  countText.innerText = count;
}

function removeCount() {
    count ? count--: count = 0;
    countText.innerText = count
}

let addBtn = document.getElementById("addCountBtn");
let removeBtn = document.getElementById("removeCountBtn");

addBtn.addEventListener("click",addCount);
removeBtn.addEventListener("click",removeCount)