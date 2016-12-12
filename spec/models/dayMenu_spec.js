var DayMenu = require('../../models/dayMenu.js');
var Dish = require('../../models/dish.js');
describe('DayMenu model', function () {
    var dayMenu;
    beforeEach(function () {
        dayMenu = new DayMenu();
    });
    it('should respond to date', function () {
        expect(dayMenu.date).toBeDefined();
    });
    it('should respond to firstDishes', function () {
        expect(dayMenu.firstDishes).toBeDefined();
    });
    it('should respond to secondDishes', function () {
        expect(dayMenu.secondDishes).toBeDefined();
    });
    it('should respond to desserts', function () {
        expect(dayMenu.desserts).toBeDefined();
    });
    it('should set date to null', function () {
        expect(dayMenu.date).toEqual(null);
    });
    it('should set firstDishes to []', function () {
        expect(dayMenu.firstDishes).toEqual([]);
    });
    it('should set secondDishes to []', function () {
        expect(dayMenu.secondDishes).toEqual([]);
    });
    it('should set desserts to []', function () {
        expect(dayMenu.desserts).toEqual([]);
    });
    describe('with parameters', function () {
        beforeEach(function () {
            dayMenu = new DayMenu(new Date(2016, 12, 12, 0, 0, 0, 0), [new Dish(), new Dish()], [new Dish(), new Dish()], [new Dish(), new Dish()]);
        });
        it('should set parameters', function () {
            expect(dayMenu.date).toEqual(new Date(2016, 12, 12, 0, 0, 0, 0));
            expect(dayMenu.firstDishes).toEqual([new Dish(), new Dish()]);
            expect(dayMenu.secondDishes).toEqual([new Dish(), new Dish()]);
            expect(dayMenu.desserts).toEqual([new Dish(), new Dish()]);
        });
    });
});