
/*
Schrijf een programma die een aantal getallen inleest en
eindigt wanneer de gebruiker een negatief getal ingeeft.
 Schrijf daarna de som van de getallen op het scherm.
*/


var som = 0;
var getal = parseInt((prompt("Geef een getal in")));


while(getal>0){
    som+=getal;
    getal=parseInt(prompt("geef een getal in"));

}
console.log(" de som van de getallen is" + som);
