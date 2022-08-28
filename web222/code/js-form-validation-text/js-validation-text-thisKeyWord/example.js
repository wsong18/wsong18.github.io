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

     function formValidationExample(info) {

       var errMessages = "";             // Initialize for each time the function is called

       errMessages = validateSurname(errMessages, info);  // Call name validation function
	   errMessages = validatePhoneNumber(errMessages, info);  // Call phone number validation function

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
     // ** Function Name : validateSurname()                         **
     // **                                                            **
     // ** Called from   : formValidationExample()                    **
     // ****************************************************************
     // ** Function Description                                       **
     // ** ====================                                       **
     // **                                                            **
     // ** This function ......                                       **
     // **                                                            **
     // ****************************************************************

     function validateSurname(errMessages, frm) {

       var nameMessageRules="<p> - Please enter a minimum of 4 alphabetic characters</p>";

       var stringName = frm.surname.value;
       stringName = stringName.trim();

       var stringLength = stringName.length;

       if (stringLength == 0) { 
           errMessages += "<p><mark>Name</mark><br /> - The name field can not be left empty or just blank characters<br />" + nameMessageRules + "</p>";
		   return errMessages;
       } 

	   if (stringLength < 4) {
           errMessages += "<p><mark>Name</mark><br /> - You did not enter enough charcaters for the name<br />" + nameMessageRules + "</p>";
		   return errMessages;
       }
		
       var countNonAlpha = 0;		
	   stringName = stringName.toUpperCase(); // easier to check  - otherwise you will need to check for upper and lower case inside the for loop                 

	   for (var i=0;i<stringLength;i++ ) {
		  if (! ( (stringName.charCodeAt(i) > 64) && (stringName.charCodeAt(i) < 91) ) ) {  // A=65  .....  Z=90 - upper case range
			 countNonAlpha++;
			 break;
		  } 
	   } // End of the for loop

	   if  (countNonAlpha) {
		  errMessages +="<p><mark>Name</mark><br /> - Only alphabetic characters are allowed for the name<br />" + nameMessageRules + "</p>";
	   }
	   
	   return errMessages;

     }  //  End of function

	 // ****************************************************************
     // ** Function Name : validatePhoneNumber()                         **
     // **                                                            **
     // ** Called from   : formValidationExample()                    **
     // ****************************************************************
     // ** Function Description                                       **
     // ** ====================                                       **
     // **                                                            **
     // ** This function .........                                    **
     // **                                                            **
     // ****************************************************************

     function validatePhoneNumber(errMessages,fm) {

       var messageRules="<p> - Please enter a phone number with the format of ###-###-####.</p>";

       var str = fm.phone.value;
       str = str.trim();

       var stringLength = str.length;

       if (stringLength == 0) { 
           errMessages += "<p><mark>Phone Number</mark><br /> - The phone number field can not be left empty or just blank characters<br />" + messageRules + "</p>";
		   return errMessages;
       }  

       if (str.charAt(3) !== '-' || str.charAt(7) !== '-' || stringLength !== 12) {
	       errMessages += "<p><mark>Phone Number</mark><br /> - The phone number was in wrong format.<br />" + messageRules + "</p>";
		   return errMessages;
	   }  
       else { 
	       var i, flag = true, myArray = str.split('-');
		   for (i = 0; i <3; i++) {
		      if (parseInt(myArray[i]) != myArray[i]) {
			     flag = false;
				 break;
			  }
		   }
		   
		   if (!flag) {
		      errMessages += "<p><mark>Phone Number</mark><br /> - The phone number was in wrong format.<br />" + messageRules + "</p>";
		      return errMessages;
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

        document.getElementById('errors').innerHTML = "";
        document.getElementById('client').focus();         
     }  //  End of function
