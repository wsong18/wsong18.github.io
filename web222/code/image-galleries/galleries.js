var galleries;

function show_gallery(number)
{
  var gallery = document.getElementById("gallery");

  gallery.innerHTML = "<h3>" + galleries[number].title + "</h3>";
  gallery.innerHTML += "<p>" + galleries[number].desc + "</p><hr />";
  gallery.innerHTML += "<div class='imageGrid' >";

  
  for (var i = 0; i < galleries[number].images.length; i++) {
	
	gallery.innerHTML += "<img src='images/" + galleries[number].images[i] + "' alt='' >";

  }

  gallery.innerHTML += "</div>";
}

function load_galleries()
{
	galleries = [{"title": "Gardening", "desc": "I like gardening", 
					images:["garden-1.jpg", "garden-2.jpg", "garden-3.jpg", "garden-4.jpg", "garden-5.jpg", "garden-6.jpg", "garden-7.jpg", "garden-1.jpg"]}, 
				   {"title": "Park", "desc": "Beautiful autumn scenery in the Park", 
					images:["park-1.jpg", "park-2.jpg", "park-3.jpg", "park-4.jpg", "park-5.jpg", "park-6.jpg", "park-7.jpg", "park-3.jpg"]}, 
				   {"title": "Travel", "desc": "I enjoy traveling", 
					images:["travel-1.jpg", "travel-2.jpg", "travel-3.jpg", "travel-4.jpg", "travel-5.jpg", "travel-6.jpg", 
					"travel-7.jpg", "travel-8.jpg", "travel-9.jpg", "travel-10.jpg", "travel-11.jpg" , "travel-11.jpg"]}, 
				   {"title": "YorkU", "desc": "I actually like Seneca@York", 
					images:["york-1.jpg", "york-2.jpg", "york-3.jpg", "york-4.jpg", "york-5.jpg", "york-6.jpg", "york-7.jpg", 
					"york-8.jpg", "york-9.jpg", "york-10.jpg", "york-11.jpg" , "york-12.jpg"]}];
}

function show_date() 
{			
  var d = new Date();
  var ftr = document.getElementById("today");
  ftr.innerHTML = "<h4>&nbsp;&nbsp;" + d.toLocaleString() + "</h4>";
}

window.onload = show_date();
window.onload = load_galleries();
window.onload = show_gallery(0);