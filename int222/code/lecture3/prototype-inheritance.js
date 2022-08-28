// instruction: copy the code of this file into Firefox Scratchpad, 
//          then highlight the segment of code and click "Run".

/*******************************************************
* Inheritance with Object.create()
********************************************************/
var rectangle1 = {
    width: 10,
    height: 15,
    show: function () {
       alert('dimensions: ' + this.width + " x " + this.height);
    }
};

// creates a new rectangle using rectangle1 as prototype
var rectangle2 = Object.create(rectangle1); // prototype inheritance - clone
rectangle2.show();    // dimensions: 10 x 15

rectangle2.width = 20; 
rectangle2.height = 25;

rectangle2.show();  // dimensions: 20 x 25



/*******************************************************
* Inheritance with prototype property
********************************************************/
var rectangle1 = {
    width: 10,
    height: 15,
    show: function () { return 'dimensions: ' + this.width + " x " + this.height; }
};

function ColoredRectangle(color) {
    this.color = color;
}

ColoredRectangle.prototype = rectangle1; // make ColoredRectangle inherit
                                                                         // from rectangle1
ColoredRectangle.prototype.show = function () {
    return 'dimensions: ' + this.width + " x " + this.height 
               + " \ncolor: " + this.color; 
};        // add new method at run-time

var triangle2 = new ColoredRectangle("blue");

alert(triangle2.show());






