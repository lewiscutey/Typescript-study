"use strict";
function add3(x, y) {
    return x + y;
}
var add4;
// add3(1,2,3)
function add7(x, y) {
    return y ? x + y : x;
}
function add8(x, y, z, w) {
    if (y === void 0) { y = 0; }
    if (w === void 0) { w = 1; }
    console.log(x, y, z, w);
    return x + y + z + w;
}
add8(1, undefined, 2);
console.log(add8(1, undefined, 2));
function add9(x) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return x + rest.reduce(function (prev, curr) { return prev + curr; });
}
console.log(add9(1, 2, 3, 4, 5));
function add10() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var first = rest[0];
    console.log(first);
    if (typeof first === 'string') {
        return rest.join('');
    }
    if (typeof first === 'number') {
        return rest.reduce(function (prev, curr) { return prev + curr; });
    }
}
console.log(add10(1, 2, 3));
console.log(add10('a', 'b', 'c'));
