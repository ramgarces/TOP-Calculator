// Variables
let firstNum = "";
let nextNum = "";
let operator = "";
let operatorFlag = false;
let displayValue = '';
let operatingDisplay = `${firstNum} ${operator} ${nextNum}`

const numberButtons = document.querySelectorAll(".numBtn");
const operatorButtons = document.querySelectorAll(".opBtn");
const display = document.querySelector(".display")
const calculationDisplay = document.querySelector(".operating-display")
calculationDisplay.innerHTML = operatingDisplay;

numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(`Pressed ${btn.innerHTML}`)
        displayValue += btn.innerHTML;
        display.innerHTML = displayValue;
        let displayArray = displayValue.split("");
        console.log(`Display value: ${displayValue}`)
        console.log(`Display array: ${displayArray}`)
    })
})

operatorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(`Pressed ${btn.innerHTML}`)

        console.log(`Display value: ${displayValue}`)
        console.log(`Display array: ${displayArray}`)
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

