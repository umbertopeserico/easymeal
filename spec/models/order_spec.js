var Order = require('../../models/order.js');
describe('Order Model', function () {
    var order;
    beforeEach(function () {
        order = new Order();
    });
    it('should respond to date', function () {
        expect(order.date).toBeDefined();
    });
    it('should respond to firstDish', function () {
        expect(order.firstDish).toBeDefined();
    });
    it('should respond to secondDish', function () {
        expect(order.secondDish).toBeDefined();
    });
    it('should respond to dessert', function () {
        expect(order.dessert).toBeDefined();
    });
    it('should set date to null', function () {
        expect(order.date).toEqual(null);
    });
    it('should set firstDish to null', function () {
        expect(order.firstDish).toEqual(null);
    });
    it('should set secondDish to null', function () {
        expect(order.secondDish).toEqual(null);
    });
    it('should set dessert to null', function () {
        expect(order.dessert).toEqual(null);
    });
});