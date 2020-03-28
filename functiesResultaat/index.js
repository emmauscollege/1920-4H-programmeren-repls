/* JavaScript met P5 library
   eenvoudig voorbeeld voor het gebruik van functies
   doel: laat zien hoe resultaat in functies werken
*/

// variabelen
 var x = 0; 

// functies
var keerTwee = function(xP) {
  return xP*4;
}

function setup() { // de code in deze functie wordt één keer uitgevoerd door de p5 library
var result=0;
result =keerTwee(5);
print(result);

}


