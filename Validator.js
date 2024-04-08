// Validation function
function validationCheck(firstName, lastName, zipCode) {
    if (!firstName || !lastName || !zipCode) {
        return false;
    }

    var zipCodeNumber = Number(zipCode);
    if (isNaN(zipCodeNumber) || zipCode.length !== 5) {
        return false;
    }

    return true;
}

// Form validation function
function validateForm(event) {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var fullName = firstName + ' ' + lastName;

    // Check if fullName has more than 20 characters
    if (fullName.length > 20) {
        alert('Full name cannot exceed 20 characters');
        return; 
    }

    var zipCode = document.getElementById('zipCode').value;

    // Check if zipCode is exactly 5 digits
    if (zipCode.length !== 5 || isNaN(zipCode)) {
        alert('Zip code must be exactly 5 digits');
        return; // Stop execution
    }

    // Prevent form submission
    event.preventDefault();

    // Check if firstName, lastName, and zipCode are not empty
    if (firstName === "" || lastName === "" || zipCode === "") {
        document.getElementById('result').textContent = 'Invalid input';
    } else {
        document.getElementById('result').textContent = 'Valid input';
        // Show the secret message
        document.getElementById('secretMessage').style.display = 'block';
    }
}

// Attach the validateForm function to the form's submit event
document.getElementById('validationForm').addEventListener('submit', validateForm);