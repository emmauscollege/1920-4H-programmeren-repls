/* JavaScript met P5 library
   eenvoudig voorbeeld voor het gebruik van functies
   doel: laat eenvoudig gebruik van arrays's zien 
*/

function setup() { // de code in deze functie wordt één keer uitgevoerd door de p5 library

  // maak een vlak om in te tekenen
  createCanvas(300, 300);
  clear();
  background("lightgray");

  // zonder arrays
  print("red");
  print("yellow");
  print("gray");


  // met array
  var kleuren =["red","yellow","gray"];
  print(kleuren[0]);
  print(kleuren[1]);
  print(kleuren[2]);

  // pas array aan
  //kleuren[0]="purple"; // [0] is eerste element
  //kleuren[3]="green"; // [3] is vierde element, wordt toegevoegd
  //kleuren[9]="black"; // element 10 wordt zwart, alle elementen voor de 10e die nog niet bestonden worden undefined
  //kleuren.pop(); // maak array 1 korter
  //kleuren.push("blue"); // maak array 1 langer
  
  // for loop, druk namen van kleuren af
  for (var i = 0; i < 3; i++) {
    print(kleuren[i]);
  }

  // for loop, druk namen van kleuren af 
  // bij elke lengte van de array
  for (var i = 0; i < kleuren.length; i++) {
    print(kleuren[i]);
  }

  //for loop, teken gekleurde blokjes
  for (var j = 0; j < kleuren.length; j++) {
    fill(kleuren[j]);
    rect(j*50,0,40,40);
  }

 // for loop, x en y posities en kleuren
  var x =[0, 50, 150, 110, 25];
  var y =[0, 10, 30, 50, 80];

  for (var p = 0; p < kleuren.length; p++) {
    fill(kleuren[j]);
    rect(x[p],y[p],40,40);
  }

}