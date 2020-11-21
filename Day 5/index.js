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