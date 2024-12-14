const numButtons = document.querySelectorAll(".num-button")
const dotButton = document.querySelector(".dot-button")
const clearButton = document.querySelector(".clear-button")
const plusButton = document.querySelector(".plus")
const minusButton = document.querySelector(".minus")
const dividedButton = document.querySelector(".divided")
const timesButton = document.querySelector(".times")
const equalsButton = document.querySelector(".equals-button")
const operators = document.querySelectorAll(".operator")
const mainDisplay = document.querySelector(".main-display")
const subDisplay = document.querySelector(".sub-display")
const percentButton = document.querySelector(".percent")



const operatorsList = ["+", "-", "/", "*"]

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

// Calls operation function depending on operator 
function calculate(operator, a, b) {
    if (operator == plusButton.textContent) return sum(a, b)
    if (operator == minusButton.textContent) return subtract(a, b)
    if (operator == dividedButton.textContent) return divide(a, b)
    if (operator == timesButton.textContent) return multiply(a, b)
}



// Clears the display
clearButton.addEventListener("click", () => {
    mainDisplay.textContent = '';
    subDisplay.textContent = '';
    console.log("Cleared!")
})


// let operator = ""
// let prevNumber = 0
// let currentNum = 0




numButtons.forEach(button => {
    button.addEventListener("click", () => {

        //checks if operator exists in mainDisplay
        const mainDisplayContainsOperator = operatorsList.some((operator) => mainDisplay.textContent.includes(operator))

        if (!mainDisplayContainsOperator){
            
            mainDisplay.append(button.textContent); //appends number next to existing num in main

        } else { 
            
            subDisplay.append(" " + mainDisplay.textContent); //appends number to sub if operator was present

            mainDisplay.textContent = ''; //clears mainDisplay

            mainDisplay.append(button.textContent); //append pressed number
        
        }
    
    })})







operators.forEach(button => {
    button.addEventListener("click", () => {

        //checks if operator exists in mainDisplay
        const mainDisplayContainsOperator = operatorsList.some((operator) => mainDisplay.textContent.includes(operator))


        if (subDisplay.textContent.includes("=")){  //if previous calculation is shown clear subdisplay

            subDisplay.textContent = mainDisplay.textContent;

            mainDisplay.textContent = button.textContent;

        } else {
  
            if (!mainDisplayContainsOperator){
                
                if (!subDisplay.textContent) { // if subdisplay is empty dont append space

                subDisplay.append(mainDisplay.textContent); //appends existing maindisplay number to subdisplay
                
                mainDisplay.textContent = button.textContent; //replaces the swapped number with operator

                } else {

                    subDisplay.append(" " + mainDisplay.textContent); //appends existing maindisplay number to subdisplay
                
                    mainDisplay.textContent = button.textContent; //replaces the swapped number with operator

                }

            } else { 

                mainDisplay.textContent = button.textContent; //switches the maindisplay operator

            }
        }
        
    })
})


percentButton.addEventListener("click", () => {

    mainDisplay.textContent = Number(mainDisplay.textContent) / 100;

})

dotButton.addEventListener("click", () => {
    if (!mainDisplay.textContent.includes(".")) mainDisplay.append(".")
})

equalsButton.addEventListener("click", () => {

    subDisplay.append(" " + mainDisplay.textContent); //appends existing maindisplay number to subdisplay
    
    console.log("Subdisplay: ", typeof(subDisplay.textContent));

    const subArray = subDisplay.textContent.split(" ");

    let nums = subArray.filter((item) => /\d/.test(item));
    
    //make nums elements number
    for (let i = 0; i < nums.length; i++) {
        nums[i] = Number(nums[i]);
    }
    
    const operatorsInSubArray = subArray.filter((item) => /[+\-*/]/.test(item));

    console.log("Numbers are:", nums)
    console.log("Operators are:", operatorsInSubArray)
    
    subDisplay.append(" " + equalsButton.textContent); //appends equals sign for understandability only


    //for each operator runs calculate on first 2 elemetns of num and replaces them with result
    for (let i = 0; i < operatorsInSubArray.length; i++) {

        let result = calculate(operatorsInSubArray[i], nums[0], nums[1]);
        nums.splice(0, 2, result);

    }
    
    mainDisplay.textContent = nums

})

