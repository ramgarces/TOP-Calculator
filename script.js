// Variables
let firstNum = '';
let nextNum = '';
let operator = '';
let displayValue = '';
let numberFlag = true;
let result = new operate;

const numberButtons = document.querySelectorAll(".numBtn");
const operatorButtons = document.querySelectorAll(".opBtn");
const divideButton = document.querySelector(".divide-button");
const multiplyButton = document.querySelector(".multiply-button");
const subtractButton = document.querySelector(".subtract-button");
const addButton = document.querySelector(".add-button");
const clearButton = document.querySelector(".clear-button");
const deleteButton = document.querySelector(".delete-button");
const decimalButton = document.querySelector(".decimal-button");
const display = document.querySelector(".display")

numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        updateDisplay(btn);
        clearActiveOperatorColor();
    })
})

operatorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (operator && !firstNum) {
            operator = '';
            numberFlag = true;
        }
        if (numberFlag) {
            firstNum = displayValue;
            numberFlag = false;
            displayValue = '';
        }
        nextNum = displayValue;
        if (operator == '/' && nextNum == 0) {
            display.innerHTML = "Silly g0000se.";
            setTimeout(function() {
                display.innerHTML = "Start again.";
                setTimeout(function() {
                    clearAll();
                },800);
            },800);
        } else if (firstNum && nextNum && operator) {
            let solution = result.calculate(+firstNum, operator, +nextNum);
            displayValue = solution;
            if (!Number.isInteger(solution)) {
                display.innerHTML = solution.toFixed(2);
            } else {
                display.innerHTML = solution;
            }
            firstNum = solution;
            operator = '';
        }
        operator = btn.innerHTML;
        displayValue = '';
        activeOperator();
    })
})

decimalButton.addEventListener('click', () => {
    if (!displayValue.includes(".")) {
        displayValue += decimalButton.innerHTML;
        display.innerHTML += decimalButton.innerHTML;
    }
})

clearButton.addEventListener('click', () => {
    clearAll();
})

deleteButton.addEventListener('click', () => {
    let displayArray = displayValue.split('');
    displayArray.pop();
    displayValue = displayArray.join('');
    display.innerHTML = displayValue;
})

// Functions
function operate() {
    this.methods = {
        "+": (firstNum, nextNum) => firstNum + nextNum,
        "-": (firstNum, nextNum) => firstNum - nextNum,
        "*": (firstNum, nextNum) => firstNum * nextNum,
        "/": (firstNum, nextNum) => firstNum / nextNum,
    }

    this.calculate = function(firstNum, operator, nextNum) {
        return this.methods[operator](firstNum, nextNum);
    }
}

function updateDisplay(x) {
    displayValue += x.innerHTML;
    display.innerHTML = displayValue;
}

function clearAll() {
    firstNum = '';
    nextNum = '';
    operator = '';
    displayValue = '';
    numberFlag = true;
    display.innerHTML = '';
}

function activeOperator() {
    if (operator == '/') {
        divideButton.style.backgroundColor = "#c4c4c4";
        multiplyButton.style.backgroundColor = "#8062D6";
        subtractButton.style.backgroundColor = "#8062D6";
        addButton.style.backgroundColor = "#8062D6";
    } else if (operator == '*') {
        divideButton.style.backgroundColor = "#8062D6";
        multiplyButton.style.backgroundColor = "#c4c4c4";
        subtractButton.style.backgroundColor = "#8062D6";
        addButton.style.backgroundColor = "#8062D6";
    } else if (operator == '-') {
        divideButton.style.backgroundColor = "#8062D6";
        multiplyButton.style.backgroundColor = "#8062D6";
        subtractButton.style.backgroundColor = "#c4c4c4";
        addButton.style.backgroundColor = "#8062D6";
    } else if (operator == '+') {
        divideButton.style.backgroundColor = "#8062D6";
        multiplyButton.style.backgroundColor = "#8062D6";
        subtractButton.style.backgroundColor = "#8062D6";
        addButton.style.backgroundColor = "#c4c4c4";
    }
}

function clearActiveOperatorColor() {
    divideButton.style.backgroundColor = "#8062D6";
    multiplyButton.style.backgroundColor = "#8062D6";
    subtractButton.style.backgroundColor = "#8062D6";
    addButton.style.backgroundColor = "#8062D6";
}