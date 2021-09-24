/*
var onderwijs = "vdab"
switch(onderwijs){
    case "vdab":
        console.log("cursus is gegeven door vdab");
        break;
    case"syntra":
        console.log("cursus wordt gegeven door suntra");
        break;
    default:
        console.log("gegeven door andere instelling");
}

*/
// de vraag die gesteld is waar wordt er les gevolgd? keuze stelling
var onderwijs = prompt("Keuze");
switch(onderwijs) {
    case "vdab":
        console.log("cursus is gegeven door vdab");
        break;
    case"syntra":
        console.log("cursus wordt gegeven door suntra");
        break;
    default:
        console.log("gegeven door andere instelling");
}
// Enkelvoudige selectie: shorthand
// mogelijke code die nog gebruikt kan worden.
/*
var x = 1
if(x==1){
    //code
} else{
    //code
}

x==1 ? //code : //code               // dubbelpunt wordt beschouwd "anders ( else)
*/

