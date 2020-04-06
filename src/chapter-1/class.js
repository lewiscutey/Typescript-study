"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = 'dog';
        this.legs = 4;
        this.name = name;
    }
    Dog.prototype.run = function () { };
    Dog.prototype.pri = function () { };
    Dog.prototype.pro = function () { };
    Dog.food = 'bones';
    return Dog;
}());
console.log(Dog.prototype);
var dog = new Dog('wang');
console.log(dog);
// dog.pri()
// dog.pro()
dog.legs;
console.log(Dog.food);
// console.log(dog.food)
var Husky = /** @class */ (function (_super) {
    __extends(Husky, _super);
    function Husky(name, color) {
        var _this = _super.call(this, name) || this;
        _this.color = color;
        // this.pri()
        _this.pro();
        return _this;
    }
    return Husky;
}(Dog));
console.log(Husky.food);
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log('eat');
    };
    return Animal;
}());
// let animal = new Animal()
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Cat.prototype.run = function () { };
    Cat.prototype.sleep = function () {
        console.log('sleep');
    };
    return Cat;
}(Animal));
var cat = new Cat('mao');
cat.eat();
cat.sleep();
var WorkFlow = /** @class */ (function () {
    function WorkFlow() {
    }
    WorkFlow.prototype.setp1 = function () {
        return this;
    };
    WorkFlow.prototype.step2 = function () {
        return this;
    };
    return WorkFlow;
}());
new WorkFlow().setp1().step2();
var Myflow = /** @class */ (function (_super) {
    __extends(Myflow, _super);
    function Myflow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Myflow.prototype.next = function () {
        return this;
    };
    return Myflow;
}(WorkFlow));
new Myflow().next().setp1().next().step2();
