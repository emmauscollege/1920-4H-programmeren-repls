/* JavaScript met P5 library
   eenvoudig voorbeeld voor het gebruik van herhaling
   doel: laat zien hoe herhaling met while en for werkt, inclusief nesting
*/

// functies
var tekenSmiley = function(xPos, yPos) {
  ellipse(xPos, yPos, 50, 50); //hoofd
  ellipse(xPos - 10, yPos - 10, 10, 10); //linkeroog
  ellipse(xPos + 10, yPos - 10, 10, 10); //rechteroog
  ellipse(xPos, yPos + 10, 30, 10); //mond
}

function setup() { // de code in deze functie wordt één keer uitgevoerd door de p5 library

  // maak een blauw vlak van 300x300 pixels om in te tekenen 
  createCanvas(300, 300);
  clear();
  background('green');

  // while loop
  print ("start while loop");
  var i = 1;
  while ( i < 10 ) {
    print ("i = "+i)
    i++;
  }
  print ("eind while loop");

  // for loop
  print ("start for loop");
  for (var j = 1; j < 10; j++) {
    print ("j = "+j)
  }
  print ("eind for loop");

  // nested while loop
  print ("start nested while loop");
  var x = 1; var y = 1;
  while (x < 5) {
    y = 1; 
    while (y < 5) {
      print ("x = "+x+";y = "+y);
      y++;
    };
    x++;
  };
  print ("eind nested while loop");

  // nested while loop - smiley
  var x = 50; var y = 0;
  while (x < 300) {
    y = 50; 
    while (y < 300) {
      tekenSmiley(x, y);
      y = y + 100;
    };
    x = x + 100;
  }
}