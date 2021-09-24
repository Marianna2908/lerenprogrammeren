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
i = 10
for(i;i>=10;i--){
    console.log(i);
}


var text = ""// iets leeg in een vakje steken;
var i = 0;
while(i < 10){
    text += "<br>Den nummers zijn" +i;
    i++;
}
document.getElementById("demo").innerHTML=text;