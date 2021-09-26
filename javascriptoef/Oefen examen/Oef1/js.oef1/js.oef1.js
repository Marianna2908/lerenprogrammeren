// 1.vraag aan de gebruiker om een zin in te geven. Druk deze zin in hoofdletters af op het scherm.µ
// //
// var hoofdletters = "full stack developers";
//
// console.log(hoofdletters.toUpperCase());

//2. Vraag aan de gebruiker om een begingetal en een eindgetal in te geven.
// Zorg ervoor dat je onderstaan resultaat kan bereiken.

// var beginGetal= "";
// var teller= 1;
// var faculteit=""
// var eindgetal = "";
//
// beginGetal= parseInt(prompt("Geef het begingetal in "));
// eindgetal= parseInt(prompt("Geef het eindgetal in "));
// while(eindgetal <= teller){
//     faculteit *= teller;
//     beginGetal+=teller +i;
//     teller++;
//     console.log(eindgetal)
//
// }
//
// console.log(eindgetal. substring(0,afdruk.length-1) + "=" + faculteit);
// // nog af te werken.
//


//3. Schrijf een programma waar je het eindGetal vraag aan de gebruiker en als volgt afdruk op het scherm.
//
// var eindgetal = "";

// var totaal= 2;
//
//
// begingetal= parseInt(prompt("geef het getal in"));
// for(i=1;i<=eindgetal;i++){
//     if(
//
// console.log(teller + "+"+ getal +"=" +som)
// }
// // Q


// 4. schrijf een programma die de gebruiker vraagt im een zin in te geven.
// Uiteindelijk dienen het aantal karakters en het aantak woorden van die zin te worden geteld.
//let op spatie telt niet mee als karakter

// // nodig: count? 00
// // om spatie te elimineren moet je --" " gebruiken
// var zin = prompt("Geef een zin in:");
// var aantalWoorden = 0;
// var aantalKarakters= 0;
// for(i=1;i<=zin.length;i++){
//     if(zin.substring(i,i+1)==" "){
//
//         aantalWoorden++;
//     }
// }
// aantalKarakters = parseInt(zin.length)- aantalWoorden;
// aantalWoorden = aantalWoorden+1;
// console.log("Aantal karakters: " + aantalKarakters);
// console.log("Aantal woorden: " + aantalWoorden);
//
//
/*
// /*vraag aan de gebruiker zijn naam welk beroep hij heeft, bediende, arbeider, of werkzoekende*/
// var naam = prompt("geef je naam in ");
// var beroep= prompt("geef je beroep in, maak een keuze uit arbeider, bediende of werkzoekende");
//
// if(beroep =="bediende"){
//     console.log("beroep van "+ naam + " is " + beroep);
// }else if(beroep == "arbeider"){
//         console.log("Beroep van "+ naam + " is " + beroep);
// }else{
//     console.log("beroep van " + naam + " is "+ beroep);
// }
// */
//
// for ( var i= 10; i>0; i--){
//     console.log(i);
// }
// for(var i= 1; i<=10;i+=2){
//     console.log(i);
// }
// for(var i = 1; i<=10; i--){
//     console.log(i);
// }

// var text= " ";
// var i = 0
//
// while(i<10){
//     text += "de nummers zijn "+ i;
//     i++;
// }
// console.log(text);
//
// var elements = document.getElementsByClassName("*");
// console.time(" loop time");
// for ( var i=0; i<5000; i++){
//     for(var j=0, length= elements.length; j <length; j++){
//         //nothing to do
//     }
// }
// console.timeEnd("Loop time");

// var leeftijd = parseInt(prompt(" wat is je leeftijd"));
// if(leeftijd>= 18){
//     console.log(" je bent " + leeftijd + "jaar oud, je mag meedoen");
// }else{(leeftijd<18)
//     console.log(" je leeftijd is " + leeftijd + " minimumleeftijd om deel te nemen aan de loterij is 18j")
// }
// var geboorteJaar = parseInt(prompt(" Geef je geboortejaar in"));
// var lopendJaar= parseInt((prompt(" Geef het huidig jaartal in")));
//
// if(lopendJaar- geboorteJaar>= 18){
//     console.log( "vanaf nu mag ik, kan en beslis ik alles binnen de wettelijke grenzen")
// }else{
//     console.log(" Gelukkig heb ik mijn ouders die alles voor me regelen ")
// }
//

