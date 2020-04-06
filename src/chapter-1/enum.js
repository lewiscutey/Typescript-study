"use strict";
var Role;
(function (Role) {
    Role[Role["Reporter"] = 1] = "Reporter";
    Role[Role["Developer"] = 2] = "Developer";
    Role[Role["Maintanier"] = 3] = "Maintanier";
    Role[Role["Owner"] = 4] = "Owner";
    Role[Role["Guest"] = 5] = "Guest";
})(Role || (Role = {}));
console.log(Role);
console.log(Role.Developer);
var Message;
(function (Message) {
    Message["Success"] = "sunccess";
    Message["Fail"] = "fali";
})(Message || (Message = {}));
console.log(Message);
var char;
(function (char) {
    // const
    char[char["a"] = 0] = "a";
    char[char["b"] = 0] = "b";
    char[char["c"] = 3] = "c";
    // computed
    char[char["d"] = Math.random()] = "d";
    char[char["e"] = '123'.length] = "e";
})(char || (char = {}));
console.log(char);
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
})(E || (E = {}));
var F;
(function (F) {
    F[F["a"] = 0] = "a";
    F[F["b"] = 1] = "b";
})(F || (F = {}));
var G;
(function (G) {
    G["a"] = "a";
    G["b"] = "b";
})(G || (G = {}));
var e = 3;
var f = 3;
// e === f
var g1 = G.a;
var g2 = G.a;
