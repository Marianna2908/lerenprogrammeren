//schrijf een programma die de faculteit van een getal weergeeft:
//de facultiteit van 5 is vb:
// 5x4x3x2x1=120
// vraag dit getal aan de gebruiker


// 5! = 5x 4x 3x 2x 1
var getal=parseInt(prompt(" Geef een getal in "));
var facultateit= 1 // je start met fc met 1 ( doordat comp rekent 0 als 1)

for(var i=1; i <getal; i++){ // zoalng i kleiner of gelijk aan getal is, gatal wordt in fac gezet :
    facultateit=facultateit * i;
}
console.log(facultateit)


