//we maken onze klaslijst. Vraag aan de gebruiker,
// hoeveel namen hij wil ingeven en vul deze in een array in.
// zorg ervoor dat je de namen onder elkaar afdrukt op de volgende manier
//  Dirk
//Sam
//  Luc
//Bob


// nodig: push! om weergave te geven
var namenLijst= [];
var naam= "";
var aantalNamen;

aantalNamen = parseInt((prompt("Hoeveel namen wenst u in te geven")));
for(i=0;i<=aantalNamen-1;i++){
    namenLijst.push(prompt("geef een naam in;" ));              // namenlijst moest onder elkaar afgedrukt worden en met spaties

    if(i%2==0){
        console.log("   "+namenLijst[i]);
    }else{
        console.log(namenLijst[i]);
    }
}
console.log(namenLijst);
