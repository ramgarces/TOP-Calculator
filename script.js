// Variables
// let firstNum = "";
// let nextNum = "";
// let operator = "";
let displayValue = '';
let calcVariables = {};

const numberButtons = document.querySelectorAll(".numBtn");
const operatorButtons = document.querySelectorAll(".opBtn");
const equalsButton = document.querySelector(".equals-button");
const display = document.querySelector(".display")

numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(`Pressed ${btn.innerHTML}`)
        displayValue += btn.innerHTML;
        display.innerHTML += btn.innerHTML;
        console.log(`Display value: ${displayValue}`)
    })
})

operatorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(`Pressed ${btn.innerHTML}`)
        if (!isNaN(displayValue)) {
            calcVariables["firstNum"] = displayValue;
        }
        displayValue = btn.innerHTML;
        calcVariables["operator"] = displayValue;
        console.log(`Display value: ${displayValue}`)
        console.table(calcVariables)

    })
})

equalsButton.addEventListener('click', () => {
    console.log(`Pressed ${equalsButton.innerHTML}`)
    
    console.log(`Display value: ${displayValue}`)
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