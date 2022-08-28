// Subject       : WEB222 
// Author        : Your Name
// Written on    : 
// Last Modified : 

function checkForm() {
   var NoOfOptions = document.example.whatToDo.options.length;
   var messages="<p>No. of select whatToDo options = <mark>" + NoOfOptions + "</mark></p>";

   var whichOneSelected = document.example.whatToDo.selectedIndex;
  

   if (whichOneSelected == -1) {                                        
        messages += "<p>None selected</p>"; 
        showErrors(messages); 
        return false; // return false - allow for changes - form not submitted
   }
   else {       
        messages += "<p>You have selected - <mark>";
        messages += document.example.whatToDo.options[whichOneSelected].text + "</mark> with a value of <mark>";
        messages += document.example.whatToDo.options[whichOneSelected].value + "</mark></p>";
        showErrors(messages);       
        return false; // should be changed to "return true;"  
   }
} 


function showErrors(messages) {  
    document.getElementById('errors').innerHTML = messages;
}  

function  clearShowErrors() {
   document.getElementById('errors').innerHTML = " ";
   document.getElementById('client').focus();         
}  
