// index.js - purpose and description here
// Author: Jeffrey Estevez
// Date: April 28, 2025

// Constants

// Functions
myTransport = ["Ford Tarus"," Skateboard"," Bus"];

//Creat object for dream rider
myMainRide = {
  make: "Ford",
  model: "Tarus",
  color: "rusty",
  year: 1995,
  age: function(){
      return 2025 - this.year;
  }
}
//output
document.writeln("The kinds of transport I use: ", myTransport, "</br>");
//This allow us to write object to the doc.
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myDreamRide, null, '\t'), "</pre>");


myMainRide.age()
// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
