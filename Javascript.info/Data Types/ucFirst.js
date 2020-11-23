function ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);

}

console.log(ucFirst("olamide"))

function checkSpam(str) {
    str.toLowerCase()
    if (str.includes("Viagra") || "xxx") {
        return true;
    }
    return false;
}

console.log(checkSpam("free xxxxx"));


function truncate(str,maxLength) {
    if(str.length > maxLength){
       return str.slice(0,maxLength - 1) + "..."
    }

    return str
}

console.log(truncate("Hi everyone!", 20));


function extractCurrencyValue(str) {
    let newStr = str.slice(1,);
    Number(newStr);
    return newStr;
}

console.log(extractCurrencyValue('$120'))