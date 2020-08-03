// VARIABLES
var saveBtn = $(".saveBtn");
var currentHour = moment().format("HH");
var currentHourInt = parseInt(currentHour);

// Adding attributes so function below can change the color of the current time

$("#9row").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10row").attr("data-time", moment("10:00 am", "h:mm a").format("HH"));
$("#11row").attr("data-time", moment("11:00 am", "h:mm a").format("HH"));
$("#12row").attr("data-time", moment("12:00 pm", "h:mm a").format("HH"));
$("#1row").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2row").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3row").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4row").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#5row").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));

// Start of jQuery
$(document).ready(function () {
  // Function to store inputted data
  renderPlans();

  // Shows real time Date & Time in header
  $("#lead").append("#currentDay");

  function addDate() {
    $("#currentDay").html(moment().format("MMMM Do YYYY, h:mm a"));
  }
  setInterval(addDate, 1000);

  // For loop to change color of each time block depending on present, past, or future time
  for (var i = 0; i <= 12; i++) {
    var inputHour = $("#" + i + "row").attr("data-time");
    var inputHourInt = parseInt(inputHour);

    if (currentHourInt === inputHourInt) {
      $("#" + i + "row").addClass("present"); //Applies red to current hour
    }
    if (currentHourInt > inputHourInt) {
      $("#" + i + "row").addClass("past"); //Applies grey to future hour
    }
    if (currentHourInt < inputHourInt) {
      $("#" + i + "row").addClass("future"); //Applies red to current hour
    }
  }

  saveBtn.on("click", function () {
    var rowHour = $(this).attr("data-hour"); //References specific hour row in HTML
    var input = $("#" + rowHour + "row").val(); //Saves text that user has inputted
    localStorage.setItem(rowHour, input); //Saves input to local storage
    console.log(saveBtn);
  });

  function renderPlans() {
    for (var i = 0; i <= 12; i++) {
      $("#" + i + "row").val(localStorage.getItem(i)); //Function to retrieve data in local storage
    }
  }
});
