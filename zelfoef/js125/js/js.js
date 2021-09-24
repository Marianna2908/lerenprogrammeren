// Schrijf een programma die je alle potentiële mogelijk cmbinaties geeft in 2 decimalen
// uitgeprint met een komma ertussen tot en met 99
// vb: 00.01.02.03.04.05.06.08.09.10.11.12...99
//
// var result ="";
// var kleinsteGetal = 0
// var grootsteGetal = 99
//
// for(i=0; i<=99; i++){ // i is het getal, moet groter zijn dan nul maar kleiner en gelijk aan 99
//     if(i<10){ // getallen tot en met 10 moeten in 2 getallen weergegeven worden
//         result= result + "0"+ i +","; // resultaat is de getallen  met 0 + getal + "," komma als spatie
//     }else{
//         result= result + i+","; //anders  ( alle getallen hoge dan 10 moeten gewoon een komma krijgen)
//     }
//
// }
// console.log(result.substr(0,result.length-1));
//
//
//



// Schrijf een programma die je alle potentiële mogelijk cmbinaties geeft in 2 decimalen
// uitgeprint met een komma ertussen tot en met 99
// vb: 00.01.02.03.04.05.06.08.09.10.11.12...99

var resultaat = "";
var grootseGetal= 99;
var kleinsteGetal= 0;


for(var i=0; i<=99; i++){
    if(i<10){
        resultaat= resultaat + "0"+i+",";
    }else{
        resulaat = resultaat + i+",";
    }

}
console.log(resultaat.substr(0,resultaat.length-1));












