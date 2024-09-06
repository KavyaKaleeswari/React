
/*
        isNaN - is not a number
               ->it return true for string 
               ->it return false for number
        */

let a = 401;
let result = isNaN(a);
if (result == true)
    console.log(a, "is a string type");
else {
    console.log(a, "is a number type");
    if (a % 2 == 0) {
        console.log(a, "is even number")
    }
    else {
        console.log(a, "is odd number");
    }
}