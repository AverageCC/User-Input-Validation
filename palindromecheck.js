function palindromeCheck() { // Creates the function palindromeCheck
    var str = document.getElementById("palindrome").value; // Gets the value of the input field, "palindrome" from strings.html line 10. User input string
    var lowRegStr = str.toLowerCase(); // Converts the user input string to lowercase
    var isPalindrome = true; // Initializes the variable isPalindrome to true
    for (var i = 0; i < lowRegStr.length / 2; i++) { // This checks to see if the user input is a palindrome by comparing the first and last characters of the string, then the second and second to last characters, and so on. if they remain the same, the string is a palindrome. If they are different, the string is not a palindrome.
        if (lowRegStr[i] !== lowRegStr[lowRegStr.length - 1 - i]) { // If the first character and the last character calculated by the length of the string minus 1 minus i are not the same then it is not a palindrome
            isPalindrome = false; // this sets the value, "isPalindrome" to false
            break; // this breaks the loop
        }
    }
    if (isPalindrome) { // If the value of isPalindrome is true then it will execute the below and if not then it will execute the else statement
        document.getElementById("result").innerHTML = "Yes, it is a palindrome."; // This will update the <p> tag with the id "result" in strings.html on line 14 to say "Yes, it is a palindrome."
    } else { // If the value of isPalindrome is false then it will execute the following
        document.getElementById("result").innerHTML = "No, it is not a palindrome."; // This will update the <p> tag with the id "result" in strings.html on line 14 to say "No, it is not a palindrome."
    }
}