# Password-Generator

# Site Picture

## Technologies Used
- HTML to create the Headings, and the buttons
- Css to add color to the divs
- Javscript to give the buttons functionality 
- Git to track changes
- GitHub to host

## Summary
This application generates a password between 8 and 128 characters, based on the types of characters you select. If you enter  anumber outside of the length range, you will not be able to continue. If you say do not select at least one type of character you will have to click generate password again to start over. 

## Code Snippet
```javascript
        while (password.length < length) {
        if (specialChar === true && password.length < length) {
            password += special[Math.floor(Math.random()*10)];
        }
        if (numChar === true && password.length < length) {
            password += numbers[Math.floor(Math.random()*10)];
        }
        if (lowerCaseChar === true && password.length < length) {
            password += lowCase[Math.floor(Math.random()* lowCase.length)];
        }
        if  (upperCaseChar === true && password.length < length) {
            password += upCase[Math.floor(Math.random()* upCase.length)];
        }
        else if (specialChar === false && numChar === false && lowerCaseChar === false && upperCaseChar === false) {
            for (i = 0; i < length; i ++) {
                password += i;
            }
            alert("You must select at least one type of character!");
        } 
```
This is how I generated the password after giving the user all the necessary confirm statements.

## Authors

* **Alexis Bounds** 

- [Link to Portfolio Site](https://github.com/boundsalexis/basic-portfolio)
- [Link to Github](https://boundsalexis.github.com/)
- [Link to LinkedIn](https://www.linkedin.com/in/alexis-bounds-9b7711169/)
