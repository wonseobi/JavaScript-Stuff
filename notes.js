// 1. Variables
let name = "Won";
console.log(name)

// cannot be reserved keyword
// should be meaningful
// cannot start with a number (1name)
// cannot contain a space or hyphen (-)
// are case-sensitive

let firstName = 'Won";                            
let lastName = "Lee";

// 2. Constants
const interestRate = 0.3;
console.log(interestRate);

// 3. Data types

// 3.1 Primitive or Value Types
let username = "Bee"; // string
let age = 22; // number
let is_approved = true; // boolean
let status = undefined; // undefined 
let is_present = null; // null

// 3.2 Reference types

// 3.2.1 objects 
let person = {
	name: "Hodrick";
	account_level: 20;
}
console.log(person);

// dot notation to change object data
person.name = 'Astel';
// bracket notation to change object data
person['name'] = 'Dilian';

// 3.2.2 arrays
let selectedColors = ['red', 'blue'];
console.log(selectedColors)
// adding data to array with index reference
selectedColors[2] = 'green';
console.log(selectedColors.length); 

// 3.2.3 function
function greet_user(user, user_id){
	console.log('Hello' + user + ' your id is ' + user_id);
}

greet_user('Mervin', 2395);

// 4. Dynamic Typing
// javascript is a dynamic language

typeof name;

name = 1;

typeof name;

// means data types of variables can change during runtime

typeof is_present;

// 5. Types of functions

function score_calculation(number){
	return number * number;
}

console.log(score_calculation(10));