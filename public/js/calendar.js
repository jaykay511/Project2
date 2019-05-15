// $(document).ready(function(){
//   moment.locale('fr');
//   var now = moment();
//   $('#calendar').Calendar({
//     events: [
//       { // An event on the current week on Wednesday from 10h to 12h
//         start: now.startOf('week').isoWeekday(3).startOf('day').add(10, 'h'),
//         end: now.startOf('week').isoWeekday(3).startOf('day').add(12, 'h'),
//         title: 'An event title !',
//         content: 'Hello World! <br>Foo Bar<p class="text-right">Wow this text is right aligned !</p>',
//         category: 'A test category name'
//       }
//     ]
//   }).init();
// });
$(document).ready(function(){
  moment.locale('en');
  var now = moment("2019,5,15 06:20").format("X");
  var endnow = moment("2019,5,15 06:20").add(1,"h").format("X");
  var timeslotevents = [];
  $(this).find('.timeslot').each(function(i, e){
      console.log("i: ",i);
      //timeslotevents.push({e: $(e).text()});
      timeslotevents.push({start: moment($(e).text()).format("X"), end: moment($(e).text()).add(1,"h").format("X"),title: $(e).attr('data-patientname')+" appointment", content: $(e).attr('data-doctorname')+"<br>"+$(e).attr('data-doctorspecialty')});
      console.log(moment($(e).text()).format("X"));
  });
  console.log(timeslotevents);
  var calendar = $('#calendar').Calendar({
      conf: {locale: "en"},
    events: timeslotevents
  });
  calendar.init();
});