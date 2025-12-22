// ==============================
// === OBJECTS  ====
// ===============================

/*

An object is like an information card. 
Imagine an ID Card: 
_____________________________
|                           |
|===== ID CREDEENTIAL ======|
| NAME : "Andres Guerrero"==|
| AGE :  30 ================|
| MAJOR : "Engineering" ====|
| ACTIVE : True ============|
|___________________________|

In javascript it would be: 

const student : {
  name : "Andres Guerrero",
  age: 30,
  major: "Engineering"
  active: true
}

Every line has :

KEY: field name ( name, age, major, etc)
VALUE: content ( "Andres Guerrero", 30, etc)
*/

//=== CREATE OBJECTS ===
//Literal object (Most common way)

const person = {
  name : "Maria Garcia",
  age : 28,
  city : "Madrid",
  profession: "Developer",
  active: true,
}

console.log("\n=== MY FIRST OBJECT ===")
console.log(person); 

//Empty object ( to fill later )
const emptyObject = {};

//ACCESS PROPERTIES
console.log("\n===ACESS PROPERTIES===");

//Method 1 : Dot notation (most common)
console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);

//Method 2 : notation with brackets (useful for dyanamic names)
console.log(`City : ${person['city']}`);

//Useful when name comes from a variable const 
const property = "profession";
console.log(`Dynamic property : ${person[property]}`);

// Access non-existent property
console.log(`Phone: ${person.phone}`);

//MODIFY PROPERTIES