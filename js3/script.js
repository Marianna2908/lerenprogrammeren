/*
//LOGISCHE OPERATOREN
/!*

/!*
* && = AND operator
* || = OR operator
* ! = tegenovergestelde
* ==  2 waarden gelijk behalve datatype
* === 2 waarden gelijk met datatype
* != 2 waarden gelijk met datatype
* !== 2 waarden niet gelijk met datatype
* >
* <
* >=
* <=
* *!/


var getal1 = 5
var getal2 = 6
var grootsteKleinste = getal1 > getal2;
console.log(grootsteKleinste);

var getal3 = "5"
var getal4 = 5; //number ( integer)

var gelijk = getal3 != getal4;
console.log(gelijk);

var gelijk = getal3 == getal4;
console.log(gelijk);

//SELECTIE
var getal5 = parseInt(prompt (" geef het eerste getal in"));
var getal6 = parseInt(prompt (" geef het tweede getal in"));
*!/

/!*
if(getal5>getal6){
    console.log(getal5,"is groter dan", getal6);
}else if(getal5===getal6){
    console.log(getal5,"is gelijk aan", getal6);
}else{
    console.log(getal5," is kleiner dan", getal6);
}


*!/



var naam = prompt("geef je naam");
var beroep= prompt("geef je beroep in, maar een keuze arbeider of bediende");
if(beroep.toUpperCase() == "ARBEIDER") {
    console.log("Het beroep van ",naam,"is" ,beroep);
}else {
    console.log("Het beroep van ", naam, "is" ,bediende);
}


*/
