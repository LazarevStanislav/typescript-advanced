"use strict";
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Staz' }, { age: 32 });
const merged1 = mergeObjects({ model: 'ford' }, { year: 2010 });
console.log(merged.age);
console.log(merged1.model);
function withCount(value) {
    return {
        value,
        count: `в этом объекте ${value.length} символов`
    };
}
console.log(withCount('Hello typeScript'));
console.log(withCount(['i', 'am', 'array']));
console.log(withCount([1, 2, 3, 4]));
//# sourceMappingURL=generic.js.map