/* JavaScript met P5 library
   eenvoudig voorbeeld voor het gebruik van functies
   doel: laat zien hoe functies werken
   Kijk ook eens naar het voorbeeld variabelen, dat min of meer hetzelfde doet, maar zonder gebruik van functies
*/

// variabelen
  var X = 0; 
  var Y = 50; 

// functies
var tekenSmiley = function() {
  ellipse(X, Y, 50, 50); //hoofd
  ellipse(X - 10, Y - 10, 10, 10); //linkeroog
  ellipse(X + 10, Y - 10, 10, 10); //rechteroog
  ellipse(X, Y + 10, 30, 10); //mond
}

function setup() { // de code in deze functie wordt één keer uitgevoerd door de p5 library

  // maak een blauw vlak van 500x200 pixels om in te tekenen 
  createCanvas(500, 200);
  clear();
  background('blue');

  // teken 3 keer een smiley
  X = 100; Y=50;
  fill('white'); //opvulkleur wit
  tekenSmiley();

  X = 200; Y=50;
  fill('grey'); //opvulkleur wit
  tekenSmiley();

  X = 300; Y=50;
  fill('red'); //opvulkleur wit
  tekenSmiley();

}


