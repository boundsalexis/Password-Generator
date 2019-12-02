var length;
var specialChar;
var numChar;
var lowerCaseChar;
var upperCaseChar;
var password = "";
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "."];
console.log(alphabet);
console.log(numbers);
console.log(special);
function generate() {
    length = parseInt(prompt("How long would you like your password to be?"));
    if ((Number.isInteger(length) === true) && (length > 8) && (length < 128)) {
        specialChar = confirm("Would you like to include special characters?");
            if (specialChar === true) {
                password += special[Math.floor(Math.random()*10)];
                console.log(password);

            }
        }
    else {
        alert("You must enter a number between 8 and 128");
    }
}
function copy(){
    document.write("placeholder");
}