// Schrijf een programma waar je de gebruiker naar een getal vraagt.
// Controleer ieder getal tussen 0 en het ingegeven getal en druk de evengetallen af op het scherm
// Tip maar hier gebruik van een built-in functie // built in is:
//


var getal = parseInt(prompt("Geef een getal in"));
var resultaat = ""

for(var i = 0; i <= getal; i++) {
    y = i % 2;// modulo van getal
    console.log(y);
    if(y == 0){// rest waarde van de i
        resultaat = resultaat + i;
    }
}
console.log(resultaat);

