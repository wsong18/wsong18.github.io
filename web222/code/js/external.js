function showCurrentDate() 
{
  var today = new Date();
  alert( "Today is " + today );
}

// set up event handler for level-2 heading using jQuery
$(document).ready(function(){
	$("h2").click(function(){
		$(this).hide();
	});
});