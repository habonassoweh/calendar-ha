const rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");
console.log(rightNow);

const time = document.getElementById("currentDay");
time.innerHTML = rightNow;

const saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
  var textareaValue = $(this).siblings(".description").val();
  console.log(textareaValue);

  var time = $(this).parent().attr("id");
  console.log(time);

  localStorage.setItem(time, textareaValue);
});
$("#h-9 .description").val(localStorage.getItem("h-9"));
$("#h-10 .description").val(localStorage.getItem("h-10"));
$("#h-11 .description").val(localStorage.getItem("h-11"));
$("#h-12 .description").val(localStorage.getItem("h-12"));
$("#h-13 .description").val(localStorage.getItem("h-13"));
$("#h-14 .description").val(localStorage.getItem("h-14"));
$("#h-15 .description").val(localStorage.getItem("h-15"));
$("#h-16 .description").val(localStorage.getItem("h-16"));
$("#h-17 .description").val(localStorage.getItem("h-17"));

ColorCode = function () {
  var presentHour = moment().hour();
  console.log(presentHour);

  $(".time-block").each(function () {
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
    console.log(timeBlockHour);
    if (timeBlockHour < presentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour === presentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
};

ColorCode();
