"use strict";

//1

function camelize(str) {
    return str
        .split('-')
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

//2

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}
let arr2 = [5, 3, 8, 1];
let filtered = filterRange(arr2, 1, 4);
console.log(filtered);
console.log(arr2);

//3

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
let arr3 = [5, 3, 8, 1];
filterRangeInPlace(arr3, 1, 4);
console.log(arr3);

//4

let arr4 = [5, 2, 1, -10, 8];
arr4.sort((a, b) => b - a);
console.log(arr4);

//5

function copySorted(arr) {
    return arr.slice().sort();
}
let arr5 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr5);
console.log(sorted);
console.log(arr5);


