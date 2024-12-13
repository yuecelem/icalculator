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

const numButtons = document.querySelectorAll(".num-button")
const dotButton = document.querySelector(".dot-button")
const display = document.querySelector(".display")
const clearButton = document.querySelector(".clear-button")

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

