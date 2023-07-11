/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    return a + b;
}
let sum = addTwoNumbers(3,5);
console.log(sum)

// Arrow Function With Parameters

const addThreeNumbers = (a, b, c) => {
    return a + b + c;
}
let sum_2 = addThreeNumbers(1,3,5)
console.log(sum_2)

// Single Line Arrow Function With Parameters

const addTwoNumbers2 = (a,b) => a + b;

// Implicit Returns

const saySomething = message => console.log(message)
saySomething('Hello World!');

const sayHello = () => console.log('Hello');
sayHello()

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
    this is multiple lines of code
    </p>`
)
console.log(returnMultipleLines())