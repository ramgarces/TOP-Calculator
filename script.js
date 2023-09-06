// Variables
let firstNum = '';
let nextNum = '';
let operator = '';
let displayValue = '';

const numberButtons = document.querySelectorAll(".numBtn");
const operatorButtons = document.querySelectorAll(".opBtn");
const equalsButton = document.querySelector(".equals-button");
const display = document.querySelector(".display")

numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(`Pressed ${btn.innerHTML}`)
        
        console.log(`Display value: ${displayValue}`)
        console.log(`First number: ${firstNum}`)
        console.log(`Operator: ${operator}`)
        console.log(`Array: ${valueArray}`)
    })
})

operatorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(`Pressed ${btn.innerHTML}`)
        
        console.log(`Display value: ${displayValue}`)
        console.log(`First number: ${firstNum}`)
        console.log(`Operator: ${operator}`)
        console.log(`Array: ${valueArray}`)
    })
})

equalsButton.addEventListener('click', () => {
    console.log(`Pressed ${equalsButton.innerHTML}`)
    
    console.log(`Display value: ${displayValue}`)
    console.log(`First number: ${firstNum}`)
    console.log(`Next number: ${nextNum}`)
    console.log(`Operator: ${operator}`)
    console.log(`Array: ${valueArray}`)
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