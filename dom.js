//=====INTRODUCTION TO JAVASCRIPT ========
// WORKING WITH STRINGS

let message = "hello world";

console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.indexOf("world"));

//string concatation
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log(fullName);
console.log(fullName.length);
console.log(fullName.toUpperCase());

//template literals (modern way)
let greeting = `Hello, my name is ${firstName} ${lastName}`;
console.log(greeting);

// JAVASCRIPT OPERATOR

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//increment/decrement
let count = 5;

count++;
console.log(count);

count--;
console.log(count);
count--;
console.log(count);

// COMPARISON OPERATOR

let x = 5;
y = "5";
console.log(x == y); // ture (loose equality)
console.log(x === y); //false (strick equality)
console.log(x != y); //false (loose inequality)
console.log(x !== y); //true (strick inequality)
console.log(x > 3);
console.log(x <= 5);

// LOGICAL OPERATORS

let isLoggedIn = true;
let hasPermission = false;
console.log(isLoggedIn && hasPermission); // means (AND)
console.log(isLoggedIn || hasPermission); // means (OR)
console.log(!isLoggedIn); // means (NOT)
console.log(!hasPermission); //TRUE

//=====CONTROL STRUCTURES ========
// CONDITIONAL STATEMENTS
//If Statement
let age = 18;
if (age >= 18) {
  console.log("You can vote");
}

let temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside");
}
//'if---else' Statement
else {
  console.log("It's cold outside");
}

//Ternary Operator
let result = temperature < 30 ? "It's hot outside" : "It's cold outside";
console.log(result);

//'else----if' Statement
let time = 19; //2pm
if (time < 12) {
  console.log("Good Morning");
} else if (time < 18) {
  console.log("Good afternoon");
} else {
  console.log("Good Evening");
}

//the 'Switch' Statement
let day = "Thursday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Weekend is near");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Regular work day");
}

// // THE LOOP
// // The "For" Loop
for (let i = 1; i <= 5; i++) {
  console.log("count:" + i);
}

// The 'While' Loop
// let count = 1;
while (count <= 10) {
  console.log("count:" + count);
  count++;
}

// continue example -skip even numbers

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    //   {
    //   continue;//skips even number
    // }
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

// The 'do...while' loop
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

//the 'for...of Loop
let name = "Faith";

for (let letter of name) {
  console.log(letter);
}

//The for...in Loop (Objects)
let person = {
  name: "Faith",
  age: 25,
};

for (let key in person) {
  console.log(key, person[key]);
}

//======ORGANIZING DATA (ARRAYS)========
//array literal
const cars = ["BMW", "Volvo", "Saab"];
console.log(cars[0]);
console.log(cars[2]);
console.log(cars.length);
//getting the last element
console.log(cars.length - 1);

cars[0] = "Opel"; // changes the first element in cars
document.getElementById("demo").innerHTML = cars;
//coverting an array to string would be
document.getElementById("demo").innerHTML = cars.toString();

// looping through array elements
//using the 'for' loop
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;
let text = "<ul>";

for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo").innerHTML = text;

//OR
for (let i = 0; i < fLen; i++) {
  console.log(fruits[i]);
}

//using "for...of" loop
for (const fruit of fruits) {
  console.log(fruit);
}

//using "ForEach" method
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

//map for transformation
const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits);

//ADDING AND REMOVING ELEMENTS IN ARRAY
const animals = ["cat", "dog", "snake"];
//add to end
animals.push("bird");
console.log(animals);

//remove the last
animals.pop("bird");
console.log(animals);

//add to begining
animals.unshift("fish");
console.log(animals);

//remove the begining
animals.shift("fish");
console.log(animals);

//add/remove at specific position
animals.splice(3, 0, "rat", "fish");
console.log(animals);

//FINDING ELEMENT IN ARRAY
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.indexOf(3));
console.log(numbers.includes(6));
console.log(numbers.includes(8));
console.log(numbers.find((n) => n > 3));

//TRANSFORMING ARRAYS
//map-transform each element
const doubled = numbers.map((n) => n * 2);
console.log(doubled);

//filter-keeps element that pass the test
const evens = numbers.filter((n) => n % 2 == 0);
console.log(evens);

//reduce-accumulate to single value
const sum = numbers.reduce((total, n) => total + n, 0);
console.log(sum);

//OTHER METHODS
//Concat-combined
const arr = [1, 2, 3, 4, 5, 6];
const combined = arr.concat([7, 8]);
console.log(combined);

//slice- extract portion
const portion = arr.slice(1, 5);
console.log(portion);

//sort-arrange elements
const unsorted = [3, 5, 1, 4, 2];
const sorted = unsorted.sort();
console.log(sorted);
//reverse
const reversed = unsorted.reverse();
console.log(reversed);

//======ORGANIZING DATA (OBJECTS)========
//object literal
const Tof = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
};

//get all keys
const keys = Object.keys(Tof);
console.log(keys);

//get key-value pairs
const entries = Object.entries(Tof);
console.log(entries);

//get all values
const values = Object.values(Tof);
console.log(values);

//cheack if a property exists
console.log(Tof.hasOwnProperty("firstName"));
console.log(Tof.hasOwnProperty("name"));

//LOOPING THROUGH OBJECTS
//using the 'for...in' loop
for (const key in Tof) {
  console.log(`${key}: ${Tof[key]}`);
}

//object.keys() with forEach
// Object.keys(Tof).forEach((key) => {console.log(`${key}: ${Tof[key]}`);});

//object.keys() with 'for...of'
for (const [key, value] of Object.entries(Tof)) {
  console.log(`${key}: ${value}`);
}

//COMBINING ARRAYS AND OBJECTS
const students = [
  { name: "Alice", grade: 95, subjects: ["Maths", "Science"] },

  { name: "Bob", grade: 88, subjects: ["History", "English"] },

  { name: "Charlie", grade: 92, subjects: ["Art", "Music"] },
];
//Accessing nested data
console.log(students[0]);
console.log(students[0].name);
console.log(students[1].subjects[0]);

//finding students
const alice = students.find((student) => student.name === "Alice");
console.log(alice.name);
console.log(alice.grade);
console.log(alice.subjects);

//getting all students names
const names = students.map((student) => student.name);
console.log(names);
