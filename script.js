// VARIABLES
var saveBtn = $(".saveBtn");
var currentHour = moment().format("HH");
var currentHourInt = parseInt(currentHour);

// Adding attributes so function below can change the color of the current time

$("#9row").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10row").attr("data-time", moment("10:00 am", "h:mm a").format("HH"));
$("#11row").attr("data-time", moment("11:00 am", "h:mm a").format("HH"));
$("#12row").attr("data-time", moment("12:00 pm", "h:mm p").format("HH"));
$("#1row").attr("data-time", moment("1:00 pm", "h:mm p").format("HH"));
$("#2row").attr("data-time", moment("2:00 pm", "h:mm p").format("HH"));
$("#3row").attr("data-time", moment("3:00 pm", "h:mm p").format("HH"));
$("#4row").attr("data-time", moment("4:00 pm", "h:mm p").format("HH"));
$("#5row").attr("data-time", moment("5:00 pm", "h:mm p").format("HH"));

$(document).ready(function () {
  renderPlans();

  $("#lead").append("#currentDay");

  function addDate() {
    $("#currentDay").html(moment().format("MMMM Do YYYY, h:mm:ss a"));
  }
  setInterval(addDate, 1000);

  for (var i = 0; i <= 12; i++) {
    var inputHour = $("#" + i + "row").attr("data-time");
    var inputHourInt = parseInt(inputHour);

    if (currentHourInt === inputHourInt) {
      $("#" + i + "row").addClass("present");
    }
    if (currentHourInt > inputHourInt) {
      $("#" + i + "row").addClass("past");
    }
    if (currentHourInt < inputHourInt) {
      $("#" + i + "row").addClass("future");
    }
  }

  saveBtn.on("click", function () {
    var rowHour = $(this).attr("data-hour");
    var input = $("#" + rowHour + "row").val();
    localStorage.setItem(rowHour, input);
    console.log(saveBtn);
    // event.preventDefault();
  });

  function renderPlans() {
    for (var i = 0; i <= 12; i++) {
      $("#" + i + "row").val(localStorage.getItem(i));
    }
  }
});
