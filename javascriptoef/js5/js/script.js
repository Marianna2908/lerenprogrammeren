/*
// FOR LOOP

for(teller;conditie;wijziging){

}
*/

/*var i = 1
for(i;i<=10;i++){
    console.log(i);
}*/
/*var i = 10*/
/*var x = 0
for(x;x<=0;x){
    console.log(x);
    x = x - 1
    x++;*/


/*
}
var i = 1
var x = 0
var y =3
for(y;y<=12;y){
    console.log(y);
    y = y + 3
    y++;
}
*/
/*i = 10
for(i;i>=10;i--){
    console.log(i);
}*/

//
// var text = ""// iets leeg in een vakje steken
// var i = 0
// while(i < 10){
//     text += "<br>Den nummers zijn" +i;
//     i++;
// }
// document.getElementById("demo").innerHTML=text;


// hoeveel getallen? ; geef getal in 5, geef getal in 5

//* Schrijf een programma waarin je aan de gebruiker vraagt
// *hoeveel getallen hij wil ingeven.
// *Schrijf vervolgens het totaal van alle ingegeven getallen op het scherm.
// *De totale som van x getallen is x.
// *Voorbeeld: Hoeveel getallen?: 3
// *Geef getal 1 in: 4 // vraagt getal
// *Geef getal 2 in: 3
// *Geef getal 3 in: 2
// *De totale som van 3 getallen is 9.

var aantal; //declareren van variabel
// variabel opvullen en vragen aan de gebriuker
var teller=1;
var getal
var resultaat=0

aantal= prompt('Hoeveel getallen');
/*for(teller;teller<aantal;teller++){
    getal =parseInt(prompt("geef getal in" + teller + "in"));
    resultaat= resultaat + getal;
}
console.log(" de totale som van " + aantal + " getallen is " + resultaat)*/

// met while

while(teller<=aantal){
    getal =parseInt(prompt("geef getal in" + teller + "in"));
    resultaat = resultaat + getal;
    teller++;

}
console.log(" de totale som van " + aantal + " getallen is " + resultaat);

// mijn antw:
/*
while(getal=+getal){
    som=+ "nummer is"+getal;
    getal++;
}
console.log(getal)
*/
