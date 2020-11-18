let container = document.getElementById("container");
let result = document.getElementById("result");
let changeBtn = document.getElementById("changeBtn")
let hexArray = [
    "#d8bfd8",
    "#ff6347",
    "#40e0d0",
    "#ee82ee",
    "#f5deb3",
    "#ffff00",
    "#9acd32",
    "#f0ffff",
    "#faebd7",
    "#00ffff",
    "#7fffd4"
]

let changeColorFn = () => {
    let backgroundColor = container.style.backgroundColor
    let index = Math.round(Math.random() * hexArray.length)
    if (hexArray[index] != backgroundColor) {
        container.style.backgroundColor = hexArray[index];
        result.innerText = `Color changed to ${hexArray[index]}`;
    }
}

changeBtn.addEventListener("click", changeColorFn)