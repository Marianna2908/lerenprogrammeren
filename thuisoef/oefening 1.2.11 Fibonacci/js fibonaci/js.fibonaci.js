/*
Schrijf een programma die de getallenreeks van Fibonacci opsomt.
 Vraag aan de gebruiker hoeveel getallen er dienen te worden
weergegeven.  Voorbeeld:  0, 1, 1, 2, 3, 5, 8, 13, 21,

Fibonacci : elk getal van de rij (behalve de eerste twee) is gelijk aan de som van de twee voorgaande getallen. Dat levert de volgende rij getallen op: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233
*/

var aantalGetallen= parseInt((prompt("geef het aantal tetonen getallen in")));

var getal1= 0;
var getal2=1;
var volgendGetal // naast hetal 1 en 2 moet je nog het getal erna vernoemen

for(var i=1; i<= aantalGetallen;i++){
    console.log(getal1);
    volgendGetal= getal1 + getal2; // om volg getal te bekomen, ùoet je eerste getal ùmet 2de optellen
    getal1= getal2 // getal 1 is gelijk aan getal 2
    getal2 = volgendGetal // getal2 is het volgend getal
}