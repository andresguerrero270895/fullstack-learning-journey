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

//===ITERATE OVER OBJECTS ====
console.log("\n=== ITERATE OVER OBJECTS ===");

const product = {
  name: "Laptop",
  price : 1500,
  brand: "Apple",
  available: "True"
};

//For ...in ( iterates through keys)
console.log("===WITH...FOR..IN");
for(let key in product){
  console.log(`${key} : ${product[key]}`);
}

//Object.keys() -- Keys array
console.log("\n===Object.keys()===");
const keys = Object.keys(product);
console.log("Keys:", keys);

//Object.values() -- Values array 
console.log("\n===Object.values()===");
const values = Object.values(product);
console.log("Values:", values);

//Object.entries() - [key-value]
console.log("\n === Object.entries() ===");
const entries = Object.entries(product);
console.log("Entries:", entries);

//Iterate with Object.entries()
for(let [key, value] of Object.entries(product)){
  console.log(`${key} => ${value}`);
}

//=== DESTRUCTURING ===
console.log("\n=== DESTRUCTURING ===");

const book = {
  title: "Clean Code",
  author: "Robert C. Martin",
  pages : 464,
  year: 2008
}

//Traditional way 
const traditionalTitle = book.title;
const traditionalAuthor = book.author;

//Destructuring (extract multiple properties at once)
const { title, author, pages, year } = book;

console.log(`Title : ${title}`);
console.log(`Author : ${author}`);

//Destructuring with new names
const { title: bookName, author: writer } = book;
console.log(`The book "${bookName}" was written by ${writer}`);

//Destructuring with default values - with new names 
const { publisher  = "Unknown" } = book;
console.log(`Publisher: ${publisher}`);


//=== SPREAD OPERATOR WITH OBJECTS ===
console.log("\n===SPREAD OPERATOR===");
const basicData = {
  name : "Pedro",
  age : 30,
};

const contactData = {
    email : "pedro@contact.com",
    phone : "555-000"
};

//Combine objects with spread (...)

const completeProfile = {
  ...basicData,
  ...contactData,
  premium : true
};

console.log("Complete Profile:", completeProfile);

//Copy an object (shallow copy) - Copia superficial 
const personCopy = {
  ...person,
}
console.log("Copy:", personCopy);

// === EXERCISE : STUDENT MANAGEMENT SYSTEM ===
console.log("\n=== STUDENT MANAGEMENT SYSTEM ===");


const student = {
  id : 1 ,
  name : "Laura Martinez",
  age : 22,
  major : "System Engineering",
  semester : 6,
  courses : [
    {name: "Programing", grade : 95},
    {name : "Databases", grade : 88},
    {name : "Networks", grade : 92}
  ],
  
  //Method to calculate average
  calculateAverage() {
    const sum = this.courses.reduce((acc, course) => {
      return acc + course.grade;
    },0 );

    return sum / this.courses.length;
  },

  //Method to add a course
  addCourse(name, grade){
    this.courses.push({ name, grade });
    console.log(`Course "${name}" added with grade ${grade}`);
  },

  //Method to show information
  showInfo() {
    console.log(`
    ╔════════════════════════════════════════╗
    ║        INFORMACIÓN DEL ESTUDIANTE      ║
    ╠════════════════════════════════════════╣
    ║  ID: ${this.id}
    ║  Name : ${this.name}
    ║  Age: ${this.age} años
    ║  Major: ${this.major}
    ║  Semester: ${this.semester}
    ║  Average: ${this.calculateAverage().toFixed(2)}
    ║  Courses: ${this.courses.length}
    ╚════════════════════════════════════════╝
    `)
  }
}

//use the object
student.showInfo();
student.addCourse("Artificial Inteligence", 90); 
console.log(`New Average : ${student.calculateAverage().toFixed(2)}`);

//=== CREATE A "BANK ACCOUNT"- OBJECT 

const bankAccount = { 
  holder : "Jane Smith",
  accountNumber : '3112200-535',
  balance : 2500.00,
  history : [],

  //Method to add money an logs in history 
  deposit(amount) {
    if(amount <= 0){ 
      console.log("Invalid Deposit amount")
      return ;
    }
    this.balance += amount;
    const transaction = {
      type : 'deposit', 
      amount,
      date :  new Date().toISOString().split('T')[0],
      balanceAfter : this.balance
    }
    this.history.push(transaction);
    console.log(`Deposited $${amount.toFixed(2)}. New Balance: $${this.balance.toFixed(2)}`);
    console.log(this.history)
  },

  // Removes money if sufficient balance 
  withdraw(amount) {
    if(amount <= 0){
      console.log("Invalid Withdraw amount");
      return;
    }

    if(amount > this.balance) { 
      console.log(`Insuficcient funds. Your current balance is ${this.balance.toFixed(2)}`);
      return;
    }

    this.balance -= amount;
    const transaction = {
      type : 'withdrawal',
      amount,
      date : new Date().toISOString().split('T')[0],
      balanceAfter : this.balance
    }
    this.history.push(transaction);
    console.log(`Withdrawal $${amount.toFixed(2)}. New balance: $${this.balance.toFixed(2)}`);
  },

  checkBalance() {
    console.log(`Current Balance: $${this.balance.toFixed(2)}`);
    return this.balance;
  },

  viewHistory() {
    console.log("\n === TRANSACTION HISTORY ===");
    console.log(`Account Holder ; ${this.holder}`);
    console.log(`Account Number : ${this.accountNumber}\n`);

    this.history.forEach((transaction, index) => {
      console.log(`#${index + 1} ${transaction.date.padEnd(12)} ${transaction.type.padEnd(10)} $${transaction.amount.toString().padStart(8)} Balance: $${transaction.balanceAfter.toFixed(2)}`);
    });
    console.log("\n");
  }
};

//=== DEMONSTRATION OF BANK ACCOUNT FUNCTIONALITY ====

console.log("=== INITIAL STATE ===");
bankAccount.checkBalance();
bankAccount.viewHistory();

console.log("\n=== TRANSACTION 1 ===");
bankAccount.deposit(500);

console.log("\n=== TRANSACTION 2 ===");
bankAccount.withdraw(200);

console.log("\n=== TRANSACTION 3 ===");
bankAccount.withdraw(2000); // Should fail
console.log("\n=== TRANSACTION 4 ===");
bankAccount.deposit(1000);

console.log("\n=== FINAL STATE ===");
bankAccount.checkBalance();
bankAccount.viewHistory();
console.log(bankAccount);



