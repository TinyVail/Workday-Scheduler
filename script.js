$(document).ready(function () {
    let timeContainer = $("#timeContainer");
    let timeContainerHTML = ""; 0

    let now = moment();

    for (let i = 8; i <= 17; i++) {
        let displayTime = i;
        if (i > 12) {
            displayTime = i - 12;
        }

        let relativeTime = "";
        if (i == now.hour()) {
            relativeTime = "present";
        } else if (i < now.hour()) {
            relativeTime = "past";
        } else {
            relativeTime = "future";
        }

        timeContainerHTML = timeContainerHTML + `
		<div class="row">
			<div class="col-md-1 hour pt-4">${displayTime}${i < 12 ? "AM" : "PM"}</div>
				<input id="${i}Row" class="user-event-input col-md-10 event-input-block ${relativeTime}" value="${localStorage.getItem(`inputInfo${i}`) || ""}">
			<div class="col-md-1 saveBtn" data-hour=${displayTime} id="button${i}"><i class="fas fa-lock" aria-hidden="true"></i></div>
		</div>	
		`;
    }

    timeContainer.html(timeContainerHTML);

    let currentTimeDisplay = `
	<div class ="row justify-content-center">
    	<h1>The current date and time is: ${now.format('LLL')} </h1>
	</div>`;
    $("#currentTimeDisplay").html(currentTimeDisplay);

    for (let i = 8; i <= 17; i++) {
        $(`#button${i}`).click(() => {
            localStorage.setItem(`inputInfo${i}`, $(`#${i}Row`).val());
        });
    }
});