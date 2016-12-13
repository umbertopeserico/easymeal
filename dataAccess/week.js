var currentWeekNumber = require('current-week-number');
var Dish = require('../models/dish.js');
var DayMenu = require('../models/dayMenu.js');
var Week = require('../models/week.js');
var weeks = [];


for (var i = 0; i < 52; i++) {
    var firstDishes = [
        new Dish('Pasta al ragù', '', '', ['Pasta di grano', 'Ragù di carne'])
    ];
    var secondDishes = [
        new Dish('Pollo al curry', '', '', ['Pollo', 'Curry'])
    ];
    var desserts = [
        new Dish('Torta al lampone', '', '', ['Lamponi'])
    ];
    var dayMenu = new DayMenu(new Date(2016, 12, 12, 0, 0, 0, 0), firstDishes, secondDishes, desserts);
    weeks.push(new Week(i, dayMenu, dayMenu, dayMenu, dayMenu, dayMenu, dayMenu, dayMenu))
}

function getWeekByDate(date) {
    return getWeekByNumber(currentWeekNumber(date));
}

function getWeekByNumber(number) {
    var week = null;
    for (var i = 0; i < weeks.length; i++) {
        if (weeks[i].number == number) {
            week = weeks[i];
        }
    }
    return week;
}

module.exports.getWeekByDate = getWeekByDate;
module.exports.getWeekByNumber = getWeekByNumber;