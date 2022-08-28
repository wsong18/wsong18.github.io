// instruction: copy the content of this file into Firefox Scratchpad, 
//             then highlight the segment of code and click "Run".

/*******************************************************
* Creating user-defined object using literal notation
********************************************************/

var person1 = { "name": "John", "age": 30 };
// can be simplified as:
// var person1 = { name: "John", age: 30 };
console.log( person1.name );


var person2 = {
    name: "Steven",
    age: 25,
    show: function () {
        'use strict';
        console.log('I am ' + this.name + ", and I'm " + this.age + " years old.");
    }
};

console.log( persion2.name);
person2.show(); // My name is Steven, and I'm 25 years old.

/*******************************************************
* Creating user-defined object using literal notation
********************************************************/

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.show = function () {
        console.log('My name is ' + this.name + ", and I'm " + this.age + " years old.");
    };
}

var person3 = new Person("Steven", 30);
console.log( persion3.age);
person3.show(); // My name is Steven, and I'm 30 years old.


/*******************************************************
* Creating user-defined object - dynamically add object members.
********************************************************/
var person4 = {};
// equivalent to: var person4 = new Object();

person4.name = "James";
person4.age = 30;
person4.show = function () {
    console.log('My name is ' + this.name + ", and I'm "
        + this.age + " years old.");
};

person4.show();

