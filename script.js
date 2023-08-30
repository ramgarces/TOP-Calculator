// Variables
let firstNum;
let nextNum;
let operator;
let displayValue = '';

const buttons = document.querySelectorAll(".numBtn");

buttons.forEach(btn => {
    btn.addEventListener('click', event => {
        console.log(btn.innerHTML)
        displayValue += btn.innerHTML;
        console.log(`Display value: ${displayValue}`)
    })
})

// Functions
function add(first, next) {
    return first + next;
}

function subtract(first, next) {
    return first - next;
}

function multiply(first, next) {
    return first * next;
}

function divide(first, next) {
    return first / next;
}

function operate(firstNumber, operator, secondNumber) {
    if (operator == "+") {
        return add(firstNumber, secondNumber);
    } else if (operator == "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operator == "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operator == "/") {
        return divide(firstNumber, secondNumber);
    }
}

