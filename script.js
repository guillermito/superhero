var hero = {
  spiderman: { 
      codename:"Spider-Man", 
      identity:"Peter Parker", 
      power:"strength, spidey sense, wall-crawling",
      enemy:"Venom"
    }
 };


$('button').on('click', function(){
  // This variable stores the value of your input field
  var input = $('input').val();
  
});

// Remember append()?
$('header').append('<h2></h2>');

// Meet text()!
// This will add text to HTML elements; it will replace any text that's already there
$('h2').text("Find your hero!");

// Hint: Use .append() and/or .text() in your on('click') function!
