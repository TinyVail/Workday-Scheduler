

let timeContainer = $("#timeContainer");
let timeContainerHTML = "";

for (let i = 8; i <= 12; i++) {
    timeContainerHTML = timeContainerHTML + `
    <div class="row">
		<div class="col-md-1 hour pt-4">${i}AM</div>
			<input id="8Row" class="user-event-input col-md-10 event-input-block">
		<div class="col-md-1 saveBtn" data-hour=${i}><i class="fas fa-lock" aria-hidden="true"></i></div>
  	</div>	
	`;
}
timeContainer.html("<p>Hi</p>");

/**
// declare the variables
let LockButton = $(".LockButton");
let currentHour =
//
// row based data attributes
$("#8Row").attr("data-time", moment("8:00 am", "h:mm a").format("HH"));
$("#9Row").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10Row").attr("data-time", moment("10:00 am", "hh:mm a").format("HH"));
$("#11Row").attr("data-time", moment("11:00 am", "hh:mm a").format("HH"));
$("#12Row").attr("data-time", moment("12:00 pm", "hh:mm a").format("HH"));
$("#1Row").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2Row").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3Row").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4Row").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#5Row").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));

*/