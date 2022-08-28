function drawCalendar(pars) {
    var months = ['January','February','March','April','May','June','July',
                  'August','September','October','November','December'];
    var days =  ['Sunday','Monday','Tuesday','Wednesday', 'Thursday','Friday','Saturday'];
    var today = new Date();
    
    var canvas = document.getElementById("calendarCanvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        var img = new Image();
        img.onload = function(){
            ctx.drawImage(img,0,0);
            ctx.textAlign="center";
            
            ctx.fillStyle = "#FFFFFF";
            ctx.font="18px Arial";
            ctx.fillText(months[today.getMonth()],50,20);
            
            ctx.fillStyle = "#2c3e50";
            ctx.font="bold 45px Arial";
            ctx.fillText(today.getDate(),50,70);
            
            ctx.fillStyle = "#c0392b";
            ctx.font="16px Arial";
            ctx.fillText(days[today.getDay()],50,92);
        };
        img.src = (pars == "main") ? 'Flat-UI-master/images/calendar_background.png':
                                  '../Flat-UI-master/images/calendar_background.png';
    }

}


// add getWeek() function to JavaScript Date object.
Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1); // , 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()) / 7);
}


function highlightWeekRow(args) {
    if (args != "main") {
        // weekOffset needs to be adjusted each semester
        //var weekOffset = 2;  // Winter 2016
        //var weekOffset = 19;  // Summer 2016
        //var weekOffset = 36;  // Fall 2016
        //var weekOffset = 1;  // Winter 2017
        //var weekOffset = 18; // Summer 2017
        //var weekOffset = 39; //35;  // Fall 2017
        var weekOffset = 2;  // Winter 2018
        //var weekOffset = 18;  // Summer 2018
        //var weekOffset = 35;  // Fall 2018
        
        var rows = ["row0", "row1", "row2", "row3", "row4", "row5", "row6", "row7", "row8",
                    "row9", "row10", "row11", "row12", "row13", "row14", "row15"];
        var today = new Date();
        var row = document.getElementById(rows[today.getWeek() - weekOffset]);
        //row.className="highlight";
        row.style.backgroundColor='#e5f6ff';
        //row.style.backgroundImage="url('../Flat-UI-master/images/bk_tile.jpg')";
    }
}

function highlightPeriodRow(args) {
    if (args == "main") {
        var rows = [{row: "row0", hour: 7, minute: 10}, {row: "row1", hour: 8, minute: 0},
                    {row: "row2", hour: 8, minute: 55}, {row: "row3", hour: 9, minute: 50},
                    {row: "row4", hour: 10, minute: 45}, {row: "row5", hour: 11, minute: 40},
                    {row: "row6", hour: 12, minute: 35}, {row: "row7", hour: 13, minute: 30},
                    {row: "row8", hour: 14, minute: 25}, {row: "row9", hour: 15, minute: 20},
                    {row: "row10", hour: 16, minute: 15}];

        var today = new Date();
        var row = "row0";
        for (var i=0; i<rows.length; i++) {
            if ((today.getHours()-rows[i].hour)*60 + today.getMinutes() - rows[i].minute < 50) {
                row = rows[i].row;
                break;
            }
        }
        row = document.getElementById(row);
        //row.style.backgroundImage="url('./Flat-UI-master/images/bk_tile.jpg')";
        row.style.backgroundColor='#e5f6ff';
        //setTimeout(location.reload,60000);
    }
}

function init(args) {
    drawCalendar(args);
    if (args == "main") {
        highlightPeriodRow(args);
    }
    else {
        highlightWeekRow(args);    
    }
    
}


