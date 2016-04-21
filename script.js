var hero = {
  spiderman: { 
      codename:"Spider-Man", 
      identity:"Peter Parker", 
      power:"strength, spidey sense, wall-crawling",
      enemy:"Venom"
    },
  hulk: { 
      codename:"Incredible Hulk", 
      identity:"Bruce Banner", 
      power:"strength, resistance",
      enemy:"Abomination"
    },
  wolverine: { 
      codename:"Wolverine", 
      identity:"Logan", 
      power:"regeneration, heightened senses, retractable claws",
      enemy:"Sabretooth"
    },
  captainAmerica: { 
      codename:"Captain America", 
      identity:"Steve Rogers", 
      power:"strength, agility",
      enemy:"Red Skull"
    }
 };


$('button').on('click', function(){
  var input = $('input').val();
  var counter = 0;
  for (var h in hero){
    if (input == hero[h].codename){
      $('h3').text(hero[h].codename);
      $('h5').text(hero[h].identity);
      $('.power').text(hero[h].power);
      $('.enemy').text(hero[h].enemy);
    } else {
      counter++
    }
  }
  if (counter === 4) {
    $('h5').text("Not found. Try again.");
    $('h3').text(" ");
    $('.power').text(" ");
    $('.enemy').text(" ");
  }
})
