var registeredNames = [];
var patt1 = /^[a-zA-Z]{4,}$/;

while(true){
   var name = prompt("Please enter a name");
   if(name && name != "null") {
      if(patt1.test(name)) {
         registeredNames.push(name);
         alert(name + ": registered!");
      }    
      else alert("At least 4 alphabetical alphabetic character! \nTry again.");
}
   else break; // when type nothing ("") or cancel
}

alert("Registered Students: " + registeredNames);
