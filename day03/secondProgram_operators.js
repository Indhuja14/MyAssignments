var num = -8;

if (num===0)
    { 
        console.log ("number is zero")
}
else if (num>0 && num%2 == 0 )
  { 
        console.log ("Positive even number")
}
else if (num>0 && num%2 !== 0 )
  { 
        console.log ("Positive odd  number")
}
else if (num<0 && num%2 == 0 )
  { 
        console.log ("negative even number")
}

else {
    console.log ("negative odd number")
}