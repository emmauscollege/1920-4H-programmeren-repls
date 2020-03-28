/* JavaScript met P5 library
   eenvoudig voorbeeld voor het gebruik van functies
   doel: werking van lokale variabelen laat zien 
   tip: zet in replit de cursor op een variabel om te zien of die globaal, lokaal of parameter is
*/

// globale variabelen
var xG = 1; 

// functies
var drukaf = function(xP) {
  var xL = 10;
  //var xG = 4; // LETOP: dit is een lokale variabele met dezelfde naam als de globale variabele -> Don't do this in your code!
  xG = xG + 1;
  print("Start drukaf")
  print(" Globaal = " + xG);
  print(" Parameter = " + xP);
  print(" Lokaal = " + xL);
  xG = xG + 1;
  print(" Globaal = " + xG);
  print("Einde drukaf");
}

function setup() { // de code in deze functie wordt één keer uitgevoerd door de p5 library
drukaf(5);
print("Function setup")
print("Globaal = " + xG);
// print("Parameter = " + xP); // Parameter niet bekend, programma stopt
// print("Lokaal = " + xL); // Lokale variabele niet bekend, programma stopt
print("Globaal = " + xG);
}

/* gouden regels voor netjes programmeren:
1. Gebruik lokale variabelen in plaats van globale variabelen, tenzij...
2. Gebruik in functies parameters in plaats van globale variabelen, tenzij...
Tenzij... want soms is het overzichtelijker om af te wijken van de gouden regels.
*/
