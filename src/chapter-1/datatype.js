"use strict";
var bool = true;
var num = 12;
// bool = 123
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3, '4'];
var tuple = [0, '1'];
// tuple.push(3)
// tuple[2]
var add = function (x, y) { return x + y; };
var add1 = function (x, y) { return x + y; };
var compute;
compute = function (x, y) { return x + y; };
var obj = { x: 1, y: 2 };
var obj1 = { x: 1, y: 2 };
obj1.x = 23;
var un = undefined;
var nu = null;
num = null;
// void
var noReturn = function () { };
// any
var a;
// never
var error = function () {
    throw new Error('error');
};
var endless = function () {
    while (true) { }
};
