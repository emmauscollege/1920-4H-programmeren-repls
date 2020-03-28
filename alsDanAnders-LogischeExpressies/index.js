/* JavaScript met P5 library
   eenvoudig voorbeeld voor animatie
   doel: laat zien hoe je logische expressies en if-else werken
*/

setup = function() { 
  createCanvas(400, 400);
  background('black');
  stroke('white'); // teken in de kleur wit
}

draw = function() { // de code in deze functie wordt meerdere keren per seconde uitgevoerd door de p5 library

  // bepaal achtergrond kleur 
  // op basis van conditie
  if ( (mouseY < 300) && 
       (mouseY > 100) &&
       (mouseX < 300) &&
       (mouseX > 100)) {
    background('green'); 
  } else {
    background('red'); 
  }

  // teken wit kruis over achtergrond
  line (0,200,400,200);
  line (200,0,200,400);
}

