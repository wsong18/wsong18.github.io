var myData = [{user: "James", address: "123 Keele St. Toronto, ON.", email:"james12@myseneca.ca"},
              {user: "Mary", address: "92 Appleby Ave. Hamilton, ON.", email:"mary356@myseneca.ca"},
              {user: "Paul", address: "70 The Pond Rd. North Youk, ON.", email:"paul345@myseneca.ca"},
              {user: "Catherine", address: "1121 New St. Burlington, ON.", email:"catherine89@myseneca.ca"}];

window.onload = function() {		 
   document.querySelector("#button1").onclick = generateTable;
}

function generateTable(){
   // get the reference for the body
   var tbl = document.querySelector("#outputTable");
 
   // revove existing Body element
   var tblExistingBody = tbl.querySelector("tbody");
   if (tblExistingBody) tbl.removeChild(tblExistingBody);
   
   // creates a <tbody> element
   var tblBody = document.createElement("tbody");
 
   // creating all table rows
   for (var i = 0; i < myData.length; i++) {
      // creates a table row
      var row = document.createElement("tr");
 
      // Create a <td> element and put them at the end of the table row
      row.appendChild(getTdElement(myData[i].user));
      row.appendChild(getTdElement(myData[i].address));
      row.appendChild(getTdLinkElement(myData[i].email, myData[i].email));
 
      // add the row to the end of the table body
      tblBody.appendChild(row);
   }
 
   // put the <tbody> in the <table>
   tbl.appendChild(tblBody);
}

// Create a <td> element and a text
function getTdElement(text) {
   var cell = document.createElement("td");
   var cellText = document.createTextNode(text);
   cell.appendChild(cellText);
   return cell;
}

// Create a <td> element with a hyperlink
function getTdLinkElement(text, href) {
   var anchor = document.createElement("a");
   anchor.setAttribute("href", "mailto:"+href);
   var anchorText = document.createTextNode(text);
   anchor.appendChild(anchorText);
   
   var cell = document.createElement("td");
   cell.appendChild(anchor);
   return cell;
}
