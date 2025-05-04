//Lab 7
// Author: Jeffrey Estevez
// Date: 05/03/2025


// sortUserName - do function that take the input and sort them in order
function sortUserName(){
  var userName = window.prompt("Hi, Please tell me your name so I can fix it.");
  console.log("userName =", userName)

  //split string to array
  var nameArray = userName.split('');
  console.log("name Array =", nameArray);

  //Sort Array
  var nameArraySort = nameArray.sort();
  console.log("userName Sort =", nameArraySort);

  //Join Array Back to String
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  //I could do it in one line like username.toLower().split("").sort().join("")
  return nameSorted;
}

//output
document.writeln("Oh hey, I've fixed your name: ", sortUserName(), "</br");
