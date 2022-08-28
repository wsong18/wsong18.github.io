var listTitle = "Students List (Alphabetical)";
var studentArray = ["John", "Bob", "Amy", "Haley", "Kimberly"];

window.onload = function() {
    
    var myTitle = document.querySelector("#title");
    myTitle.innerHTML = "<em>" + listTitle + "</em>";

    var myContainer = document.querySelector("#outputContainer");

    studentArray.sort();

    for (var i = 0; i < studentArray.length; i++) {
        myContainer.innerHTML += "<p>" + studentArray[i] + "</p>";
    }
};