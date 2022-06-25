"use strict";

function sum(a) {

    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function () {
        return currentSum;
    };

    return f;
}

colsole.log(sum(1)(2)); 
colsole.log(sum(5)(-1)(2));
colsole.log(sum(6)(-1)(-2)(-3));
colsole.log(sum(0)(1)(2)(3)(4)(5)); 