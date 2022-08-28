/*****************************************************************
 * In Firefox Scratchpad, click "Run" button to run the following 
 * code. The following 3 ways can be used for JavaScript debugging:
 *   1. Observe how the string and arrays are displayed in the 
 *      alert() pop-up window.
 *   2. Highlight each variable (myString, myArray1, myArray2, 
 *      myArrau3) and click the "Inspect" button to see how to 
 *      check the variable values in Scrachpad.
 *   3. On Firefox browser, type Ctrl+Shift+j to open Browser Console
 *      window. Inspect how the string and array variables displayed 
 *      in Browser Console by using console.log() function.
 *
 * In addition, the JavaScipt sytax errors, exceptions, or runtime 
 * errors will be showed in Scratchpad or/and Browser Console.
 ****************************************************************/
 
var  myString    =  "INT 222";

var  myArray1    =  myString.split(' ');
var  myArray2    =  myString.split('2');
var  myArray3    =  myString.split('22');

alert( "myString: " + myString );
alert( "myArray1: " + myArray1 ); 
alert( "myArray2: " + myArray2 ); 
alert( "myArray3: " + myArray3 ); 

console.log( myString );
console.log( myArray1 );
console.log( myArray2 );
console.log( myArray3 );
console.log( myArray5 ); // gives Exception which will be showed in 
                         // both Browser Console and Scriptpad