var Dish = require('../../models/dish.js');
describe('Dish Model', function () {
    var dish;
    beforeEach(function () {
        dish = new Dish();
    });
    it('should respond to name', function () {
        expect(dish.name).toBeDefined();
    });
    it('should respond to photo', function () {
        expect(dish.photo).toBeDefined();
    });
    it('should respond to description', function () {
        expect(dish.description).toBeDefined();
    });
    it('should respond to ingredients', function () {
        expect(dish.ingredients).toBeDefined();
    });
    it('should set name to emty string', function () {
        expect(dish.name).toEqual('');
    });
    it('should set photo to emty string', function () {
        expect(dish.photo).toEqual('');
    });
    it('should set description to emty string', function () {
        expect(dish.description).toEqual('');
    });
    it('should set ingredients to emty string', function () {
        expect(dish.ingredients).toEqual([]);
    });
});