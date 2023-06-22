let random
let output = document.getElementById("gameResult")
random = Math.ceil(Math.random() * 100);
console.log(random);
let Inputvalue = document.getElementById("userInput");

function checkGuess() {
    let Gvalue = parseInt(Inputvalue.value);
    if (Gvalue > random) {
        output.textContent = "Too high ! try again";
        output.style.backgroundColor = "red";
    } else if (Gvalue < random) {
        output.textContent = "Too low ! try again";
        output.style.backgroundColor = "red";
    } else if (Gvalue === random) {
        output.textContent = "Congatulations";
        output.style.backgroundColor = "green";
    } else {
        output.textContent = "enter valid type";
    }
}