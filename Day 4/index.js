let messageForm = document.getElementsByName("messageForm");
let textValue = document.getElementById("textValue");
let submitBtn = document.getElementById("submitBtn");
let result = document.getElementById("result");

function getTextValue() {
    return textValue.value;
}

function setResultValue() {
    result.innerText = getTextValue();
}

function clearResultValue() {
    result.innerText = ""
}
submitBtn.addEventListener("click",setResultValue)
setTimeout(clearResultValue, 2000);