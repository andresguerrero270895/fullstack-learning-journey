// === ADVANCED ARRAY METHODS ===
/*

These methods are FUNDAMENTAL for any developer. You will uuse tehm EVERY DAY
in React, Node,js, etc

Most receive a FUNCTION as argument (callback)
*/

//Sample data 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const users = [
  {id: 1 , name: "Ana", age: 28, active: true},
  {id: 2, name: "Carlos", age: 34, active: false},
  {id: 3, name: "Elena", age: 22, active: true},
  {id: 4, name: "David", age: 45, active : true},
  {id: 5, name: "Beatriz", age: 31, active: false}
];

const products = [
  { name : "Laptop", price: 15000, category: "Electronics" },
  { name: "Shirt", price : 500, category: "Clothing" },
  { name: "Book", price: 350, category: "Books"},
  { name: "Phone", price: 8000, category: "Electronics" },
  { name: "Pants", price: 800, category: "Clothing"}
]

//=== forEach() - Execute function for each element ===

console.log("=== forEach ===");
console.log("Iterate and display each element");

numbers.forEach(function(number) {
  console.log( `Number : ${number}`);
});

//With arrow fucntion (more common)
console.log("\nUsers");
users.forEach(user => {
  console.log(`- ${user.name} (${user.age}) years`);
});

//forEach also recives index
console.log("\nWith index");
numbers.slice(0 , 3).forEach((num, index) => {
  console.log(`Position ${index}: ${num}`);
});


//=== map() - Transform each element ===
console.log("\n === MAP ===");
console.log("Map() Creates a NEW array wiht transformed elements");

//Double each number
const doubled = numbers.map( num => num * 2 );
console.log("Original: ", numbers);
console.log("Doubled:", doubled);

//Extract only user names
const names = users.map( user => user.name);
console.log("Just names:", names);

//Create new objects 
const userSummary = users.map( user => ({
  name: user.name,
  status: user.active ? "Active" : "Inactive"
}));
console.log("Summary:", userSummary);


//=== filter - Filter elements ===
console.log("\n=== Filter ===");
console.log("filter() cretes new array with elements that meet condition");


//Even numbers - (numeros pares)
const evens = numbers.filter( num => num % 2 === 0 );
console.log("Even numbers:", evens);

//Numbers greater than 5 
const greaterThan5 = numbers.filter( num => num > 5 );
console.log("Greater than 5:", greaterThan5);

//Active users
const activeUsers = users.filter(user => user.active);
console.log("Active Users:", activeUsers.map( u => u.name));

//Users over 30 years 
const over30 = users.filter( user => user.age > 30);
console.log("Over 30", over30.map(u => u.name));

//Electronics products 
const electronicProducts = products.filter(product => product. category === "Electronics");
console.log("Electronic products:", electronicProducts.map( u => u.name));

//



