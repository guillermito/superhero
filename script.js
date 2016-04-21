$(document).ready(function(){
  
  var hero = {
    spiderman: { 
        name1:"value1", 
        name2:"value2"
      }
   };

  $('button').on('click', function(){
    // This variable stores the value of your input field
    var input = $('input').val();
    
  });
  
  
  
  // ***************************** 
  // NOTES
  // *****************************
  // Remember append()?
  $('body').append('<header><h2></h2></header>');
  
  // Meet text()!
  // This will add text to HTML elements; it will replace any text that's already there
  $('h2').text("Find your hero!");
  
  // Hint: Use .append() and/or .text() in your on('click') function!
  
  // *****************************
  // Getting values from objects
  /*
  var car = {make:"Volkswagen", model:"Beetle", color:"red"};
  console.log(car.color);
  */
  
  // *****************************
  // For..in loops
  /*
  for (var name in object) {
    console.log(object[name]);
  }
  */


})
