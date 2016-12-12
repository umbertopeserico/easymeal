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
    describe('with parameters', function () {
        beforeEach(function () {
            dish = new Dish('Piatto 1', 'http://miafoto.it', 'Descrizione piatto', ['Ingrediente 1', 'Ingrediente 2']);
        });
        it('should set parameters', function () {
            expect(dish.name).toEqual('Piatto 1');
            expect(dish.photo).toEqual('http://miafoto.it');
            expect(dish.description).toEqual('Descrizione piatto');
            expect(dish.ingredients).toEqual(['Ingrediente 1', 'Ingrediente 2']);
        })
    });
});