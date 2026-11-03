//To remove the duplicates

let num = [10,20,10,30,20,40,10]; //declaring the arrays

let uniqueNum = [];
for (i=0;i<num.length;i++) { //length method used to get the real value in array
if (!uniqueNum.includes(num[i])){
    uniqueNum.push(num[i]);

}
}
console.log(uniqueNum);


//To find the duplicates
const numbers=[10, 20, 10, 30, 20, 40, 10];
const duplicates=[];

for(let i=0; i<numbers.length; i++){
    for(let j=i+1; j<numbers.length; j++){
        if(numbers[i]===numbers[j] && !duplicates.includes(numbers[i])) {
            duplicates.push(numbers[i]);
     
        }
    }
}
console.log("Duplicates are: " + duplicates);

