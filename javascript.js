const numButtons = document.querySelectorAll(".num-button")
const dotButton = document.querySelector(".dot-button")
const display = document.querySelector(".display")
const clearButton = document.querySelector(".clear-button")
const plusButton = document.querySelector(".plus")
const minusButton = document.querySelector(".minus")
const dividedButton = document.querySelector(".divided")
const timesButton = document.querySelector(".times")
const equalsButton = document.querySelector(".equals-button")
const operators = document.querySelectorAll(".operator")


function sum(a, b) {
    return a + b
}

function multiply(a, b) {
    return a * b
}

function subtract(a, b) {
    return a - b
}

function divide(a, b) {
    return a / b
}

function percent(a) {
    return a / 100
}

display.textContent = 0

// Adds numButton content to display on each click. 
// If 0 is displayed, removes and then adds
numButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (display.textContent == "0"){
            display.textContent = ""
            display.append(button.textContent)     
        } else {display.append(button.textContent)}})})

// Adds . if it doesnt exist in the display
dotButton.addEventListener("click", () => {
    if (!display.textContent.includes(dotButton.textContent)){
    display.append(dotButton.textContent)}
})


// Clears the display
clearButton.addEventListener("click", () => {
    display.textContent = 0
})

// Calls operation function depending on operator 
function calculate(operator, a, b) {
    if (operator == plusButton.textContent) return sum(a, b)
    if (operator == minusButton.textContent) return subtract(a, b)
    if (operator == dividedButton.textContent) return divide(a, b)
    if (operator == timesButton.textContent) return multiply(a, b)
}

operators.forEach(button => {
    button.addEventListener("click", () => {
        const containsOperator = Array.from(operators).some(op => display.textContent.includes(op.textContent))

        if(!containsOperator) {
            let prevNumber = display.textContent;
            display.textContent = button.textContent;
            console.log(prevNumber)
        } else {
            display.textContent = button.textContent;
        }
    })
})




// equalsButton.addEventListener("click", calculate())

