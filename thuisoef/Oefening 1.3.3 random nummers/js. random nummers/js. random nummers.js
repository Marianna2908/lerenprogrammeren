/*
 Je schrijft 3 arrays.
 De eerste 2 arrays vul je met een lus op met telkens 11 willekeurige in te lezen getallen.
  De derde array vul je vervolgens op met de som van de waarden in arrays 1 en 2.
  Weergave op he tscherm(voorbeeld):
  3+2=5
  1+1=2
  2+100=102
  3+4=7
  900+4=904
*/

var getal1=[];
var getal2=[];
var getal3=[];

var i=0;

maxGetal = parseInt(prompt("Geef het maximumgetal in "));
while(i<=11){
    getal1.push(Math.floor(Math.random() * (maxGetal - 0 + 1) ) + 0); //random getal tussen 0 en maximum
    getal2.push(Math.floor(Math.random() * (maxGetal - 0 + 1) ) + 0); //random getal tussen 0 en maximum
    getal3.push(parseInt(getal1[i] + getal2[i]));
    console.log(getal1[i], ' + ', getal2[i], ' = ', getal2[i]);
    i++;
}