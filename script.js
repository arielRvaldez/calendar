//code to display the current date in the header of the page.
var timeDisplayEl = $('#time-display');
var currentTime = dayjs().hour();

function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

 //listener for click events on the save button. 
$(".saveBtn").click(function() {
    eventText = $(this).siblings(".input").val();
    console.log(eventText);
    eventTime = $(this).siblings(".hour").text();
    console.log(eventTime);
    localStorage.setItem(eventTime, JSON.stringify(eventText));

    renderText ();
  });

$(document).ready (function() {
    renderText();
});
  
//code to apply the past, present, or future class to each time
  $(".input").each(function (){
    var scheduledTime = parseInt($(this).parent().attr("id").split("-")[1]);
    console.log(dayjs().hour());

    if (currentTime > scheduledTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (currentTime < scheduledTime) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
  } else {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
  }
});


//code to get any user input that was saved in localStorage and set
function renderText () {
  var saveEventText9 = JSON.parse(localStorage.getItem("9AM"));
  $("#9").val("");
  $("#9").val(saveEventText9);

  var saveEventText10 = JSON.parse(localStorage.getItem("10AM"));
  $("#10").val("");
  $("#10").val(saveEventText10);

  var saveEventText11 = JSON.parse(localStorage.getItem("11AM"));
  $("#11").val("");
  $("#11").val(saveEventText11);

  var saveEventText12 = JSON.parse(localStorage.getItem("12PM"));
  $("#12").val("");
  $("#12").val(saveEventText12);

  var saveEventText1 = JSON.parse(localStorage.getItem("1PM"));
  $("#1").val("");
  $("#1").val(saveEventText1);

  var saveEventText2 = JSON.parse(localStorage.getItem("2PM"));
  $("#2").val("");
  $("#2").val(saveEventText2);

  var saveEventText3 = JSON.parse(localStorage.getItem("3PM"));
  $("#3").val("");
  $("#3").val(saveEventText3);

  var saveEventText4 = JSON.parse(localStorage.getItem("4PM"));
  $("#4").val("");
  $("#4").val(saveEventText4);

  var saveEventText2 = JSON.parse(localStorage.getItem("5PM"));
  $("#5").val("");
  $("#5").val(saveEventText5);
} 



