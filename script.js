// Get all buttons
const buttons = document.querySelectorAll('.buttons button');
let display = document.querySelector('.main');
let secondary = document.querySelector('.secondary');
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
                secondary.textContent = equation;
            }

            //if operator is equals
            else if (operator === '=') {

                //evaluate the function
                result = eval(equation);

                //Check if number is a whole number, if so display number
                if (result % 1 == 0) {
                    display.textContent = result
                }
                //if number is not whole, display number and round to nearest hundreth
                else {
                    display.textContent = result.toFixed(2);
                }                
            }

            //check if operator is C (Clear)
            else if (operator === 'C') {
                
                //erase the equation and clear display text
                equation = '';
                display.textContent = '';
                
                secondary.textContent = '';
            }
        }
        else {
            // Access specific properties of the clicked button
            const buttonText = this.textContent;

            //append numbers onto the equation
            equation += buttonText;

            //Display the current numerical value in the display
            display.textContent += buttonText;

            secondary.textContent = equation;
        }
    });
});
