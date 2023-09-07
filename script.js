// Variables
let firstNum = '';
let nextNum = '';
let operator = '';
let displayValue = '';
let numberFlag = true;
let result = new operate;

const numberButtons = document.querySelectorAll(".numBtn");
const operatorButtons = document.querySelectorAll(".opBtn");
const clearButton = document.querySelector(".clear-button");
const deleteButton = document.querySelector(".delete-button");
const decimalButton = document.querySelector(".decimal-button");
const display = document.querySelector(".display")

numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.innerHTML);
        updateDisplay(btn);
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