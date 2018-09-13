$(window).on('load', function() {
  setTimeout(function () {

    $('body').append('<div id="trackerdiv" class="ui-widget-content draggable" style="cursor:move;position:fixed;left:6%;top:20%;z-index:9;border-radius:3px; background:#0D7DB5;color:#fff; padding: 10px 10px 20px 10px;">Goal Hours:<br><input type="text" id="goaldays" value="124" style="margin: 3px 0;" /><br>Hourly Wage:<br><input type="text" id="hourly" value="65" style="margin: 3px 0;" /><br>Vacation Days:<br><input type="text" id="vacadays" value="0" style="margin: 3px 0;" /><div id="statusupdate" style="color:#fff;padding: 5px 0 0 0;"></div></div>');
    //<br><button id="updatedays" style="margin-top: 10px;display: block;width: 100%;background: #85c51f;color: #fff;border: none;padding: 10px;text-transform: uppercase;cursor:pointer;">Update</button>
      $( ".draggable" ).draggable();
    
    caltime();
    function caltime() {
      var timetotal = parseInt($('.timeTotal.borderEnd').html());
      var earnings = timetotal * parseInt($('#hourly').val());
      var d = new Date();
      var month = d.getMonth()+1;
      var day = d.getDate();
      var year = d.getFullYear();

    // var getRemanningDays = function() {
        var date = new Date();
        var time = new Date(date.getTime());
        time.setMonth(date.getMonth() + 1);
        time.setDate(0);
        var days = time.getDate() > date.getDate() ? time.getDate() : 0;
        var vacadays = $('#vacadays').val();
        
        days = parseInt(days);
        //alert(vacadays + ' '+ days);
        //alert(days +' Days Remaining.');
        //$('#remainingday').html(days);
    //}

      var weekdays = 1;
      day = day - 1;

      for(var i=day; i< days; i++) {
        //if(i > day) {
          var dayy = new Date(year, month, i+1).getDay();
          if(dayy !=0 && dayy !=6) {
            weekdays++
          }
          //if (isWeekday(year, month, i+1)) weekdays++;
        //}
      }

      //var weekdays = getWeekdayInMonth(month, d.getFullYear());
      
      //currentDay
      var goal = parseInt($('#goaldays').val()) - timetotal;
      var per = goal / (weekdays - parseInt(vacadays));
      var total = per.toFixed(2);
      $('#statusupdate').html('$'+earnings+' earned.<br>To attain goal:<br>'+goal+' hrs, '+total+' hrs/day').css('text-align', 'left');
    }

    $('body').on('click', '#updatedays', function() {
      caltime();
    });
    $('#trackerdiv input').keyup(function() {
      caltime();
    });
   // alert(img);
  }, 100);
  console.log('make that money!');

  

  
});