"use strict";
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Staz' }, { age: 32 });
const merged1 = mergeObjects({ model: 'ford' }, { year: 2010 });
function withCount(value) {
    return {
        value,
        count: `в этом объекте ${value.length} символов`
    };
}
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(el => el !== item);
    }
    get items() {
        return this._items;
    }
}
const string = new Collection(['i', 'am', 'string']);
string.add('!');
string.remove('am');
const number = new Collection([1, 2, 3]);
number.add(1);
number.remove(3);
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
const cars = ['Ford', 'Audi'];
cars[1];
const ford = {
    model: 'Ford',
    year: 2020
};
//# sourceMappingURL=generic.js.map