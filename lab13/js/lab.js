//Lab 13
// Author: Jeffrey Estevez
// Date: 05/25/2025

//Create a FizzBuzz function
function fizzBuzz() {
//Loop 1 to 200
    for ( i = 1; i <= 200; i++) {
        
//divi = strings
        let divi = "";
    if (i%35 == 0) divi += "BuzzBoom!";
    else if (i%21 == 0) divi += "FizzBoom!";
    else if (i%15 == 0) divi += "FizzBuzz!";
    else if (i%3 == 0) divi += "Fizz!";
    else if (i%5 == 0) divi += "Buzz!";
    else if (i%7 == 0) divi += "Boom!";
//Make the number appear as well, not just the word
    if (divi === "") divi = i;
//Output the string to output div 
        $("#output").append("<p>" + divi + "</p>");
    }
}

//call the Function
$(document).ready(function () {
    fizzBuzz();
})