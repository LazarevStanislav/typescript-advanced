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
console.log(string.items);
const number = new Collection([1, 2, 3]);
number.add(1);
number.remove(3);
console.log(number.items);
const objs = new Collection([{ a: 1 }, { b: 2 }]);
objs.remove({ b: 2 });
console.log(objs.items);
//# sourceMappingURL=generic.js.map