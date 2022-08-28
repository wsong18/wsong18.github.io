// instruction: copy the code of this file into Firefox Scratchpad, 
//          then highlight the segment of code and click "Run".

/*******************************************************
* Inheritance using prototype property
********************************************************/

var triangle = {a:1, b:2, c:3};

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (var prop in obj) {
  if( obj.hasOwnProperty( prop ) ) {
    console.log("obj." + prop + " = " + obj[prop]);
  } 
}
// Output:
// "obj.color = red"

for (var prop in obj) {
  if( !obj.hasOwnProperty( prop ) ) {
    console.log("obj." + prop + " = " + obj[prop]);
  } 
}
// Output:
// "obj.a = 1" Scratchpad/9:22
// "obj.b = 2" Scratchpad/9:22
// "obj.c = 3"

/*******************************************************
* Inheritance using Object.create()
********************************************************/

var person = {
    name: "Steven",
    age: 25,
    show: function () {
        console.log('I am ' + this.name + ", and I'm " + this.age +
            " years old.");
    }
};

// creates a student object that uses person as prototype
var student = Object.create(person);
student.show();  // I am Steven, and I'm 25 years old.

student.name = "John";
student.age = 20;

student.show();  // I am John, and I'm 20 years old.

/*******************************************************
* Inheritance using Object.create()
********************************************************/
var person = {
    name: "Steven",
    age: 25,
    show: function () {
        console.log('I am ' + this.name + ", and I'm " + this.age +
             " years old.");
    }
};

// creates a student object that uses person as prototype
var student = Object.create(person);
student.show();  // I am Steven and I’m 25 years old.

student.name = "John";
student.age = 20;

student.show();  // I am John, and I'm 20 years old.

/*******************************************************
* Extending the properties of constructor
********************************************************/

function Person (name, age) {  
    this.name = name; 
    this.age = 30;
}

// extending property and method of constructor of Person
Person.prototype.from = "Toronto";
Person.language = "English";
Person.prototype.say = function() {
    console.log('I am ' + this.name + ". I'm from " + this.from + " and speak " + this.language);
}

var person1 = new Person("John", 25);
person1.say(); // I am John. I'm from Toronto and speak undefined

person1.from = "Montréal‎";
person1.name = "Stéphane";
person1.language = "French";
person1.say(); // I am Stéphane. I'm from Montréal‎ and speak French

