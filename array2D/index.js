/* JavaScript met P5 library
   eenvoudig voorbeeld voor het gebruik van 2 dimenstionale arrays
   doel: laat eenvoudig gebruik van 2 dimensionale arrays's zien 
*/

function setup() { // de code in deze functie wordt één keer uitgevoerd door de p5 library

  // maak een vlak om in te tekenen
  createCanvas(300, 300);
  clear();
  background("lightgray");
  fill("black");

// array (1 dimensionaal) -> gameveld met 1 rij
  var rij =[0, 0, 1, 0];
  for (var x = 0; x < rij.length; x++) {
    switch (rij[x]) {
      case 0: // blok
      rect(x*40,0,40,40); 
      case 1: // puntje
      rect(x*40+15,15,10,10); 
    }
  }


// array (1 dimensionaal) -> gameveld met 1 rij
// opgeschoond met functie
  var tekenVakje = function(Inhoud, x, y) {
    switch (Inhoud) {
      case 0: // blok
      rect(x*40,y*40,40,40); 
      case 1: // puntje
      rect(x*40+15,y*40+15,10,10); 
    }
  };

  var rij =[0, 0, 1, 0];
  for (var x = 0; x < rij.length; x++) {
    tekenVakje(rij[x], x, 0);
  }


// array (1 dimensionaal) -> gameveld met 3 rijen
  var rij1 =[0, 0, 1, 0];
  var rij2 =[1, 1, 1, 0];
  var rij3 =[0, 0, 0, 0];
  for (var x = 0; x < rij1.length; x++) {
    tekenVakje(rij1[x], x, 0);
  }
  for (var x = 0; x < rij2.length; x++) {
    tekenVakje(rij2[x], x, 1);
  } 
  for (var x = 0; x < rij3.length; x++) {
    tekenVakje(rij3[x], x, 2);
  }


// array (1 dimensionaal) -> gameveld met 3 rijen
// opgeschoond
  var rij1 =[0, 0, 1, 0];
  var rij2 =[1, 1, 1, 0];
  var rij3 =[0, 0, 0, 0];
  for (var x = 0; x < rij1.length; x++) { // aanname: elke rij even lang
    tekenVakje(rij1[x], x, 0);
    tekenVakje(rij2[x], x, 1);
    tekenVakje(rij3[x], x, 2);
  }


// array (2 dimensionaal) -> gameveld met y rijen
  var rijInKolom =[[0, 0, 1, 0],
                   [1, 1, 1, 0],
                   [0, 0, 0, 0]];
  for (var x = 0; x < rijInKolom[0].length; x++) {
    for (var y = 0; y < rijInKolom.length; y++) {
      tekenVakje(rijInKolom[y][x],x,y);
        // letop volgorde [y][x]
    }
  }
// in welke volgorde worden de vakjes getekend?
// antwoord: kolom voor kolom


// array (2 dimensionaal)
// opgeschoond: werkt ook met rijen van verschillende lengte
  var rijInKolom =[[0, 0, 1, 0],
                   [1, 1, 1, 0],
                   [0, 0, 0, 0]];
  for (var y = 0; y < rijInKolom.length; y++) {
    for (var x = 0; x < rijInKolom[y].length; x++) {
      tekenVakje(rijInKolom[y][x],x,y); 
        // letop volgorde [y][x]
    }
  }


}