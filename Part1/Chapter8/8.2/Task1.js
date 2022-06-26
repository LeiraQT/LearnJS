"use strict";

function Fruit(name) {
    this.fruit = name;
}

let fruit = new Fruit('apple');
let fruit2 = new fruit.constructor('pineapple');

console.log(fruit2.fruit);