//==== ARRAYS ====

/* 
An array is like a shelf with numbered compartments.
Each compartment has a POSITION (index) that starts at 0

Example: 
let fruits =[ apple, banana, orange, berry]

position:   0    ,   1   ,   2   ,   3 
content: [ apple, banana, organge, berry]
*/

//=== CREATING AND ARRAY ===

//Array of strings (texts)
let fruits = ['apple','banana', 'orange', 'grape'];

//Array of numbers 
let numbers = [10, 20, 30, 40, 50];


//Mixed array (not recommended, but possible)
let mixed = ['text', 42, true, null];

//empty array
let empty = [];

console.log('=== MY ARRAYS ===');
console.log('Fruits:',fruits);
console.log('Numbers', numbers);

//=== ACCESING ELEMENTS ====        
console.log(`First fruit (position 0): ${fruits[0]}`);
console.log(`Second fruit (position 1): ${fruits[1]}`);
console.log(`Last fruit: ${fruits[3]}`);

//Access the last element dinamically 
console.log(`Last fruit (dynamic): ${fruits.length-1}`);

//Array length
console.log(`Total fruits: ${fruits.length}`);

//=== Modifying elements ===
console.log('=== MODIFYING ELEMENTS ===');
console.log('Before:',fruits);

fruits[1] = 'strawberrys';

console.log('After:', fruits);

//Methods for adding/ removin elements 

console.log('=== ADD OR REMOVE ===');

//push() - Add to end
fruits.push('mango');
console.log('After push mango:', fruits);

//pop() - remove from  end ( and returns the removed element)
let lastFruit = fruits.pop();
console.log(`Pop() removed: ${lastFruit}`);
console.log('Current array:', fruits);

//unshift() - add to beginning 
fruits.unshift('pinaple');
console.log('After unshift(pinaple):', fruits);

//shift() - remove from beginning
let firstFruit = fruits.shift();
console.log(`shift() removed: ${firstFruit}`);
console.log('Current array:', fruits);

//=== SEARCHING IM ARRAYS ===
console.log('=== SEARCH ===');

let colors = ['red', 'green', 'blue', 'yellow', 'green'];

//indexOf() - Find the position of an element
let bluePosition = colors.indexOf('blue');
console.log(`'blue' is in position : ${bluePosition}`); //2

//indexOf() - If it doesn't exist, return -1 
let pinkPosition = colors.indexOf('pink');
console.log(`'pink' is in position : ${pinkPosition}`); //-1

//includes() - check if exists (true/false)
console.log(`Does 'green' exist? ${colors.includes('green')}`); // true
console.log(`Does 'pink' exist? ${colors.includes('pink')}`)  // false 

//Iterating arrays with for 

console.log('=== ITERATE WITH FOR ===');

let animals = ['dog', 'cat', 'bunny', 'bear'];

//classic form 
for(let i = 0; i < animals.length; i++) {
  console.log(`Position ${i}: ${animals[i]}`);
}

//for..of (simpler, when you don't need the index)
console.log('=== With for... of ===');
for(let animal of animals) {
  console.log(`Animal : ${animal}`);
}

//=== USEFUL ARRAYS METHODS ===

console.log('=== USEFUL METHODS')

let nums = [3, 1, 4, 1, 5, 9, 2, 6];

//sort() - sort (be careful with numbers!)
let letters = ['z' , 'a', 'm', 'b'];
console.log('Original array:', letters)
letters.sort();
console.log('Sorted letters:', letters);

//To sort numbers correctly:
nums.sort((a,b) => a - b);
console.log('Sorted numbers;', nums);

//reverse() - Reverse order 
nums.reverse();
console.log('Reversed numbers:', nums);

//join() - convert array to string 
let words = ['Hello', 'World', 'Cruel'];
let phrase = words.join(' '); // joins with spaces
console.log('Phrase:', phrase);

//split() - convert string to array
let anotherPhrase = 'Javascript is awesome';
let separateWords = anotherPhrase.split(' '); //separetes by spaces
console.log('Words:', separateWords);

// === EXERCISE : TO DO LIST ===

console.log('=== TO DO LIST ===');

let tasks = [];

//addin task

tasks.push('Learn Javascript');
tasks.push('Practice every day');
tasks.push('Build projects');
tasks.push('Get a job');

console.log('My tasks:');
for(let i =0; i <tasks.length; i++){
  console.log(`Task number ${i +1}, ${tasks[i]}`);
}

// Mark as completed (remove)
console.log('\n--- I completed the first task ---');
let completedTask = tasks.shift();
console.log(`✅ Completed: ${completedTask}`);

console.log('\nRemaining tasks:');
for (let i = 0; i < tasks.length; i++) {
  console.log(`${i + 1}. ${tasks[i]}`);
}





