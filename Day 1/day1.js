let button = document.getElementById("changeBtn");
let container = document.getElementById("container")
let colorArray = ["cadetblue","chatreuse","cornflowerblue", "chocolate","coral","cornsilk","crimson","cyan","tomato","violet","wheat","yellow"];
function changeColorFn() {
    let backgoundColor = container.style.backgroundColor
    let newColor = Math.round(Math.random() * 11)
    if (colorArray[newColor] != backgoundColor) {
        container.style.backgroundColor = colorArray[newColor];
    }
}
button.addEventListener("click",changeColorFn)