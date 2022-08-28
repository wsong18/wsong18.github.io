var myColors = ["Pink", "Red", "Orange", "Blue"];

function showArray1() { // for loop
   var message = "function showArray1()\n\n"; 
   for (var x=0; x < myColors.length; x++) { // recommended
      message+= myColors[x] + "\n"; 
   } 
   alert(message); 
} // end of function 

function showArray2() { // for in loop  is not recommended for Array
   var message = "function showArray2()\n\n"; 
   for (var x in myColors) { 
      message+= myColors[x] + "\n"; 
   } 
   alert(message); 
} // end of function 

showArray1();
showArray2();
