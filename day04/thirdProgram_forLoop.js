//find odd numbers from 1 t0 20
let num =20;
console.log ("Below are the odd numbers:"); //print the log
function oddNumbers() { // function definition
    //for (let i =0, i<=20;i++) -- assigned with 20
for (let i=0;i<=num;i++)  //Used declared variable
if(i%2!=0){               //condition to check
    console.log (i);      //prints the value in console
}
}
oddNumbers();    //calling a function


// if i value need to be changed just change num value.