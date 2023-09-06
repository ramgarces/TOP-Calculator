// Variables
let firstNum = '';
let nextNum = '';
let operator = '';
let displayValue = '';
let result = new operate;

const numberButtons = document.querySelectorAll(".numBtn");
const operatorButtons = document.querySelectorAll(".opBtn");
const equalsButton = document.querySelector(".equals-button");
const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display")

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.innerHTML);
        updateDisplay(btn);
        console.log(displayValue);
        console.log(splitValue);
    })
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