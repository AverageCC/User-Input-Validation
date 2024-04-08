// Validation function
function validationCheck(firstName, lastName, zipCode) {
    if (!firstName || !lastName || !zipCode) {
        return false;
    }

    var zipCodePattern = /^[0-9]{5}$/;
    if (!zipCodePattern.test(zipCode)) {
        return false;
    }

    return true;
}

// Form validation function
function validateForm(event) {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var zipCode = document.getElementById('zipCode').value;

    // Prevent form submission
    event.preventDefault();

    if (!validationCheck(firstName, lastName, zipCode)) {
        document.getElementById('result').textContent = 'Invalid input';
    } else {
        document.getElementById('result').textContent = 'Valid input';
        // Show the secret message
        document.getElementById('secretMessage').style.display = 'block';
    }
}

// Attach the validateForm function to the form's submit event
document.getElementById('validationForm').addEventListener('submit', validateForm);