///**
// Schrijf een programma die de grootst gemene deler van 2 getallen
//  op het scherm schrijft.
//   Vraag aan de gebruiker de 2 getallen
//   Voorbeeld:
//  o Getallen 75 en 105
//  o Grootste gemene deler is 15
//  o Weergave op het scherm:
//  o De grootste gemene deler van 105 en 75 is: 15 */

let hulp= "";
let getal1= parseInt(prompt('Geef eerste getal in'));
let getal2 = parseInt(prompt('Geef tweede getal in'));
let groottsteGemeneDeler;

if(getal1!= getal2){
    hulp=getal1;
    getal1 = getal2;
    getal2 = hulp;

    if(eersteGetal != tweedeGetal){
        hulp = eersteGetal;
        eersteGetal = tweedeGetal;
        tweedeGetal = hulp
    }
    for(let x=1;x<=eersteGetal;x++){
        if(getal1%x == 0 && getal2%x == 0){
            groottsteGemeneDeler = x;
        }
    }
console.log("De grootste gemene deler van " + getal1+ " en " + getal2 + " is " + groottsteGemeneDeler);