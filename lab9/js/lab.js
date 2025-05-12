/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.
Lab 9
 Author: Jeffrey Estevez
 Date: 05/12/2025
*/

// add button to challenge problem result section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#problems").append("<button id='button-problems'>Make Special</button>");
$("#results").append("<button id='button-results'>Make Special</button>");

/* add a click listener to the challenge button
    then add the "special" class to the section
*/
$("#button-challenge").click(function(){
        $("#challenge").toggleClass("special");
});
$("#button-problems").click(function(){
        $("#problems").toggleClass("special");
});
$("#button-results").click(function(){
        $("#results").toggleClass("special");
});