// Schrijf een programma die de volgende reekds horizontaal op het scherm schrijft
// voorbeeld:
//  * vraag aan de gebruiker:
//     wanneer dit getal vb 100 is en dan volgende reeks uitkomst:
//      1,2,4,8,16,32,64
//     Wanneer getal vb 130 is, dan is de volgende reeks uitkomst:
//      1,2,4,8,16,32,64;126

var getal= parseInt(prompt("geef getal in"));
var resultaat= "";
var i = 1;

for(var i; i<getal;i*=2){
  resultaat = resultaat + i + ","; //resultaat+ i + de opvulbakje waar het moet worden weergegeven
} // waarde *x vermenigvuldigen

console.log(resultaat.substr(0,resultaat.length-1)); // van getal 0 die als eerste getal w afgedrukt,