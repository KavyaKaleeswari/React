
/*
    for(initialization;condition;incre/decre){
    statement
    }
*/
for (let a = 1; a <= 10; a++) {
    console.log(a);
}

console.log("---Descending order------");
for (let a = 10; a >= 1; a--) {
    console.log(a);
}
console.log("---increses by 2------");
for (let a = 1; a <= 20; a = a + 2) {
    console.log("the odd no:", a);
}
let oddlist = "";
let evenlist = "";

for (let a = 1; a <= 20; a++) {
    if (a % 2 == 0)
        evenlist = evenlist + a + "#";
    else
        oddlist = oddlist + a + "$";


}
console.log("Odd number 1 to 20 :", oddlist);
console.log("Even number 1 to 20 :", evenlist);

