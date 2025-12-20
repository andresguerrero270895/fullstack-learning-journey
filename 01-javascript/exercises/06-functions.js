//=== FUNCTIONS - REUSABLE CODE BLOCKS ===

/* 
A function is essentially a named recipe.

Rather than writing  out  the same sequence of steps every time
you want to bake a cake, you create a recipe called "bakecake"
and invoke it whenever needed

ANATOMY OF A FUNCTION: 
function functionName(parameters){
  //code that performs an action
  return result;
}
*/

//=== BASIC FUNCTIONS ===

/**
 * A simple function with no parameters and no return value.
 * Demonstrate the most fundamental function structure
 */

function greet(){
  console.log("Hello World!");
}

//Invoking the function (executing it)
greet(); // Output : Hello world!
greet(); // functions can be invoked multiple times


// === FUNCTIONS WITH PARAMETERS ====
/**
 * Parameters act as "ingredinets" that you pass into the function.
 * 
 * @param {string} name - The name of the person to greet
 */

function greetPerson(name){
  console.log(`Hello ${name}!`);
}

greetPerson('Andres'); // output: Hello Andres!
greetPerson('Daniel'); // output: Hello Daniel! 

/**
 * Functions can accept multiple parameters
 * 
 * @param {string} name - The person's name
 * @param {number} age - The person's age 
 * @param {string} city - The person's city of residence 
 */

function introduce(name, age, city){
  console.log(`My name is ${name}, I am ${age} years old, and I live in ${city}`);
}

introduce('Andres', 30 , 'Medellin');

// === FUNCTIONS THAT RETURN VALUES ===
/**
 * The return statement "send back" a result that can be stored 
 * @param {number} a - Fisrt operand
 * @param {number} b - second operand 
 * @returns {number} - The sum of both operands
 */

function add (a, b) {
  return a + b;
}

let result = add(5,3);
console.log(`5 + 3 = ${result}`); // 8 

//The return value can be used directly in expressions 

console.log(`10 + 20 = ${add(10,20)}`);

/**
 * A more elaborate function demonstrating intermediate calculations
 * 
 * @param {number} base - The rectangle's base length
 * @param {number} height - The rectangle's height 
 * @returns {number} - The calculated area
 */

function calculateRectangleArea(base,height){
  let area = base * height;
  return area;
}

let myArea = calculateRectangleArea(10,5);
console.log(`Rectangle Area: ${myArea}`)

//=== DEFAULT PARAMETERS ===

/**
 * Default parameters provide fallback values when arguments are omitted 
 * 
 * @param {string} name - The recipient's name 
 * @param {string} [message = 'Hello'] - Optional greeting message 
 * 
 */

function greetWithMessage(name, message="Hello"){
  console.log(`${message}, ${name}!`);
}

greetWithMessage('Peter');            // Hello, Peter!
greetWithMessage('Peter', 'Welcome')  // Welcome, Peter!

//=== ARROW FUNCTIONS ===

/**
 * Arrow fucntions provide a more consice, modern syntax for writing functions
*/

//Traditional function declaration
function multiplyTraditional(a, b){
  return a * b;
}

// Equivalent arrow function syntax
const multiply = (a, b) => {
  return a * b;
};

//Condensed arrow function (implicit return for single expressions)
const multiplyShort = (a, b) => a * b;

//Single parameter syntax (parantheses optional)
const double = n => n * 2;

console.log(multiply(3,4));      //12
console.log(multiplyShort(3,4)); //12
console.log(double(5));          //10


//=== FUNCTIONS AS VALUES - AS FIRST CLASS CITIZENS 

/**
 * In javascript, fucntions are "first-class citizens"
 * They can be assigned to variables, passed as arguments, and return from other functions.
*/

const myFunction = function(x) {
  return x * 2;
};

console.log(myFunction(10)); //20 

/**
 * Higher-order function that accepts another function as an argument
 * 
 * @param {number} number - The value to transform 
 * @param {Function} operation - The transformation function to apply
 * @returns {*} - The result of applying the operation
 */

function appyOperation(number, operation) {
  return operation(number);
}

