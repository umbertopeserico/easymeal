var weeksDA = require('../dataAccess/week.js');
var convertDays = require('../helpers/convertDays.js');

function showCurrentWeek(request, response) {
    var currentDate = new Date();
    var week = weeksDA.getWeekByDate(currentDate);

    response.render('weeks/showWeek', {
        week: week
    })
}

function showWeekByNumber(request, response) {
    var number = request.params.number;
    var week = weeksDA.getWeekByNumber(number);

    response.render('weeks/showWeek', {
        week: week
    })
}

function showWeekDay(request, response) {
    var weekNumber = request.params.weekNumber;
    var dayName = request.params.dayName
    var week = weeksDA.getWeekByNumber(weekNumber);
    var dayMenu = week
    response.render('weeks/showDay', {
        week: week,
        dayMenu: week.days[dayName],
        title: convertDays(dayName)
    })
}

module.exports.showCurrentWeek = showCurrentWeek;
module.exports.showWeekByNumber = showWeekByNumber;
module.exports.showWeekDay = showWeekDay;