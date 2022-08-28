// instruction: copy the content of this file into Firefox Scratchpad, 
//             then highlight the segment of code and click "Run".

/****************************************************
* A closure example - simple full-function calculator
*****************************************************/

var calc = (function () {
    var base = 0;
 
    return {
        init: function (n) {
            base = n;
            return base;
        },
        add: function (n) {
            base += n;
            return base;
        },
        sub: function (n) {
            base -= n;
            return base;
        },
        mul: function (n) {
            base *= n;
            return base;
        },
        div: function (n) {
            base /= n;
            return base;
        }
    };
}());

var c = calc;
 
// Call the methods...
c.init(100);
console.log(c.add(3));    // 103
console.log(calc.add(3)); // 106, c is just a alias of calc
console.log(c.add(3));    // 109
console.log(c.sub(59));   // 50
console.log(c.mul(14.8)); // 740
console.log(c.div(4.7));  // 157.4468085106383


/******************************************************
* A multiply-nested closure example: defining an anonymous 
* function that can be used to create several counters.
*******************************************************/
var makeCounter = function() {
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
};

var counter1 = makeCounter();
var counter2 = makeCounter();
alert(counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
alert(counter1.value()); /* Alerts 2 */
counter1.decrement();
alert(counter1.value()); /* Alerts 1 */
alert(counter2.value()); /* Alerts 0 */

