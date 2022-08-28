var myList = ["Apples", "Oranges", "Pears", "Bananas"];

window.onload = function(){
      var listContainer = document.querySelector("#outputList");

      var myListString = "<ul>"; // opening <ul>

      for(var i=0; i < myList.length; i++){ // list items <li></li>
            myListString += "<li>" + myList[i] + "</li>"
      }

      myListString += "</ul>"; // closing </ul>

      listContainer.innerHTML = myListString;
};
