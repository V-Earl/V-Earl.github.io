var start = moment(new Date());

// shows current date and time
$('#currentDay').append(moment().format('MMMM Do YYYY, h:mm'));

// loop for adding times to slots
for (var i = 9; i <= 17; i++) {

// container holding time slots
    var timeBlockDiv = $('.container');

// creates each time slot
    var newTimeRow = $('<div>');
    newTimeRow.attr('class', 'row');

    var hour = moment().hour();


    var hourColumn = $('<div>');
    hourColumn.attr('class', 'col-2 hour');
    hourColumn.text(i + ":00");

    

// shows time slot as red when on a current slot, green for time slots in the future and gray for past
    if (hour == i) {
        hourColumn.addClass("present");
    }
    
    else if (hour < i) {
        hourColumn.addClass("future");

    } else {
        hourColumn.addClass("past");
    }
    

// text area where scheduled events go
    var descriptionColumn = $('<textarea>');
    descriptionColumn.attr('class', 'col-8 description');

// creates the save button for each row    
    var saveBtn = $('<div>');
    saveBtn.attr('class', 'col-2 saveBtn');


    var iconBtn = $('<i>');
    iconBtn.attr('class', 'fas');
    iconBtn.html("<i class='fas'>&#xf0c5;</i>");

    

    newTimeRow.append(hourColumn, descriptionColumn, saveBtn);

    saveBtn.append(iconBtn);

    timeBlockDiv.append(newTimeRow);

}

localStorage.setItem($('<textarea>'), JSON.stringify($('<textarea>')));
var descriptionColumn = JSON.parse(localStorage.getItem($('<textarea>')));

