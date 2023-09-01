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