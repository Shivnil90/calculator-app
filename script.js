const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const result = document.getElementById("result");

const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.getElementById("equals");
const resetButton = document.getElementById("reset");

let operator = "";


// Select operator
operatorButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        operator = button.dataset.operation;

        operatorButtons.forEach(function(btn) {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");
    });
});


// Calculate
equalsButton.addEventListener("click", function() {

    const a = Number(number1.value);
    const b = Number(number2.value);

    if (number1.value === "" || number2.value === "") {
        result.textContent = "Enter two numbers";
        return;
    }

    if (operator === "") {
        result.textContent = "Choose operator";
        return;
    }

    let answer;

    if (operator === "+") {
        answer = a + b;
    }
    else if (operator === "-") {
        answer = a - b;
    }
    else if (operator === "*") {
        answer = a * b;
    }
    else if (operator === "/") {

        if (b === 0) {
            result.textContent = "Cannot divide by zero";
            return;
        }

        answer = a / b;
    }

    result.textContent = answer;
});


// Reset
resetButton.addEventListener("click", function() {

    number1.value = "";
    number2.value = "";

    operator = "";

    result.textContent = "0";

    operatorButtons.forEach(function(button) {
        button.classList.remove("selected");
    });
});