function validationCheck(firstName, lastName, zipCode) { // Function to check if the input is valid
    if (!firstName || !lastName || !zipCode) { // Check if any of the inputs are empty. All input variables firstName, lastName, and zipCode are all referenced in strings.html input lines 14, 16, 18.
        return false; // If any of the inputs are empty, it will be invalid
    }

    var zipCodeNumber = Number(zipCode); // Convert zipCode to a number
    if (isNaN(zipCodeNumber) || zipCode.length !== 5) { // Check if zipCode is not a number referenced to by isNaN [in JS this is the operator for Not a Number] or if it is not exactly equal to a 5 digit number
        return false; // If zipCode is not a number or not exactly 5 digits, it will be invalid
    }

    return true; // If all the conditions are met, the input will be valid
}

function validateForm(event) { // Function to validate the form input
    var firstName = document.getElementById('firstName').value; // Get the value of the firstName input
    var lastName = document.getElementById('lastName').value; // Get the value of the lastName input
    var fullName = firstName + ' ' + lastName; // Combine the firstName and lastName to create a fullName

    if (fullName.length > 20) { // Check if the fullName variable is greater than 20 characters
        alert('Full name cannot exceed 20 characters'); // If the fullName is greater than 20 characters, an alert will pop up saying, "Full name cannot exceed 20 characters"
        return; // Stops the execution of the function
    }

    var zipCode = document.getElementById('zipCode').value; // Get the value of the zipCode input

    if (zipCode.length !== 5 || isNaN(zipCode)) { // Check if the zipCode is not exactly 5 digits or if it is not a number
        alert('Zip code must be exactly 5 digits'); // If the zipCode is not exactly 5 digits or not a number, an alert will pop up saying, "Zip code must be exactly 5 digits"
        return; // Stops the execution of the function
    }

    event.preventDefault(); // Prevent the form from submitting if it's invalid

    if (firstName === "" || lastName === "" || zipCode === "") { // Check if any of the inputs are empty
        document.getElementById('result').textContent = 'Invalid input'; // If any of the inputs are empty, the result will say, "Invalid input"
    } else {
        document.getElementById('result').textContent = 'Valid input'; // If all the inputs are filled, the result will say, "Valid input"
        document.getElementById('secretMessage').style.display = 'block'; // This will display the secret message if the input is valid
    }
}

document.getElementById('validationForm').addEventListener('submit', validateForm); // Event listener to the form to check if it's valid when it's submitted