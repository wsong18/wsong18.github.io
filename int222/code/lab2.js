// INT222 lab 2

/******************************************
* Step 1
******************************************/
var e1, e2, e3, e4, e5, result;
var i;

/******************************************
* Step 2
******************************************/
function capFirstLetter(word) {
    return word.substr(0, 1).toUpperCase() + word.substr(1);
}

e1 = prompt("Enter your name in lower case", "wei");
e1 = capFirstLetter(e1);

/******************************************
* Step 3
******************************************/
var getAge = function (year) {
        var currentyear = (new Date()).getFullYear();
        return currentyear - year;
    };

e2 = prompt("Enter the year when you was born", "1963");
e2 = getAge(e2);
/******************************************
* Step 4
******************************************/
e3 = prompt("Enter the school you are attending: ", "Seneca College");

/******************************************
* Step 5
******************************************/
e4 = prompt("Enter the courses you're studying(lower case separated by ',')", "int222,ibc233,dbs201,oop244");
e4 = e4.split(',');
e5 = prompt("Enter a course you'd like to your study list: ", "eac150");
e4.push(e5);

/******************************************
* Step 6
******************************************/
for (i = 0; i < e4.length; i++) {
    e4[i] = e4[i].toUpperCase();
}
e4.sort();

/******************************************
* Step 7
******************************************/
result = "User information: \n\nName (e1): ";
result += e1 + "\nAge (e2): " + e2 + "\nSchool (e3): " + e3 + "\nCourses (e4): ";
for (i = 0; i < e4.length; i++) {
    result += "\n\t" + e4[i];
}

alert(result);
console.log(result);