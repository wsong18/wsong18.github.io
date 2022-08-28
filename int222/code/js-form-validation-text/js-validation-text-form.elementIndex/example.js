     // Subject       : INT222 
     // Author        : Your Name
     // Written on    : 
     // Last Modified : 


     // **************************************************************** 
     // ** Function Name : formValidationExample()
     // ** Called from   : index.html
     // ****************************************************************
     // ** Function Description
     // ** ====================
     // **
     // ** This function .........
     // **
     // ****************************************************************

     function formValidationExample() {

       var errMessages = "";             // Initialize for each time the function is called

       errMessages = validateSurname(errMessages);  // Call name validation function

       // call other field validation functions if required

       if (errMessages != "") {          // if true - there is at least one error
                                         // Prepare to show the errors detected
          showErrors(errMessages);       // Prepare to show the errors detected
          return false;                  // return false to the browser
                                         // in order for the form not be submitted
                                         // this will allow for corrections
       }                               
       else {
          clearShowErrors();                          
          return true;                   // No errors - return to browser and submit form
       }
 
     }  //  End of main function

     // ****************************************************************
     // ** Function Name : validateFieldOne()                         **
     // **                                                            **
     // ** Called from   : formValidationExample()                    **
     // ****************************************************************
     // ** Function Description                                       **
     // ** ====================                                       **
     // **                                                            **
     // ** This function .........                                    **
     // **                                                            **
     // ****************************************************************

     function validateSurname(errMessages) {

       var nameMessageRules="<p> - Please enter a minimum of 4 alphabetic characters</p>";
 
       var stringName = document.forms[0].elements[0].value;
       stringName = stringName.trim();

       var stringLength = stringName.length;

       if (stringLength == 0) { 
           errMessages += "<p><mark>Name</mark><br /> - The name field can not be left empty  or just blank characters<br />" + nameMessageRules + "</p>";
       }   
       else { 
           if (stringLength < 4) {
               errMessages += "<p><mark>Name</mark><br /> - You did not enter enough charcaters for the name<br />" + nameMessageRules + "</p>";
           } 
           else { 
               stringName = stringName.toUpperCase(); // easier to check  - otherwise you will need to check for upper and lower case inside the for loop                 

               var countNonAlpha = 0;                  
              
               for (var i=0;i<stringLength;i++ ) {

                   if (! ( (stringName.charCodeAt(i) > 64) && (stringName.charCodeAt(i) < 91) ) ) {  // A=65  .....  Z=90 - upper case range
                         countNonAlpha++;
                         break;
                   } 
       
               } // End of the for loop

               if  (countNonAlpha) {
                   errMessages +="<p><mark>Name</mark><br /> - Only alphabetic characters are allowed for the name<br />" + nameMessageRules + "</p>";
               }

           }
       } 

       return errMessages;

     }  //  End of function

     // ****************************************************************
     // ** Function Name : showErrors(messages)                       **
     // **                                                            **
     // ** Called from   : formValidationExample()                    **
     // ****************************************************************
     // ** Function Description                                       **
     // ** ====================                                       **
     // **                                                            **
     // ** This function is called if there are errors                **
     // **                                                            **
     // ****************************************************************


     function showErrors(messages) {
     
        document.getElementById('errors').innerHTML = messages;

     }  //  End of function


     // ****************************************************************
     // ** Function Name : clearShowErrors()                          **
     // **                                                            **
     // ** Called from   : the html file                              **
     // ****************************************************************
     // ** Function Description                                       **
     // ** ====================                                       **
     // **                                                            **
     // ** This function is called if the clear button is clicked on  **
     // **                                                            **
     // ****************************************************************

 
     function  clearShowErrors() {

        document.getElementById('errors').innerHTML = " ";
        document.getElementById('client').focus();         
     }  //  End of function
