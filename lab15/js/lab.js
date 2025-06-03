//Lab 15 AJAX
// Author: Jeffrey Estevez
// Date: 06/02/2025

// Setup AJAX settings
const ajaxobj = {
 url : "https://yesno.wtf/api",
// data:{},
  type:"GET",
  dataType:"json"
};

//Click Event that connect to button in HTML, id is at HTML
$("#activate").click(function(){
  $.ajax(ajaxobj)
//console.log("Click!");
  .done(function(data){

    //Ignore this, it's from the the live coding during the lecture.
    console.log("Success!");
  console.log(data);

//Get the answer
    let answer = data.answer;
    let imageURL = data.image;

//Display answer, could apply css here
    let imageHTML = `
    <h1>${answer.toUpperCase()}</h1>
    <img src="${imageURL}">
    `;

//Output this to id=output
    $("#output").html(imageHTML);     
})
  .fail(function( xhr, status, errorThrown ){
  console.log(errorThrown + " Status:" + status ); 
  $("#output").append("<p>Something went wrong. Please try again.</p>");
  });
})