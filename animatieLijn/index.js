/* JavaScript met P5 library
   eenvoudig voorbeeld voor animatie
   doel: laat zien hoe je de setup() en draw() functies 
   in de p5 library kunt gebruiken voor animaties
*/

// globale variabelen
let y = 0;

setup = function() { // de code in deze functie wordt één keer uitgevoerd door de p5 library
  // maak een vlak van 500x200 pixels om in te tekenen 
  createCanvas(500, 200);
}

draw = function() { // de code in deze functie wordt meerdere keren per seconde uitgevoerd door de p5 library

  // wis canvas
  clear();
  background('black');

  // teken een horiontale witte lijn
  stroke('white'); // teken in de kleur wit
  line(0, y, 500, y); // teken horizontale lijn

  // pas de variabel Y aan
  y += 1; // Y = Y + 1
  if (y > 200) { // als de lijn onderaan het scherm is
    y = 0; // zet volgende lijn bovenaan scherm
  }

}

