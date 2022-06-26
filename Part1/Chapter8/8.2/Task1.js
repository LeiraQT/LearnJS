"use strict";
function Fruit(name) {
    this.fruit = name;
  }
  
  let fruit = new Fruit('apple');
  let fruit2 = new fruit.constructor('pineapple');
  
  alert( fruit2.fruit );