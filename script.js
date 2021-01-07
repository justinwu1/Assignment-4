const password = document.querySelector("#password");
const form = document.querySelector("form");
const form2 = document.querySelector("#form2");
const buttons = document.querySelectorAll("button");
const button1 = buttons[0];
const button2 = buttons[1];
const large = document.querySelector("#large");
// Question#1
const h5 = document.querySelector("h5");
button1.addEventListener("click", function () {
    h5.innerText = "I'm right";
})
button2.addEventListener("click", function () {
    h5.innerText = "No,I'm right!!!";
})

large.addEventListener("mouseover", function () {
    alert("DON'T HOVER OVER ME!");
})
console.log(large)
// Question#5
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const val = password.value;
    if (val != 12345678) {
        alert("Not the right passwrod");
    } else {
        const h1 = document.querySelector("h1");
        h1.innerText = "You've logged in";
    }
})
// Quesiont#6
form2.addEventListener("submit", function (e) {
    e.preventDefault();
    const val = form2.getElementsByTagName("input")[0].value;
    let volume = (4 / 3) * Math.PI * Math.pow(val, 3);
    alert(volume);
})
