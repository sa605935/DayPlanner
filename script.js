var currentHour = moment().hours();
var hoursArray = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

$('#currentDay').text(moment().format('dddd, MMMM Do YYYY, h:mm a'));

//Code created rows for each hour

hoursArray.forEach(function(hour) {
    var rowDiv = $('<div>');
    rowDiv.addClass('row time-block');
    rowDiv.attr('id', hour);

    var timeCol = $('<div>');
    timeCol.addClass('col-1 hour');
    timeCol.text(hour + ':00');

    var textCol = $('<textarea>');
    textCol.addClass('col-10 description');

    var btnCol = $('<button>');
    btnCol.addClass('col-1 btn saveBtn');
    btnCol.text('SAVE');
    rowDiv.append(timeCol, textCol, btnCol);
    $('.container').append(rowDiv);
})

//Saves tasks TO local storage
function saveDescription () {
    var time = $(this).parent().attr('id');
    var descriptionText = $(this).siblings('.description').val();
    localStorage.setItem(time, descriptionText);
}

//Accesses tasks FROM local storage
hoursArray.forEach(function(hour) {
    $(`#${hour} .description`).val(localStorage.getItem(hour));
})

//This is the event for the save button 
$('.saveBtn').click(saveDescription);

//This is the event for the clear button
$('.clearBtn').click(function(){
    localStorage.clear();
    hoursArray.forEach(function(hour) {
        $(`#${hour} .description`).val('');
    })
})

//This connects the CSS styling to the code so that the color of the hour row changes depending if the hour is in the past, present or future
$('.time-block').each(function(){
    var hourBlock = parseInt($(this).attr('id'));
    if (hourBlock === currentHour) {
        $(this).removeClass('future');
        $(this).removeClass('past');
        $(this).addClass('present');
    } else if (hourBlock < currentHour) {
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');
    } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
    }
})
