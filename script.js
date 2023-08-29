// Variables
let firstNum;
let nextNum;
let operator;

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