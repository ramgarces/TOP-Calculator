// Variables
let firstNum = "";
let nextNum = "";
let operator = "";
let operatorFlag = false;
let displayValue = '';


const numberButtons = document.querySelectorAll(".numBtn");
const operatorButtons = document.querySelectorAll(".opBtn");
const equalsButton = document.querySelector(".equals-button");
const display = document.querySelector(".display")


numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(`Pressed ${btn.innerHTML}`)
        operatorFlag = false;
        if (firstNum && operator) {
            displayValue = "";
        }
        displayValue += btn.innerHTML;
        display.innerHTML = displayValue;
        console.log(`Display value: ${displayValue}`)
        console.log(`First number: ${firstNum}`)
        console.log(`Operator: ${operator}`)
    })
})

operatorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(`Pressed ${btn.innerHTML}`)
        operatorFlag = true;
        firstNum = displayValue;
        displayValue = "";
        displayValue += btn.innerHTML;
        operator = displayValue;
        display.innerHTML = "";
        console.log(`Display value: ${displayValue}`)
        console.log(`Op flag: ${operatorFlag}`)
        console.log(`First number: ${firstNum}`)
        console.log(`Operator: ${operator}`)
    })
})


equalsButton.addEventListener('click', () => {
    console.log(`Pressed ${equalsButton.innerHTML}`)
    nextNum = displayValue;
    console.log(`Display value: ${displayValue}`)
    console.log(`First number: ${firstNum}`)
    console.log(`Next number: ${nextNum}`)
    console.log(`Operator: ${operator}`)
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

