/*
* LEREN PROGRAMMEREN MET JAVASCRIPT - OEF 1
* */

/*var naam= prompt( "geef je naam in");
var leeftijd= parseInt("geef uw leeftijd in");

if(leeftijd >16){
    if(leeftijd=> 18)
    console.log(naam, " u mag deelnemen")};
    }else{
        console.log(naam, "mits toestemming ouders");
    }
}else{
    console.log(naam, " u mag niet deelenemen ");
}    */

/*
var naam = prompt("geef je naam in");
var leeftijd = parseInt(prompt("geef uw leeftijd in"));
var bulletinKeuze
var aantalVakjes
*/
// variabelen nodig in onderstaande oef

/*

if(leeftijd >= 18){
    console.log(naam, " u mag deelenemn");
}else if (leeftijd >=16){
    console.log(naam, "geen deelname")
}else{
    console.log(naam, " u mag deelnemen mits toestemming onders");
}*/

/*
if (leeftijd >= 18) {
    console.log(prompt("wenst u een bulletin van 12 vakjes?"))
    if(bulletin === "ja");
        console.log("uw bulletin kost €20");
    if(bulletin !=="neen");
        console.log(prompt("wenst u een andere bulletin"));
        if (bulletin ==="neen"-);
        console.log("bedankt voor uw deelname");
    if( bulletin !=="ja");


}else(leeftijd < 18);
    console.log(" u mag niet deelnemen");

// eigen geschreven code voor oplossing
*/

// OPlossing:

/*
if (leeftijd >= 18) {
    keuzeBulletin = prompt("volledig bulletin j/n")
    if(bulletinKeuze == "J") {
        console.log("Bulletin kost €20");
    } else{
        aantalVakjes = parseInt(prompt("hoeveel vakjes"));
          if(aantalVakjes==10) {
              console.log("prijs van €18");
          }else if (aantalVakjes == 8){;
              console.log("prijs van €16");
          }else if (aantalVakjes == 8){
              console.log("prijs van €12");
          }else if (aantalVakjes == 6){
              console.log("prijs van €8");
          }else if (aantalVakjes == 4){
              console.log("prijs van €4");
          }
          else
          {
              alert(" u mag niet deelnemen");
          }
// oefening die klopt door docent
*/

var geboortejaar = parseInt(prompt("geef uw geboortejaar in"));
var lopendJaar = parseInt(prompt("geef Lopend jaar in"));

if ((lopendJaar - geboortejaar) >= 18) {
    console.log("vanaf nu mag, kan en beslis ik alles, binnen de wettelijke grenzen")
    }
else
    if (lopendJaar - geboortejaar < 18) {
        console.log("gelukkig heb ik mijn ouders die alles voor me regelen");
    }


