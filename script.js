const body = document.getElementsByTagName("body");
const keyValueBig = document.getElementById("keyValueBig");
const keyPressed = document.getElementById("keyPressed");
const keyValue = document.getElementById("keyValue");
const keyCode = document.getElementById("keyCode");

window.addEventListener("keypress", (k) => {
    keyValueBig.style.fontSize = "6.8vw"
    keyValueBig.style.marginBottom = "0"
    keyValueBig.textContent = k.which;
    keyPressed.textContent = k.key;
    keyValue.textContent = k.which;
    keyCode.textContent = k.code;
});