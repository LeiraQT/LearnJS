"use strict";
function checkSpam(str) {
    let lcStr = str.toLowerCase();
    return lcStr.includes('viagra') || lcStr.includes('xxx');
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));