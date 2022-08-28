//var myViewModel = { personName: 'Bob', personAge: 123 };
var myViewModel = {
    personName: ko.observable('Bob'), //Responding to View Model Changes
    personAge: ko.observable(123)
};

var myPersonModel = { personName: 'Bob2', personAge: 123 };
var myPetModel = { petName: 'Fluffy', personAge: 6 };

/********** The Mapping Plugin ***********/
var employeeFirstModel = {}; // single Employee model
var employeesModel = {}; // Employee list model

$(function(){
    ko.applyBindings(myViewModel, $("#first")[0]); // $("body")[0]) conflicts with next two
    ko.applyBindings(myPersonModel, $("#person")[0]);
    ko.applyBindings(myPetModel, $("#pet")[0]);
	

});

window.setTimeout(function(){
    myViewModel.personName("Dave");
},2000);

/********** The Mapping Plugin ***********/

	$.ajax({  //if run index.html from scs: Blocked loading mixed active content “http://localhost:8081/employees”
		url: "http://localhost:8081/employees",
		type: "GET",
		contentType: "application/json"
	})
	.done(function (data) {
		// The Mapping Plugin - Using Existing Data - Single object
		employeeFirstModel = ko.mapping.fromJS(data[0]);
		console.log(data[0]);
		ko.applyBindings(employeeFirstModel, $("#employee1")[0]);
		
		// The Mapping Plugin - Using Existing Data - Object array
		employeesModel = ko.mapping.fromJS(data);
		console.log(data);
		ko.applyBindings(employeesModel);

		// Loop and manually Subscribe to every element's First & Last Name Properties
		employeesModel().forEach(function(element) {
			element.FirstName.subscribe(function(newValue){
				element.isDirty = true;
			});  
			
			element.LastName.subscribe(function(newValue){
				element.isDirty = true;
			}); 
		});
	})
	.fail(function (err) {
		console.log("Unable to show Employee List");
	});







