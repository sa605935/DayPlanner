var currentHour = moment().hours();
var hoursArray = [9, 10, 11, 12, 1, 2, 3, 4, 5];

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