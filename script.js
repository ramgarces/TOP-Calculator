// Variables
let firstNum = "";
let nextNum = "";
let operator = "";
let operatorFlag = false;
let displayValue = '';


const numberButtons = document.querySelectorAll(".numBtn");
const operatorButtons = document.querySelectorAll(".opBtn");
const display = document.querySelector(".display")


numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(`Pressed ${btn.innerHTML}`)
        displayValue += btn.innerHTML;
        display.innerHTML = displayValue;
        console.log(`Display value: ${displayValue}`)
        console.log(`Display array: ${displayValue.split("")}`)
    })
})

operatorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(`Pressed ${btn.innerHTML}`)
        operatorFlag = true;
        firstNum = displayValue;
        displayValue = "";
        displayValue += btn.innerHTML;
        display.innerHTML = "";
        console.log(`Display value: ${displayValue}`)
        console.log(`Op flag: ${operatorFlag}`)
        console.log(`First number: ${firstNum}`)
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

