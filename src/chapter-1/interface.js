"use strict";
function render(result) {
    result.data.forEach(function (val) {
        console.log(val.id, val.name);
        // val.id = 3
        val.age = 2;
    });
}
var result = {
    data: [
        { id: 1, name: 'a', sex: 'male' },
        { id: 2, name: 'b', age: 12 }
    ]
};
render(result);
var chars = ['a', 'b'];
var add2 = function (a, b) { return a + b; };
function getLib() {
    var lib = (function () { });
    lib.version = '1.0.0';
    lib.doSomething = function () { };
    return lib;
}
var lib1 = getLib();
lib1.doSomething();
var lib2 = getLib();
lib2();
