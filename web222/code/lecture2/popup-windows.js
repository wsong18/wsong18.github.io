// example - prompt() Function
var a = prompt("Enter first number"); // enter 11
var b = prompt("Enter second number"); // enter 12
var result = a + b;
alert("The result is " + result); 

// example - prompt() Function with default value
var school = prompt("What is your school?", "Seneca");
alert("The school you are attending :\n" + school);

// example - confirm() Function
var decision = confirm("Last chance:\n Are you sure you want to leave?");

if (decision) {   // pressed OK
	location.replace("http://www.cnn.com");
}
else {  // pressed cancel     
	alert("I'm glad you are staying.");
}
