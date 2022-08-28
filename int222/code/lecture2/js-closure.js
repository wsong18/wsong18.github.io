// instruction: copy the content of this file into Firefox Scratchpad, 
//              then highlight the segment of code and click "Run".

/************************************************
 * JS closure example: student with program name.
 ************************************************/
function program(prog) {
   function student(name) {
      return "Student name: " + name + ", \nProgram: " + prog;
   }
   return student;
}

var bsd_student = program("BSD"); // returns the inner function 
                                  // with an initial program value
var cpa_student = program("CPA");

var john = bsd_student("John Smith");
var dave = cpa_student("Dave Lee");

var dave2 = program("BSD")("Jr. Dave Lee");

console.log(john);
console.log(dave);
console.log(dave2);

/****************************************
* A simple closure example - incrementer
****************************************/
var incrementer = function() { // outer function
	var count = 0;
	return function () { // inner function
		return ++count;
	};
}

var inc = incrementer();
var count = inc();
console.log(count); // 1
count = inc();
console.log(count); // 2
console.log(inc()); // 3

/****************************************
* Improved Counter Using Closure
****************************************/

var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
})();
 
console.log('Counter value  ' + counter.value()); // returns 0
console.log(counter.increment());
// counter increased but the return result is 'undefined'(due to no return)
 
console.log('Counter value  ' + counter.value()); // returns 1
 
counter.increment();
counter.increment();
console.log('Two increments ' + counter.value()); // returns 3
 
counter.decrement();
console.log('Decrement      ' + counter.value()); // returns 2