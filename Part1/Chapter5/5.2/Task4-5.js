"use strict";
//Task4
function random(min, max) {
    return min + Math.random() * (max - min);
}
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));

//Task5
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));