/* JavaScript met P5 library
   eenvoudig voorbeeld voor het gebruik van functies
   doel: laat zien hoe parameters in functies werken
   Kijk ook eens naar het voorbeeld functies, dat min of hetzelfde doet, maar zonder gebruik van parameters
*/

// variabelen
  var X = 0; 
  var Y = 50; 

// functies
var tekenSmiley = function(xPos, yPos) {
  var X1=xPos; // lokale variabele
  var Y1=yPos; // lokale variabele
  ellipse(X1, Y1, 50, 50); //hoofd
  ellipse(X1 - 10, Y1 - 10, 10, 10); //linkeroog
  ellipse(X1 + 10, Y1 - 10, 10, 10); //rechteroog
  ellipse(X1, Y1 + 10, 30, 10); //mond
}

function setup() { // de code in deze functie wordt één keer uitgevoerd door de p5 library

  // maak een blauw vlak van 500x200 pixels om in te tekenen 
  createCanvas(500, 200);
  clear();
  background('blue');

  // teken 3 keer een smiley
  fill('white'); //opvulkleur wit
  tekenSmiley(100,50);
  
  fill('grey'); //opvulkleur grijs
  tekenSmiley(200,50);
  
  fill('red'); //opvulkleur rood
  tekenSmiley(300,50);

}


