var currentHour = moment().hours();
var hoursArray = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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