//Lab 8
// Author: Jeffrey Estevez
// Date: 05/08/2025

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

var result = array.map(isEven);
//Should Print out result
console.log("Test of evennes of arra:", result);

var result = array.map(function(x){
  return x ** 0.5;
})

//Should Print number after x ** 0.5
console.log("Squareroot of Array:", result);

//map result data
var mapResults = "Your map results here";

// Use jQuery to select the element by its ID and set the HTML content
$("#output").html(mapResults);
