"use strict";
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printListCyc(list) {
    let tmp = list;

    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }

}

function printReverseListCyc(list) {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

function printListRec(list) {

    console.log(list.value);

    if (list.next) {
        printList(list.next);
    }

}

function printReverseListRec(list) {

    if (list.next) {
        printReverseListRec(list.next);
    }

    console.log(list.value);
}
printReverseListCyc(list);
printListCyc(list);
printReverseListRec(list);
printListRec(list);