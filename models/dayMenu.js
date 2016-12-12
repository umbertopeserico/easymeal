var DayMenu = function (date, firstDishes, secondDishes, desserts) {
    this.date = date || null;
    this.firstDishes = firstDishes || [];
    this.secondDishes = secondDishes || [];
    this.desserts = desserts || [];
}
module.exports = DayMenu;