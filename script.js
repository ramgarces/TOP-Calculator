// Variables
let firstNum = '';
let nextNum = '';
let operator = '';
let displayValue = '';
let numberFlag = true;
let result = new operate;

const numberButtons = document.querySelectorAll(".numBtn");
const operatorButtons = document.querySelectorAll(".opBtn");
const equalsButton = document.querySelector(".equals-button");
const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display")

numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.innerHTML);
        updateDisplay(btn);
        console.log(`Display Value: ${displayValue}`);
        console.log(`First Number: ${firstNum}`)
        console.log(`Next Number: ${nextNum}`)
        console.log(`Operator: ${operator}`)
    })
})

operatorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        operator = btn.innerHTML;
        console.log(`Display Value: ${displayValue}`);
        console.log(`First Number: ${firstNum}`)
        console.log(`Next Number: ${nextNum}`)
        console.log(`Operator: ${operator}`)
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