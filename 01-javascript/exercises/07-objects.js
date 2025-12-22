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
console.log("\n === MODIFY PROPERTIES ===");
console.log("Before:", person.age);

//modify an existent value 
person.age = 29;
console.log("After:", person.age); 

//add new property 
person.email = "maria@email.com";
console.log("Email added:", person.email);

//delete property 
delete person.active;
console.log("After deleting active", person)

//=== NESTED OBJECTS (Objects inside objects)
//===========================================

console.log("\n=== NESTED OBJECTS ===");

const employee = {
  name : "carlos",
  lastName : "lopez",
  age : 30,
  contact : {
    email : "carlos@company.com",
    phone : '444-4444',
    address : {
      street : '123 Main Ave',
      city : 'Mexico City',
      zipCode : '06600',
    }
  },
  skills : ["JavaScript", "Python", "SQL"],
  experience : [
    { company : "Tech corp", years : 3},
    { company : "StartUp Inc", years : 2},
  ]
}

//Access nested properties
console.log(`Email: ${employee.contact.email}`);
console.log(`City: ${employee.contact.address.city}`);
console.log(`First Skill: ${employee.skills[0]}`)
console.log(`First Company: ${employee.experience[0].company}`)

//METHODS (Functions inside objects)
console.log("\n=== METHODS ===");
const  calculator = {

  //properties
  brand : "Cassio",
  model : "FX-991",

  //methods (functions)
  add : function(a, b) {
    return a + b;
  },

  // short way(ES6)
  substract (a, b) {
    return  a - b;
  },

  multiply (a, b) {
    return a * b;
  },

  divide (a, b) {
    if(b===0) return "Error: Division by Zero"
    return a/b
  }
};

console.log(`Brand : ${calculator.brand}`);
console.log(`5 + 3 = ${calculator.add(5, 3)}`);
console.log(`10 - 4 = ${calculator.substract(10, 4)}`);
console.log(`6 * 7 = ${calculator.multiply(6, 7)}`);


//The "This" KEYWORD

console.log("\n=== THIS ===");

const user = {
  name : "Ana",
  age : 25,

  //"this" refers to the obejct itself 
  introduce(){
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
  },

  haveBirthday(){
    this.age++;
    console.log(`Happy Birthday! I'm now ${this.age} years old`);
  }
};

user.introduce();
user.haveBirthday(); 

