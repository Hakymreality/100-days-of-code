let leftControl = document.getElementById("left-control");
let rightControl = document.getElementById("right-control");
let image = document.getElementById("imageElem");

let imageArray = [
  "./Images/code-snippets.svg",
  "./Images/note-list.png",
  "./Images/online-page.svg",
  "./Images/team-preparation.png",
  "./Images/profile.png",
];

let count = 0;

function checkCount() {
        if (count === 5) {
          count = 0;
        }else if (count === -1) {
            count = 0
        }
        return count;
}
function nextImage() {
    count++;
    checkCount();
    image.src = imageArray[count]
}

function previousImage() {
    count--;
    checkCount();
    image.src = imageArray[count]
}

leftControl.addEventListener("click",previousImage);
rightControl.addEventListener("click",nextImage)