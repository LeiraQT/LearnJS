"use strict";
//Task2
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
// }

//?
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

//||
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

//Task3
function min (a, b) {
    if (a < b) {
        return (a);
    } else {
        return (b);
    }
}
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));