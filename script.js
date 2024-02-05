"use strict";

const values = [1,2,3,5,7,8,9,11,12,14,15];

function binarySearch(value, values) {
    let start = 0;
    let end = values.length - 1;

    while (start <= end) {
        let middle = Math.round((start + end) / 2);

        if (value === values[middle]) {
            console.log("Value found at index " + middle);
            return middle; 
        } else if (value < values[middle]) {
            end = middle - 1;
            console.log("New start: " + start + " New end: " + end + " New middle: " + middle);
        } else {
            start = middle + 1;
            console.log("New start: " + start + " New end: " + end + " New middle: " + middle);
        }
    }

    console.log("Value not found");
    return -1; // Return -1 to indicate that the value was not found
}

document.addEventListener("DOMContentLoaded", function () {
    binarySearch(5, values); 
});


