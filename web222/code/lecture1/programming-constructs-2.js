/* instruction: copy the content of this file into Firefox Scratchpad, 
                then highlight the segment of code and click "Run". */

/****************************************
* Programming Constructs - (3) Iteration
* - Three basic types of loop structures:
****************************************/
// the for loop
var days = "The days in september: \n"; 
for (var ident = 1 ; ident <= 30 ; ident++) {
	days += i + " ";
}
alert(days);


// the for in loop
var student = {name:"John", program:"CPD", semester:2};  
var output = "The property and value pairs of the student object: \n";

for (var x in student) 
{ 
    output += x + ": " + student[x] + "\n";
}

alert(output);


// the while loop
var text = "";
var i = 0;
while (i < 10) {
    text += "\nThe number is " + i;
    i++;
}
console.log(text);	
	
// do-while loop
var i=10;
do {
    alert("week "+i);
    i++;
} while (i<15)

// using break in loop
var i=1, 
    j=1;
while (i<5)
{
   alert('week: '+i );
   for (j=1; j<=7; j++)
   {
     alert('day:'+j +' of week:'+ i);
     if (j==3)
        break; // Break the current loop and continue with the next value.  
   } // for
   i++;
} // while


/****************************************
* Programming Constructs - (4) Function
****************************************/


