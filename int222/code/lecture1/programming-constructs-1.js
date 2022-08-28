/* instruction: copy the content of this file into Firefox Scratchpad, 
                then highlight the segment of code and click "Run". */

/****************************************
* Programming Constructs - (1) Sequence
****************************************/
var x = 5,
    y = 3;
var z = x + y;
alert(z);

/****************************************
* Programming Constructs - (2) Selection
****************************************/
var grade, mark = prompt("Enter your mark:");

// if condition
if (mark >= 90) {
    grade = 'A+';
}

// if / else if
if (mark >= 90) {
    grade = 'A+';
} else if (mark >= 80) {
    grade = 'A';
} else if (mark >= 70) {
    grade = 'B';
} else if (mark >= 60) {
    grade = 'C';
} else if (mark >= 50) {
    grade = 'D';
} else {
    grade = "F";
}
alert("Your grade: " + grade);

// switch / case 
var semester = prompt("Enter CPD semester number (1 to 4)");

switch (semester) {
case '1':
    alert("IPC144, ULI101");
    break;
case '2':
    alert("OOP244, INT222");
    break;
case '3':
    alert("OOP344, INT322");
    break;
case '4':
    alert("JAC444, INT422");
    break;
default:
    alert("You may have graduated from CPD");
} 