// getal1 = parseInt((prompt("Geef getal 1 in")));
// getal2 = parseInt((prompt("Geef getal 2 in")));
// getal3 = parseInt((prompt("Geef getal 3 in")));
// som = "";
// var teller = 1;
//
// for(i= teller; i<=teller ; i++){
//     som = getal1+ getal2+ getal3;
//     i++
// }
// console.log(" de som van de 3 getallen is " + som)

// var aantalSterren = parseInt(prompt(" geef het aantal sterretjes in"));
// var sterretjes = "*";
// var totaal = sterretjes;
// var resultaat = "";
//
// for(i=1; i<=aantalSterren;i++){
//    resultaat = resultaat+sterretjes;
//    console.log(resultaat);
// }

// var aantalSterren= parseInt(prompt("geef het maximumaantal sterren in"));
// var sterretjes = "*";
// var resultaat = " ";
//
// for(var i=1; i>= aantalSterren;--i){;
//     sterretjes-= "*";
//     console.log(sterretjes);
// }
//
//
// var i = 0;
// var resultaat = " ";
//
// for(var i=0;i<=99;i++){
//     if(i<=10){
//         resultaat += "0" + i+",";
//     }else{
//         resultaat += 0 + i +",";
//     }
// }
// resultaat= resultaat.substr(0,resultaat.length-1);
// console.log(resultaat);

// var getal= parseInt(prompt("Geet een getal in die groter is dan 0"));
//
//
// for(i= 1;i<=getal;i++){
//     var hulpgetal = i%2;
//     if(hulpgetal==0) {
//         console.log(i);}
//     }
// /

// var karakter = parseInt(prompt('geef een karakter in'));
// var tekenreeks = parseInt(prompt("geef een zin in"));
//
// var aantalKarakters = 0;
// for (var plaats = 0; plaats < tekenReeks.length; plaats++)
// {
//     if (tekenReeks.charAt(plaats) == karakter)
//     {
//         aantalKarakters += 1;
//     }
// }
// console.log(aantalKarakters);

// var getal= parseInt(prompt("geef getal in"));
// var resultaat= "";
// var i = 1;
//
// for(var i; i<getal;i*=2){
//     resultaat = resultaat + i + ","; //resultaat+ i + de opvulbakje waar het moet worden weergegeven
// } // waarde *x vermenigvuldigen
//
// console.log(resultaat.substr(0,resultaat.length-1));

// var string= "Fullstack developers";
// console.log( string.replace("a","u"));
// console.log( string.replace("e","i"));

// var zin= prompt("geef een zin in");
// var welkeLetters= prompt(" Welke letters wil je vervangen");
// var vervangLetters= prompt("In welke letters wil je de voorgaande veranderenK.");
// var resultaat= "";
// var letterReeks = welkeLetters.split("a","e");
// var vervangReeks= vervangLetters.split("u", "i");
//
// for(i= 0 ;i<zin;i++){
//     var mijnKarakter= zin.substr(i,i+1);
//     if(letterReeks.indexOf(mijnKarakter>=0)){
//         resultaat+= vervangReeks[letterReeks.indexOf(mijnKarakter)];
//     }
//     else
//         resultaat+= mijnKarakter;
// }
// console.log("resultaat"+resultaat);
//
// var eindGetal = parseInt(prompt("Geef een eindGetal in:"));
// var totaal = 2;
// var resultaat=""
// for(i=1;i<=eindGetal;i++){
//     if(i%2!==0){
//         totaal = totaal - i;
//         resultaat = resultaat + i + "+";
//     }else{
//         totaal = totaal + i;
//         resultaat = resultaat + i + "-";
//     }
// }
// console.log(resultaat.substring(0,resultaat.length-1) + " = " + totaal);
var zin = prompt("Geef een string in");
console.log(zin.split("").reverse().join(""));