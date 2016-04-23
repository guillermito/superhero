# Superhero Search

1. Clone this repo into C9
2. Create your hero object with at least 4 superheroes and the following properties: codename, identity, power, enemy.
3. Create your superhero search website!
4. Read the comments in script.js for hints!
 
### Write your HTML in index.html, your CSS in styles.css, and your JS in script.js

## HTML:
1. Give your page a title. Be creative!
2. Create a div with the ID "searchbox"
3. Add an input field and a button to your "searchbox" div
4. Create another div with ID "results"
5. Add the following to your results div:
    * an h3 tag with the class "codename"
    * an h5 tag with the class "realname"
    * a p tag with the class "power"
    * a p tag with the class "enemy"
    * Remember to close your tags!
  
## JS:
  1. Create a "hero" object that contains at least 4 heroes with the following properties:
    * codename
    * identity
    * power
    * enemy
  2. Create a "for" loop for the "hero" object
  3. Inside your "for" loop, add an "if" statement; the condition should check if the value of the input field is equal to the hero's codename
  4. If your condition is true, use .text to:
    * add the codename to the "codename" tag
    * add the identity to the "realname" tag
    * add the power to the "power" tag
    * add the enemy to the "enemy" tag
  
  Check to see if your code works!
  
  CSS:
  1. Change the font of the "body" tag to: Helvetica, Arial, sans-serif
  2. Add margin: 0 auto to all "div" tags
  3. Add a background color to your "searchbox" div
  4. Add a different background color to your "results" div
  5. Change the font-size so that the "enemy" is smaller than "power"
  6. Give your "button" the following styles:
    * padding
    * background-color
    * color
  7. Add padding to the "searchbox" and "results" divs
  
  Add any other styles you want!
