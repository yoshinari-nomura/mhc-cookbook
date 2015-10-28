/* Full calendar viewer for mhc.
   <nom@quickhack.net>


   You can setup json data using mhc:

     mhc scan thismonth+6m  --search='category:"holiday"' \
                            --format=json > holidays.json
     mhc scan thismonth+6m  --search='!category:holiday'  \
                            --format=json > events.json



*/

function max_height_for(element) {
  var top = $(element).position().top;
  return $(window).height() - top - 5;
}

function adjust_height(element) {
  var height = max_height_for(element);
  $(element).fullCalendar('option', 'height', height);
}

$(document).ready(function() {

  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    height: max_height_for('#calendar'),
    editable: true,
    eventLimit: true,
    selectable: true,
    droppable: true,
    timezone: 'Tokyo',
    timeFormat: "HH:mm",
    month: 'HH:mm',
    week: 'HH:mm',
    day: 'HH:mm',
    eventSources: ["./holidays.json", "./events.json"],

    viewDisplay: function(view) {
      alert(view.name);
      if(view.name == 'month') {
        adjust_height('#calendar');
      }
    },

    windowResize: function(view) {
      if(view.name == 'month') {
        adjust_height('#calendar');
      }
    }
  })
});
