let messageForm = document.getElementsByName("messageForm");
let textValue = document.getElementById("textValue");
let submitBtn = document.getElementById("submitBtn");
let result = document.getElementById("result");

function getTextValue() {
    return textValue.value;
}

function setResultValue() {
    result.innerText = `Your Message is ${getTextValue()}`;
}

function clearResultValue() {
    result.innerText = ""
}

function setAndClearOutput(){
    setResultValue()
    setTimeout(clearResultValue, 5000);
}

submitBtn.addEventListener("click",setAndClearOutput)
