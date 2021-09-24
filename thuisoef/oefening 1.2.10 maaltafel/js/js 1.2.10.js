// schrijf een programma dat de tafels van vermenigvuldiging afdrukt.
// vb
// je vraagt de gebruiker de tafel 1
// je vraagt aan de gebruiker het eindgetal 12
// weergave: zou op deze manier moeten verschijnen

// 1 x 1 = 1, 1 x 2 = 2, 1 x 3 = 3
// 1x 4 = 4, 1 x 5= 5, 1 x6 = 6
// 1 x 7 = 7, 1 x 8 = 8, 1 x 9 = 9
// 1 x 10 = 10, 1 x 11 = 11, 1 x 12 = 12

var getal= parseInt(prompt("maaltafel"));
var eindgetal= parseInt((prompt("geef eindgetal")));
resultaat = "";

x=1;

for(i=1;i<=eindgetal;i++){
    if (x<=3){
        resultaat= resultaat + getal + "x" + i + "=" +",";
        x++
}else{
    console.log(resultaat);
    resultaat = "";
    x=1;
    }
}
console.log(resultaat.substr(0,-1));