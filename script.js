// Get all buttons
const buttons = document.querySelectorAll('.buttons button');
let display = document.querySelector('.display');
let equation = '';
let result = 0;

// Loop through each button and attach onclick event listener
buttons.forEach(button => {
    button.addEventListener('click', function() {
        //Check if operator is selected
        if (this.classList.contains("btn-operator")) {
            let operator = this.textContent;

            //check if the operator is an arithmetic 
            if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
                equation += operator;
                display.textContent = '';
            }

            //if operator is equals
            else if (operator === '=') {

                //evaluate the function
                result = eval(equation);

                //add the result to the display box
                display.textContent = result;
            }

            //check if operator is C (Clear)
            else if (operator === 'C') {
                
                //erase the equation and clear display text
                equation = '';
                display.textContent = '';
            }
        }
        else {
            // Access specific properties of the clicked button
            const buttonText = this.textContent;

            //append numbers onto the equation
            equation += buttonText;

            //Display the current numerical value in the display
            display.textContent += buttonText;
        }
    });
});
