/*
 Jeschrijft 3 arrays.
 De eerste 2 arrays vuljemeteenlusopmetwaardenvan0tem10.
  Dederdearrayvuljevervolgensopmetdedesomvandewaardeninarrays1en2.
  Weergaveophetscherm:
  1+1=2
  2+2=4
  3+3=6
  4+4=8
*/

var getal1 = [];
var getal2 = [];
let som= 0;
let teller= 0;

while(teller < 11){
    getal1.push(teller);
    getal2.push(teller)
    teller++;
}
teller =1
while(teller<=10){
    som=getal1[teller]+getal2[teller];
    console.log(getal1[teller], "+" , getal2[teller], "=" + som);
    teller++
}
