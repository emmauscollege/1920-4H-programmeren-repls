/* JavaScript met P5 library
   eenvoudig voorbeeld van wat mis kan gaan bij impliciet casten
   doel: juist gebruik van datatypen Number, String, Boolean
*/

function setup() { // de code in deze functie wordt één keer uitgevoerd door de p5 library

  // maak een rechthoek om in te tekenen 
  createCanvas(500, 200); // rechthoek van 500x200 pixels
  background('black'); // achtergrond zwart
  fill('white'); // tekst wit
  textSize(20); // tekstgrootte 20 pixel

  // voorbeeld dat tot denken aanzet
  var x = 10;
  var y = 20;
  var z = "The result is: " + x + y; // The result is: 1020
  text(z, 300, 30);
/*
  // meer voorbeelden van impliciet type-casten
  var var1 = 1 + 2;
  text(var1, 10, 30); // 3
  var var2 = "1" + "2";
  text(var2, 10, 50); // 12
  var var3 = 1 + "2";
  text(var3, 10, 70); // 12
  var var4 = true;
  text(var4, 10, 90); // true
  var var5 = true + 1;
  text(var5, 10, 110); // 2
  var var6 = "true" + 1;
  text(var6, 10, 130); // true1

  // beter is expliciet type-casten
  // dan is altijd duidelijk wat eruit komt
  // expliciet casten kan met de functies Number(), String(), Boolean();
  var var11 = 1 + 2; // Number
  text(var11, 110, 30); // 3
  var var12 = Number("1") + Number("2"); // Number
  text(var12, 110, 50); // 3
  var var13 = 1 + Number("2"); // Number
  text(var13, 110, 70); // 3
  var var14 = true; // Boolean
  text(var14, 110, 90); // true
  var var15 = String(true) + String(1); // String
  text(var15, 110, 110); // true1
  var var16 = "true" + String(1);
  text(var16, 110, 130); // true1
  */
}

