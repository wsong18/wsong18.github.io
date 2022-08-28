var myData = [{user: "James", address: "123 Keele St. Toronto, ON."},
              {user: "Mary", address: "92 Appleby Ave. Hamilton, ON."},
              {user: "Catherine", address: "1121 New St. Burlington, ON."}];

window.onload = function(){
      var tableContainer = document.querySelector("#outputTable");

      var myRows = "";

      for(var i=0; i < myData.length; i++){ 
            myRows += "<tr>" +
                         "<td>" + myData[i].user + "</td>" + 
                         "<td>" + myData[i].address + "</td>" + 
                      "</tr>";
      }

      tableContainer.innerHTML += myRows; // append the new rows
};
