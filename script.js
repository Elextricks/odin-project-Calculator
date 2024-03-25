// Get all buttons
const buttons = document.querySelectorAll('.buttons button');
let display = document.querySelector('.display')

// Loop through each button and attach onclick event listener
buttons.forEach(button => {
    button.addEventListener('click', function() {
        //Check if operator is selected
        if (this.classList.contains("btn-operator")) {
            let operator = this.textContent;
            console.log(operator);

            if (operator === '+') {
                console.log("Sum");
            }

            else if (operator === '-') {
                console.log('Difference');
            }
            else if (operator === 'x') {
                console.log('Multiply');
            }
            else if (operator === '/'){
                console.log('Dvision');
            }
            else if (operator === '=') {
                console.log('Equals');
            }
            else if (operator === 'C') {
                console.log('Clear');
            }
            

        }
        else {
            // Access specific properties of the clicked button
            const buttonText = this.textContent;
            
            //Store values selected
            display.textContent += buttonText;
        }
    });
});
