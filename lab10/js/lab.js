//Lab 10
// Author: Jeffrey Estevez
// Date: 05/15/2025

/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Date: 2025
   */

   function generateRandomText() {
  const text = "ab cdefg hijklm nopqr stuvw xyz ab cdefg hijklm nopqr stuvw xyz ab cdefg hijklm nopqr stuvw xyz";
  const min = 10;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

// click  button
$("#make-convo").click(function(){
    // get new fake dialogue
    const newText = generateRandomText();
    // append a new div to our output div, also change append to html could do refreshing the text instead of adding on to the existing text.
    $("#output").append/*html*/('<div class="text"><p>' + newText + '</p></div>');
});