var length;
var specialChar;
var numChar;
var lowerCaseChar;
var upperCaseChar;
var password = "";
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upCase = [];
    for (i = 0; i < lowCase.length; i ++) {
        upCase.push(lowCase[i]);
    }

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "."];
// console.log(lowCase);
// console.log(upCase);
// console.log(numbers);
// console.log(special);
function generate() {
    length = parseInt(prompt("How long would you like your password to be?"));
    password = "";
    if ((Number.isInteger(length) === true) && (length > 7) && (length < 129)) {
        specialChar = confirm("Would you like to include special characters?");
            if (specialChar === true) {
                password += special[Math.floor(Math.random()*10)];
                numChar = confirm("Would you like to include numeric characters?");
            }
            else {
                numChar = confirm("Would you like to include numeric characters?");
            }
            if (numChar === true) {
                password += numbers[Math.floor(Math.random()*10)];
                lowerCaseChar = confirm("Would you like to include lower case characters?");
            }
            else {
                lowerCaseChar = confirm("Would you like to include lower case characters?");
            }
            if (lowerCaseChar === true) {
                password += lowCase[Math.floor(Math.random()* lowCase.length +1)];
                upperCaseChar = confirm("Would you like to include upper case characters?");
            }
            else {
                upperCaseChar = confirm("Would you like to include upper case characters?");
            }
            if  (upperCaseChar === true) {
                password += upCase[Math.floor(Math.random()* upCase.length +1)];
                console.log(password);
            }
            else{

            } 
        }
        else {
    alert("You must enter a number between 8 and 128");
        }
}
    // console.log(password);
    
    function copy(){
    document.write("placeholder");
}
