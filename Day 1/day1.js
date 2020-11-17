let button = document.getElementById("changeBtn");
let container = document.getElementById("container")
let colorArray = ["cadetblue","chatreuse","cornflowerblue", "chocolate","coral","cornsilk","crimson","cyan"];
function changeColorFn(e) {
    let backgoundColor = container.style.backgroundColor
    let newColor = Math.round(Math.random() * 7)
    if (colorArray[newColor] != backgoundColor) {
        container.style.backgroundColor = colorArray[newColor];
    }
}
button.addEventListener("click",changeColorFn)