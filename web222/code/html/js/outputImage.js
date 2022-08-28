var myImage = {
      alt: "Mountains",
      url: "http://www.senecacollege.ca/shared/.assets/drop-down-menus/programs-am.jpg"
};

window.onload = function(){
      var imageContainer = document.querySelector("#image");

      var myImageStr = "<img alt='" + myImage.alt + "'" + 
                        " src='" + myImage.url + "' />";

      imageContainer.innerHTML = myImageStr; // add the new image
};
