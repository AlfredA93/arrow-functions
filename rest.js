/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 

const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log("Sum: ", sum);


// Extra arguments are ignored

let sum2 = sumAll(1, 1, 1, 2, 2, 2);
console.log("Sum 2: ", sum2);


// Function using ...rest

const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;
}

let sum3 = sumRest(1, 1, 1, 10, 10, 10, 10);
console.log("Sum 3: ", sum3);