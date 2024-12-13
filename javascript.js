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
    return a + b;
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
let operator = ""
let prevNumber = 0
let currentNum = 0

console.log(divide(20, 4))

// Adds numButton content to display on each click. 
// If 0 is displayed, removes and then adds
// Saves operator if it was displayed 

numButtons.forEach(button => {
    button.addEventListener("click", () => {

        const containsOperator = Array.from(operators).some(op => display.textContent.includes(op.textContent))

        if (containsOperator) {
            operator = display.textContent;
            display.textContent = ""
            display.append(button.textContent) 
            console.log("Operator Saved:", operator)
            return operator
        }
        else if (display.textContent == "0"){
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
    prevNumber = 0;
    console.log("cleared memory, prevNumber:", prevNumber)
})




// Calls operation function depending on operator 
function calculate(operator, a, b) {
    if (operator == plusButton.textContent) return sum(a, b)
    if (operator == minusButton.textContent) return subtract(a, b)
    if (operator == dividedButton.textContent) return divide(a, b)
    if (operator == timesButton.textContent) return multiply(a, b)
}

// checks if operator texts are included in the previous display
// if so replaces with new without saving
// if not saves the previous display num as prevNumber
// In case there was a previous answer, saves it to prevNumber

operators.forEach(button => {
    button.addEventListener("click", () => {

        const containsOperator = Array.from(operators).some(op => display.textContent.includes(op.textContent))

        if (prevNumber == 0){

            prevNumber = display.textContent;

            display.textContent = button.textContent;

            operator = button.textContent

        } else {
            
            console.log("line 109")
            console.log("prevnum 111", prevNumber)
            console.log("currentNum 111", currentNum)

            currentNum = display.textContent;

            currentNum = Number(currentNum)
            prevNumber = Number(prevNumber)

            prevNumber = calculate(operator, prevNumber, currentNum)     
            
            console.log(prevNumber, "prevNum at 113")
            display.textContent = button.textContent;
        
        }

        
    })
})



// calls calculate when pressed equals
// turns to num

equalsButton.addEventListener("click", () => {
    currentNum = display.textContent;

    display.textContent = "";

    prevNumber = Number(prevNumber)
    currentNum = Number(currentNum)

    console.log("equal button operator :", operator, typeof(operator))
    console.log("equal button prevNum :", prevNumber, typeof(prevNumber))
    console.log("equal button currentnum :", currentNum, typeof(currentNum))

    display.textContent = calculate(operator, prevNumber, currentNum)

})

