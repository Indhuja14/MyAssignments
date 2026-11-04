//Asynchronous and synchronous

//sync -  action one after another
//async - action happen concurrently
//Javascript - Aysync in nature
console.log ("code for enter username"); // 1 second to enter username
setTimeout  (()=>{
console.log ("code for enter password"); 
},5000)     // making to wait for 5 sec   to enter password           
//setTimeout is a mthd to purposely wait for sometime
//inside settimeout method used a function method ()
//inside that passing a value

console.log ("code for enter login button"); // 1 second to execute