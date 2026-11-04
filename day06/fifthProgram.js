function reverseString() {
    let str = "Indhuja";
    let reverse = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
    }
    
    console.log(reverse); // Moved inside the function
}

reverseString(); // Call the function to execute it