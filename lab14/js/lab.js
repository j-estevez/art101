//Lab 13: Debugging Lab 8
// Author: Jeffrey Estevez
// Date: 05/25/2025

//function
function isEven(x){
    return (x % 2 == 0);
}

//test
console.log("Is 1 Even? ", isEven(1));
console.log("Is 2 Even? ", isEven(2));

//array test
array = [100, 95, 68, 26, 33]
console.log("My array", array);

var evenRes = array.map(isEven);
//Should Print out result
console.log("Test of evennes of array:", evenRes);

var SquRes = array.map(function(x){
    return x ** 0.5;
})

//Should Print number after x ** 0.5
console.log("Squareroot of Array:", SquRes);

//map result data
var mapResults = "<h2>Your map results here: </h2>" + 
//Debugged

                "<div id=bold> Original Array: </div>" + array.join(",") +
                "<div id=bold> Even Array: </div>" + evenRes.join(",") +
                "<div id=bold> Squareroot Array: </div>" + SquRes.join(",");

// Use jQuery to select the element by its ID and set the HTML content
$(document).ready(function() {
$("#output").html(mapResults);
})