

// schrijf een programma die het volgende op het scherm weergeeft
//*gebruiker geeft het max aantal sterren in


var ster="*";
var teller=1;
var resultaat="";
var maximumaantal;5


maximumaantal= prompt("geef aantal sterretjes in");
for(teller;teller <= maximumaantal;teller++){
   resultaat=resultaat+ster;
        console.log(resultaat) // res 1 = 5ster

}
teller--; // -- is -15
for(teller;teller>=1;teller--){
    console.log(resultaat.substr(0, teller));
}