const triple = n => n * 3;

console.log(appyOperation(5, double)); //10
console.log(appyOperation(5, triple)); //15

//=== VARIABLE SCOPE ===

/**
 * Scope determines where variables are accessible within your code
*/

let globalVariable = 'I am global';

function scopeExample(){
  let localVariable = 'I am local';
  console.log(globalVariable);  // can access global variable 
  console.log(localVariable);   // can acess its own local variable 
}

scopeExample();
console.log(`${globalVariable} and I Can be accesible anywhere in this code`);
// console.log(localVariable); //ERROR localVariable is not defined in this scope

// === EXERCISE : CALCULATOR ====
console.log('== CALCULATOR ===');
/**
 * Implement a basic calculator function
 * 
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @param {string} operation - The operation to perform 
 * @returns {number|string} - The result or an error message
 * 
 */

function calculator (a, b, operation) {
  switch (operation){
    case "addition":
      return a + b;

    case "subtraction":
      return a - b;

    case "multiplication":
      return a * b;
    
    case "division":
      if(b === 0){
        return `Error: Division by zero is undefined`
      }
      return a / b;
    default:
      return `Error ${operation} is not a valid operation`
  }
}

//TESTING CALCULATOR 

console.log('\n=== BASIC OPERATIONS ===');
console.log(`10 + 5 = ${calculator(10, 5, "addition")}`);
console.log(`10 - 5 = ${calculator(10, 5, "subtraction")}`);
console.log(`10 * 5 = ${calculator(10, 5, "multiplication")}`);
console.log(`10 / 5 = ${calculator(10, 5, "division")}`);

console.log('\n--- Edge Cases ---');
console.log(`10 / 0 = ${calculator(10, 0, 'division')}`);        // Error message
console.log(`Invalid op: ${calculator(10, 5, 'power')}`);        // Error message

console.log('\n--- Additional Tests ---');
console.log(`-5 + 3 = ${calculator(-5, 3, 'addition')}`);        // -2
console.log(`0 * 100 = ${calculator(0, 100, 'multiplication')}`); // 0
console.log(`7.5 / 2.5 = ${calculator(7.5, 2.5, 'division')}`);  // 3


//=== EXERCISE : TEMPERATURE CONVERTER ====

console.log('\n === TEMPERATURE CONVERTER ===');

//Celsius to Fahrenheit : ( C * 9/5) + 32 = F
const celsiusToFahrenheit = (celcius) => (celcius * 9/5) + 32;

//Fahrenheit to Celsius : ( F - 32) * 5/9 = C
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

console.log(`25˚C = ${celsiusToFahrenheit(25)}˚F`);
console.log(`77˚F = ${fahrenheitToCelsius(77).toFixed(1)}˚C`);
console.log(`0°C = ${celsiusToFahrenheit(0)}°F`);
console.log(`100°C = ${celsiusToFahrenheit(100)}°F`);

//=== PASSWORD VALIDATOR ===

console.log("\n=== PASSWORD VALIDATOR ===");

function validatePassword(password){
  const errors = [];
  //verify minimun length requirement
  if(password.length < 8){
    errors.push('Must contain at least 8 characters');
  }

  //verify numeric character presence
  if(!/\d/.test(password)){
    errors.push('Must contain at least one number');
  }

  //verify uppercase letter presence
  if(!/[A-Z]/.test(password)) {
    errors.push('Must contain at least one uppercase letter');
  }

  //verify lowercase letter presence
  if(!/[a-z]/.test(password)){
    errors.push('Must contain at least one lowercase letter')
  }

  //return valition outcome 
  if(errors.length === 0 ){
    return { isValid : true, message: "Password is Valid"};
  } else {
    return {isValid : false, errors: errors};
  }
}

// Test the validator
const testCases = ['abc', '12345678', 'Password', 'Password123'];

testCases.forEach(password => {
  console.log(`\nTesting: "${password}"`);
  const result = validatePassword(password);
  
  if (result.isValid) {
    console.log(result.message);
  } else {
    console.log('❌ Invalid password:');
    result.errors.forEach(error => console.log(`   - ${error}`));
  }
});
