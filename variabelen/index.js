/* JavaScript met P5 library
   eenvoudig voorbeeld voor het gebruik van functies
   doel: laat zien hoe werken
   Kijk ook eens naar het voorbeeld variabelen, dat min of meer hetzelfde doet, maar zonder gebruik van functies
*/

function setup() { // de code in deze functie wordt één keer uitgevoerd door de p5 library
  createCanvas (500,200);
  // maak een blauw vlak van 500x200 pixels om in te tekenen 

  clear();
  background('blue');

var x = 250;
  // teken 3 keer een smiley
  fill('white'); //opvulkleur wit
  ellipse(x+0, 50, 50, 50); //hoofd
  ellipse(x-10, 40, 10, 10); //linkeroog
  ellipse(x+10, 40, 10, 10); //rechteroog
  ellipse(x+0, 50 + 10, 30, 10); //mond
x=100;
  fill('white'); //opvulkleur wit
  ellipse(x+0, 50, 50, 50); //hoofd
  ellipse(x-10, 40, 10, 10); //linkeroog
  ellipse(x+10, 40, 10, 10); //rechteroog
  ellipse(x+0, 50 + 10, 30, 10); //mond

/*
  fill('grey'); //opvulkleur wit
  ellipse(200, 50, 50, 50); //hoofd
  ellipse(200 - 10, 50 - 10, 10, 10); //linkeroog
  ellipse(200 + 10, 50 - 10, 10, 10); //rechteroog
  ellipse(200, 50 + 10, 30, 10); //mond

  X = 300; Y=50;
  fill('red'); //opvulkleur wit
  ellipse(X, Y, 50, 50); //hoofd
  ellipse(X - 10, Y - 10, 10, 10); //linkeroog
  ellipse(X + 10, Y - 10, 10, 10); //rechteroog
  ellipse(X, Y + 10, 30, 10); //mond
*/
}


