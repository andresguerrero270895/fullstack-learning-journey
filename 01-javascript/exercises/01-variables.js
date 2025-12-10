//MY FIRST LESSON OF JAVASCRIPT
// DATE : 10-12-2025

//==============================

//DEFINE A VARIABLE

//to define or create a variable we must use (let or const)

let myName = 'Esteban Guerrero'; // TEXT( TYPE ='STRING')
let myAge = 30; // TEXT (TYPE = NUMBER)
let imLearning = true; // TEXT (TYPE = BOOLEAN) TRUE/FALSE

//variable const = constant that cannot change

const PI = 3.14159;
const COUNTRY_BIRTH = 'Colombia';

// to disclose the content of a variable we must use the function console.log()
//console.lo() shows the content on the terminal

console.log('Hey World!'); // shows Hey world!

console.log(myName); // Shows : Esteban Guerrero
console.log(myAge); // Shows : 30
console.log(imLearning); // Shows : true

// You can combine text and variables
console.log('My name is : ' + myName);
console.log('Im ' + myAge + ' years old');

// modern way to combine text and variabe {template literals}, use inverted quotation marks
console.log(`Hi, my name is ${myName} and Im ${myAge} years old`);

//CHANGE THE VALUE OF A VARIABLE 

console.log('__BEFORE__');
console.log(`Age : ${myAge}`);

myAge = 31;  //change the value (reassign)

console.log('__AFTER__');
console.log(`Age : ${myAge}`);

//REMEMBER : WE CANNOT CHANGE A CONSTANT (const)