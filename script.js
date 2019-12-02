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
console.log(lowCase);
console.log(upCase);
console.log(numbers);
console.log(special);
function generate() {
    length = parseInt(prompt("How long would you like your password to be?"));
    if ((Number.isInteger(length) === true) && (length > 7) && (length < 129)) {
        specialChar = confirm("Would you like to include special characters?");
            if (specialChar === true) {
                password += special[Math.floor(Math.random()*10)];
                console.log(password);
                numChar = confirm("Would you like to include numeric characters?");
            }
            else {
                numChar = confirm("Would you like to include numeric characters?");
            }
            if (numChar === true) {
                password += special[Math.floor(Math.random()*10)];
                lowerCaseChar = confirm("Would you like to include lower case characters?")
            }
            
    else {
        alert("You must enter a number between 8 and 128");
    }}}
    function copy(){
    document.write("placeholder");
}
