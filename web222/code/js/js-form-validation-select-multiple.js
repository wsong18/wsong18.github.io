// Subject       : WEB222 
// Author        : Your Name
// Written on    : 
// Last Modified : 


function checkForm() {
   var NoOfOptions = document.example.whatToDo.options.length;
   var messages="<p>No. of select wish list options = <mark>" + NoOfOptions + "</mark></p>";
   var result="";
   
   for (var i = 0; i < NoOfOptions; i++) {
      if (document.example.whatToDo[i].selected==true) {
         result += "<p>You have selected <mark>";
         result += document.example.whatToDo[i].text + "</mark> with a value of <mark>";
         result += document.example.whatToDo[i].value + "</mark></p>";
      } 
   } 
   
   if (result=="") { 
        messages += "<p>None selected</p>"; 
        showErrors(messages); 
        return false; 
   }
   else { 
        messages += "<p>You have selected - <mark>" + result + "</p>";
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
