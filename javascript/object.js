//Create an object person with properties name, age, and city. Assign values to these properties and log the object to the console.

const obj = {
  name: "John Doe",
  age: 30,
  city: "New York",
};
// console.log(obj);

// Given an object car with properties make, model, and year, write a program to access and log each property.

const carObject = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
};

// console.log("Make:", carObject.make);
// console.log("Model:", carObject.model);
// console.log("Year:", carObject.year);

// Create an object student with properties name, grade, and school. Update the grade property and log the updated object.

const student = {
  name: "tejal",
  grade: "B",
  school: "SICES",
};
student.grade = "A";
// console.log(student.grade);

// Given an object book with properties title and author, add a new property year and log the updated object.

const book = {
  title: "The Mountain is you",
  author: "Brianna Wiest",
};

book.year = 2020;
// console.log(book);

//Create an object fruit with properties name, color, and taste. Delete the taste property and log the updated object.

const fruit = {
  name: "Mango",
  color: "Yellow",
  taste: "Sweet and Tangy",
};

delete fruit.taste;
// console.log(fruit);

// Write a function that takes an object and a property name as arguments and returns true if the property exists in the object, otherwise false.

function propertyExists(obj, propertyName) {
  //approach 1
  // return obj?.hasOwnProperty(propertyName);

  //approach 2
  // return Object.keys(obj).includes(propertyName)

  // approach 3
  return propertyName in obj;
}

// console.log(propertyExists(fruit,'name'));

//Given an object user with properties name, email, and age, write a program to iterate over the object and log each key-value pair.

function iterateObject(obj) {
  //approach 1
  for (let i in obj) {
    console.log(i);
  }

  //approach 2
  Object.keys(obj).forEach((user) => console.log(user));
}
// iterateObject(obj)

//Create two objects obj1 and obj2 with different properties. Merge them into a single object and log the result.

function mergeObject(obj1, obj2) {
  //approach 1
  // return { ...obj1, ...obj2 }

  // approach2
  return Object.assign({}, obj1, obj2);
}

// console.log(mergeObject(obj,book));

// Create an object calculator with methods add, subtract, multiply, and divide. Each method should take two arguments and return the result of the operation.

const calculator = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
  div: (a, b) => a / b,
};

console.log(calculator.add(3, 5));
