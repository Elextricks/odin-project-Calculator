// Get all buttons
const buttons = document.querySelectorAll('.buttons button');
let display = document.querySelector('.display')

// Loop through each button and attach onclick event listener
buttons.forEach(button => {
    button.addEventListener('click', function() {
        //Check if operator is selected
        if (this.classList.contains("btn-operator")) {
            console.log("operator selected");
            let operator = this.textContent;

            if (operator === '+') {
                console.log("Sum");
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
