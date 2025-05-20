//Lab 11
// Author: Jeffry Estevez
// Date: 05/18/2025

// Sorts the characters of the strings in alphabet order. Then We have to convert our string to an array and back again to sort it
function sortString(inputString) {
  return inputString.split('').sort().join('');

}
// click listener for button
$("#submit").click(function(){


// get value of input field
const userName = $("#user-name").val();

// Sort the name
userNameSorted = sortString(userName);

// append a new div to our output div
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});