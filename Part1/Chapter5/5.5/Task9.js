"use strict";

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '312': 0,
    '321': 0
};
for (let i = 0; i < 1000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}
for (let key in count) {
    console.log(`${key}: ${count[key]}`);
}

//Ф-Й (учебник)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
let count2 = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};

for (let i = 0; i < 1000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count2[array.join('')]++;
}
for (let key in count2) {
    console.log(`${key}: ${count2[key]}`);
}