// Get all buttons
const buttons = document.querySelectorAll('.buttons button');
let display = document.querySelector('.main');
let secondary = document.querySelector('.secondary');
let equation = '';
let result = 0;
const operatorsArray = ['+', '-', '*', '/', '=', 'Enter', 'C']

// Loop through each button and attach onclick event listener
buttons.forEach(button => {
    button.addEventListener('click', function() {
        //Check if operator is selected
        if (this.classList.contains("btn-operator")) {
            // Store text of button clicked in variable that will be passed into performOperations
            let operator = this.textContent;
            performOperations(operator);
        }
        else {
            // Access specific properties of the clicked button and pass into performNumber function
            const buttonText = this.textContent;
            performNumber(buttonText);
        }
    });
});

document.body.addEventListener("keydown", (ev) => {
    console.log(ev.key);
    // Check if a number is pressed
    if (!isNaN(parseInt(ev.key))) {
        performNumber(ev.key);
    }

    // Check if a operator is pressed and verify it exists in the operatorsArray
    else if (operatorsArray.includes(ev.key)){
        performOperations(ev.key);
    }
})

function performOperations(operator) {
    //check if the operator is an arithmetic 
    if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        equation += operator;
        display.textContent = '';
        secondary.textContent = equation;
    }

    //if operator is equals
    else if (operator === '=' || operator === 'Enter') {
        //evaluate the function
        result = eval(equation);

        //Check if number is a whole number, if so display number
        if (result % 1 == 0) {
            display.textContent = result
            equation = result
        }
        //Check if user is trying to divide by 0
        else if (result === Infinity) {
            display.textContent = "Unable to divide";
        }
        //if number is not whole, display number and round to nearest hundreth
        else {
            display.textContent = result.toFixed(2);
            equation = result.toFixed(2);
        }                
    }

    //check if operator is C (Clear)
    else if (operator === 'C' || operator === 'c') {
        
        //erase the equation and clear display text
        equation = '';
        display.textContent = '';
        secondary.textContent = '';
    }
}

function performNumber(number) {
    console.log(number);

    //append numbers onto the equation
    equation += number;

    //Display the current numerical value in the display
    display.textContent += number;

    //Display equation in seconday display
    secondary.textContent = equation;
}