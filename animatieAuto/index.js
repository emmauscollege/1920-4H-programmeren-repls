/* JavaScript met P5 library
   eenvoudig voorbeeld voor animatie
   doel: laat zien hoe je de setup() en draw() functies 
   in de p5 library kunt gebruiken voor animaties
*/

// globale variabelen
var x = 10;

// de setup functie is al gedeclareerd in de p5 library
// we definieren de setup functie hieronder
// de code in de setup functie wordt één keer uitgevoerd door de p5 library
setup = function () { 

  // maak een vlak om in te tekenen 
  createCanvas(500, 400);
  noStroke();
}

// de draw functie is al gedeclareerd in de p5 library
// we definieren de draw functie hieronder
// de code in de draw functie wordt meerdere keren per seconde uitgevoerd door de p5 library
draw = function () { 

  // wis de achtergrond
  background(151, 244, 247);

  // teken de auto
  fill(255, 0, 115);
  rect(x, 200, 100, 20);
  rect(x + 15, 178, 70, 40);
  fill(77, 66, 66);
  ellipse(x + 25, 221, 24, 24);
  ellipse(x + 75, 221, 24, 24);

  // verplaats de plek waar de auto wordt getekend
  x = x + 1;
};


