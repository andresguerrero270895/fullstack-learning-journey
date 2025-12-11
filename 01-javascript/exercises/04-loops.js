//=== LOOPS - REPEATING ACTIONS ===


//=== FOR LOOP - FOR PREDETERMINED ITERATIONS 
/*
for(initialization; condition; increment){
code to be repeated
}

Explanation: 
Initializatiom: let i = 0(declares a counter variable, initialized to 0)
Condition: i < 5 (as long as the expression evaluates to true, the loop continues executing)
Increment: i++ (executed after each iteration: increments the counter by one)
 */

console.log('=== COUNT FROM 1 TO 5 ===');
for(let i=1; i<=5; i++){
  console.log(`Number ${i}`);
}

console.log('=== COUNT TWO BY TWO');
for(let i=0; i<=10; i +=2 ){
  console.log(`Number ${i}`)
}

console.log('=== COUNTDOWN ===');
for(let i= 10; i >=0; i--){
  console.log(i);
}
console.log('🚀 Liftoff!');

//=== WHILE LOOP - FOR INDETERMINATE ITERACTIONS ===

/*
while(condition){
 block to be executed
}
CRITICAL : Should the condtion never evaluates to false, the loop will execute infinitely, causing the 
program to hang (freeze)
*/

console.log('=== WHILE LOOP ===');
let counter = 0; // loop control variable declaration and initialization

while(counter < 5){
  console.log(`Counter: ${counter}`);
  counter++; // INCREMENTATION IS MANDATORY : Omission results in infinite loop
}

//practical demonstration : probabilistic algorithm 
console.log('=== SEARCHING FOR NUMBER 7 ===');
let randonNumber = 0;
let attempts = 0; // iteration counter 


while(randonNumber !==7){
  randonNumber = Math.floor(Math.random()*10); //generates pseudorandom integer in range [0,9]
  attempts++;
  console.log(`Attempt ${attempts} : generated ${randonNumber}`);
}
console.log(`Number 7 located after ${attempts} iterations`);

//=== DO WHILE - GURANTEES AT LEAST ONE EXECUTION ==== 
console.log('=== DO WHILE ===');
let number = 10; // loop control variable initialization 

do {
  console.log(`Current number: ${number}`); // Executes unconditionally on first pass 
  number++; // Post-increment operations modifies loop invariant 
} while( number < 5 ) // Post-test termination predicate (evaluated after each iteration)

//Thoug the initial value (10) violates the continuation condition (10 < 5),
//the loop body is guarranted to execute ONCE before conditional evaluation occurs 

//=== BREAK AND CONTINUE 

console.log('=== BREAK - Terminate Loop Execution ===');
// Initialization: let i = 1; Condition: i <= 10; Increment: i++
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    console.log('Found 6! Terminating loop.');
    break; // Unconditional loop termination upon meeting target condition
  }
  console.log(`Number: ${i}`);
}

console.log('=== CONTINUE - Skip Iteration ===');
// Initialization: let i = 1; Condition: i <= 10; Increment: i++
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log('(Skipping 5)');
    continue; // Bypasses remaining code in current iteration; proceeds to next cycle
  }
  console.log(`Number: ${i}`);
}

// === EXERCISE : MULTIPLICATION TABLE ===

let tableNumber = 7;

console.log(`=== MULPLICATION TABLE FOR ${tableNumber} ===`);
for(let i = 0; i<=10; i++) {
  let result = tableNumber * i;
  console.log(`${tableNumber} x ${i} = ${result}`);
}

//=== EXERCISE: FIZZBUZZ ====

for(let i = 1; i <= 100; i++){
  if(i % 3 === 0){
    console.log('FIZZ');
  } else if (i % 5 === 0){
    console.log('BUZZ');
  }else if(i % 3 === 0 &&  i % 5 === 0){
    console.log('FIZZBUZZ');
  } else{
    console.log(`Number ${i}`);
  }
}
