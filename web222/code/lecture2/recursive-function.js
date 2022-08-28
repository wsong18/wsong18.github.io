function factorial(n){
	return  (n <= 1) ? 1 : n * factorial(n-1);
} // recursion

do {
	var x = Number(prompt("Enter a number (0 to stop):", 1));
	if (x != 0)
		alert("The factorial of "+ x + " is: "+ factorial(x));
	else 
		alert("Please input the number greater than 0!");
} while (x != 0);

