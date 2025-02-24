var name = "tejal"; //don't use
let fName = "tejal";
const pi = 3.14;


let number = 20; //Number
let string = "Tejal"; //String
let isTrue = true; //Boolean
let nothing = null; //object data type 

// console.log(typeof nothing);

let undefinedVar = undefined; //undefined
// console.log(typeof undefinedVar);

let symbol = Symbol(); //Symbol
let person = {
    name: "Tejal",
    age: 24,
    isWorking: true
}

//convert string to a number
let num = "42a";
let convertedNum = Number(num); //standard approach

let parsedNum = parseInt(num);
console.log(parsedNum, convertedNum);

let str = 123;
let convertedString = String(str)

//operations -

let a = 10;
let b = 3;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
let power = a ** b;

let x = 10;
let y = 10;

// console.log(x == y); // Equal to
// console.log(x != y); // Not Equal to
// console.log(x > y);
// console.log(x < y);
// console.log(x <= y);

// console.log(Math.max(5, 10));
// console.log(Math.min(5, 10));

console.log(Math.random() * 10);

let firstName = "tejal";
let lastName = "supe";

let fullName = firstName + " " + lastName;

let message = "Hello World";

console.log(message.toUpperCase());
console.log(message.indexOf("W"));
console.log(message.slice(0, 5));

let myName = "Tejal";

let greeting = `Hello ${myName}, from chaicode`;
 



