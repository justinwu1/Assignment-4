// Buttons for question 1
const buttonOne = buttons [0];
const buttonTwo = buttons [1];
const button = document.querySelector(".button");
buttonOne.addEventListener("click", function() {
    button.innerText = "I'm right!";
})
buttonTwo.addEventListener("click", function() {
    button.innerText = "No, I'm right!"
})

// Question 2 - hover
const hover = document.querySelector("#hover");
hover.addEventListener("mouseover", function() {
    alert("Hey, I told you not to hover over me!");
})
console.log(hover)


