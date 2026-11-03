//Arrays and functions:

//Storing diff names and numbers

//to store multiple numbers or 5 diff numbers/names/values


//To store all value in single variable that is what arrays. Applicable for all datatypes
//Store5 diff numbers
let numbers = [1,2,3,4,5]; //pass arrays in square bracket , it ACCEPT all data types
//these are the arrays value and numbers is an array and those are stored using indeex
//1 is 0 index and followed by 5 is 4th index
//numbers are variable name
//numbers[0]=1 will be stored so like wise number[4]=5 will be stored

//to print  the arrays using arrayname
console.log(numbers);
console.log(typeof numbers); //prints object

//to print a particular value
console.log(numbers[2]); //prints particulary on index 2
console.log(numbers[6]); //prints particulary on index 6 its not avialble so o/p is undefined


//length - to count the number of values numbers.length (numbers is array name and length provide count)
console.log(numbers.length); //o/p is 5 //length is a method
//length is one greater than last index

//to print all the values
// 0 1 2 3 4 - index
// 1 2 3 4 5 - values
for (let i=0;i<numbers.length;i++){ // i holds 5
console.log(numbers[i]);
//console.log(numbers[0]); //o/p - 1
//console.log(numbers[1]); //o/p - 2
//console.log(numbers[2]); //o/p - 3
//console.log(numbers[3]); //o/p - 4
//console.log(numbers[4]); //o/p - 5
}

//to add/remove values to arrays
// we use  .push method to add single/multiple values
let ages =[10,20,30];
ages.push(40); //ages is a arrray name
console.log (ages); //40 pushed to end

//unshift - to add element starting of an array
ages.unshift(50);
console.log (ages); // 50 added at beginning

//remove - to remove only 1 element
//pop(); is a method
ages.pop();
console.log(ages); //last eleemnt 40 is removed

//shift - remove a single element at start
ages.shift();
console.log(ages);  // first element 50 is removed we dont have method to remove mutiple element

//splice() - remove - will  update original array
ages.splice(1); // which removes from 1st index 
//    0  1   2 - arrays
// [ 10, 20, 30 ] - current ages
console.log(ages);  


//slice() - will not update original array
//array      0   1  2  3 4  5
let scores =[33,44,55,66,77,88]; //will crop particular section and return
let slicedArray=scores.slice(2,4); //it will start from 2 and cropt till 3 and not reach 4
console.log(slicedArray);

//sort the arrays - to sort in asc order
//string array wil be arranged in alphabtical order
//for numbers asc  desc orders
let num = [12,4,46,18];
num.sort((a,b)=>a-b); //user defined varaibbles , highest value move to right after comparsion
console.log (num);

let num1 = [14,426,128];
num1.sort((b,a)=>b-a); //user defined varaibbles , highest value move to left after comparsion
console.log (num1);