const password = document.querySelector("#password");
const form = document.querySelector("form");
const form2 = document.querySelector("#form2");
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

form2.addEventListener("submit", function (e) {
    e.preventDefault();
    const val = form2.getElementsByTagName("input")[0].value;
    let volume = (4/3) * Math.PI * Math.pow(val, 3);
    alert(volume);
})
