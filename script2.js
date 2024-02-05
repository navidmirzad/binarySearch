"use strict"

const values = [1,2,3,5,7,8,9,11,12,14,15];

performance.mark("timer-start");
binarySearchRecursive(13, values);
performance.mark("timer-stop");

function binarySearchRecursive(value, values, start=0, end=values.length-1) {

    if (start > end) {
        return -1;
    }

    let middle = start + Math.floor((end-start) / 2);
    const lookAt = values[middle];

    if (value === lookAt) {
        return middle;
    } else if ( value > lookAt) {
        return binarySearchRecursive(value, values, middle+1, end)
    } else if ( value < lookAt) {
        return binarySearchRecursive(value, values, start, middle-1)
    }

}