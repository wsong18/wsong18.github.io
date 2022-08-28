// instruction: copy the code of this file into Firefox Scratchpad, then highlight
//             then highlight the segment of code and click "Run".

/*******************************************************
* Example of subjects for School of ICT
********************************************************/

var subject = {
    code: "",
    desc: "",
    prog: [], //  the prog property is an array
    info: {}  //  the info property is an object
};

// subject instances using the Object.create method.
var web222 = Object.create(subject);
web222.code = 'WEB222';
web222.desc = 'Web Programming Principles';
web222.prog = ['CPD', 'CPA'];
web222.info = { hours: 4, url:'http://scs.senecac.on.ca/course/web222' }

var ipc144 = Object.create(subject);
ipc144.code = 'IPC144';
ipc144.desc = 'Introduction to Programming Using C';
ipc144.prog = ['CPD', 'CPA', 'CTY'];
ipc144.info = { hours: 5, url:'http://scs.senecac.on.ca/course/ipc144' }

//All subjects
// Create a collection of all subject objects
var all = [ipc144, web222];
 
// Declare and initialize an accumulator
var totalHours = 0;
 
// Go through the collection, accumulate hours, dump to the Web Console
for (var i = 0; i < all.length; i++) {
    totalHours += all[i].info.hours;
    console.log(all[i]);
};
 
// Report the total hours
console.log('Total hours is ' + totalHours);


/*******************************************************
* Example of students for School of ICT
********************************************************/

var person = {
    name: "",
    bday: new Date(),
    mail: "",
    prnt: function () {
        return 'Info for ' + this.name + ', born on ' + 
                    this.bday.toLocaleDateString() + ', email ' + this.mail;
    }
};


// create student object 
var student = Object.create(person,  { prog: { value: '' }, stid: { value: '' }});

var stu1 = Object.create(student);
stu1.name = 'Stanley';
stu1.bday = new Date(1983, 10, 15);
stu1.mail = 'stan@myseneca.ca';
stu1.prog = 'BSD';
stu1.stid = '012345678';

console.log(stu1);

var x =stu1.prnt();
console.log(x);
//