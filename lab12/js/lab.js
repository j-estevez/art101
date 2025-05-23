//Lab 12
// Author: Jeffrey E.
// Date: 05/22/2025

//Takes a string as an argument
function sortGod(str) {
//Counts the letters in str and assigns it to a variable length
    const length = str.length;
//Get the remainder with 4
    const mod = length % 4;
//Create a conditional that will return one of four gods in Warhammer40k depending on whether the value of mod is 0, 1, 2, or 3
    if (mod === 0) {
        return "Khorne";
    } else if (mod === 1) {
        return "Tzeentch";
    } else if (mod === 2) {
        return "Nurgle";
    } else {
        return "Slaanesh";
    }
}

/* Create a button an when the button wa click it will determine input and land a condition, which give it a name with in the String.
    That name will then store in the const "god", and when we output "god" it will print the name that was sorted. */
$(document).ready(function () {
    $("#button").click(function () {
        const name = $("#input").val();
        const god = sortGod(name);
        $("#output").append('<p class=god-energy>The goddess that had blessed you are: <strong>' + god + '</strong>!</p>');
    });
});