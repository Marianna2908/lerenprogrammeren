/*
Schrijf een programma die het kleinste gemeen veelvoud van 2 getallen weergeeft.
Vraag aan de gebruiker de 2 getallen  Voorbeeld:
o Getallen 15 en 27
o Weergave op het scherm:
o Het kleinste gemene veelvoud van 15 en 27 is: 135
*/

var getal1= parseInt(prompt("geef getal 1 in"));
var getal2= parseInt(prompt("geef getal 1 in"));
var breukteller=0;
var grootsteGemeneDeler= 0;
var hulp= "";
var kleinsteGemeneVeelvoud=0

if(getal1 < getal2){
    hulp= getal1;
    getal1=getal2;
    getal2=hulp;

}
breukteller= getal1*getal2;
for(var i=1;i<=getal1;i++){
    if(getal1%i ==0 && getal2%i==0){
        grootsteGemeneDeler=i
    }
}
kleinsteGemeneVeelvoud = breukteller/grootsteGemeneDeler;
//document.write(`Het kleinste gemeen veelvoud van ${eersteGetal} en ${tweedeGetal} is ${kleinsteGemeenVeelvoud}`);
console.log("Het kleinste gemeen veelvoud van " + getal1 + " en " + getal2+ " is " + kleinsteGemeneVeelvoud);
