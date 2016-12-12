var Order = function (date, firstDish, secondDish, dessert) {
    this.date = date || null;
    this.firstDish = firstDish || null;
    this.secondDish = secondDish || null;
    this.dessert = dessert || null;
}
module.exports = Order;