
/*
Schrijf een programma waarin je aan de gebruiker vraagt
hoeveel getallen hij wil ingeven. Schrijf vervolgens het totaal
van alle ingegeven getallen op het scherm.
 De totale som van x getallen is x.
 Voorbeeld:
 Hoeveel getallen?: 3
 Geef getal 1 in:
 Geef getal 2 in:
 Geef getal 3 in
 De totale som van 3 getallen is x.
 Het gemiddelde van de 3 getallen is x
*/


var teller = 1;
var som = 0;
var gemiddelde = 0;
var aantalGetallen= parseInt((prompt(" Hoeveel getallen wenst u in te geven")));
var getal

while(teller <= aantalGetallen){
    getal= parseInt(prompt(" Geef het getal in"));
    som+= getal;
    teller++
}
console.log( " de som van de totale getallen " + aantalGetallen + " is "+ som);
