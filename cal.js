//Get the display element by its ID
let input = document.getElementById('display-class');

// Get all buttons on the page
let buttons = document.querySelectorAll('button');

// Initialize an empty string to store the input
let string = "";

// Convert NodeList of buttons to an array
let arr = Array.from(buttons);

// Iterate through each button in the array
arr.forEach(button => {
    // Add an event listener to the button
    button.addEventListener('click',(e) => {

        // Check if the button clicked is '='
        if(e.target.innerHTML == '='){
            // Evaluate the string and update the input value
            string = eval(string);
            input.value = string;
        }
        // Check if the button clicked is 'AC'
        else if(e.target.innerHTML == 'AC'){
            // Clear the string and update the input value
            string = "";
            input.value = string;
        }
        // Check if the button clicked is 'DEL'
        else if(e.target.innerHTML == 'DEL'){
            // Remove the last character from the string and update the input value
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        // For all other buttons, append their innerHTML to the string and update the input value
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})
