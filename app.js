"use strict";
// let arr: [string, number] = ['Yash', 27]
function greet(value) {
    if (typeof value === "string") {
        return `Hello, ${value}`;
    }
    else {
        return `You are ${value} years old.`;
    }
}
console.log(greet("Yash")); // Output: Hello, Yash
console.log(greet(27)); // Output: You are 25 years old
