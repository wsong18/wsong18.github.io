var inputStr;

// define a validation function
function validateCode(str) {

    str = str.trim();
    if (str === "") {
        alert("The input must not be empty or whitespace(s).\nPlease try again.")
        return false;
    }

    if (str.length !== 6) {
        alert("The input must have the length of 6.\nPlease try again.")
        return false;
    }

    if (!str.substr(0, 3).match(/^[a-zA-Z]{3}$/)) {
        alert("The first 3 characters of input must be alphabetic characters.\nPlease try again.")
        return false;
    }

    if (!str.substring(3, 6).match(/^[0-9]{3}$/)) {
        alert("The 4th to 6th characters must be digits (0-9 for each character).\nPlease try again.")
        return false;
    }

    return true;
} 

// the validation process start here
while (true) {
    inputStr = prompt("Please enter product code");
  
    if (inputStr === null) { break; } // if click on "cancel" button

    if (validateCode(inputStr)) { break; } // if pass the validation
}

alert("You entered: " + inputStr);