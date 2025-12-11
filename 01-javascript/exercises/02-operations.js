//==================================================
//Mathematical operations in Javascript
//===================================================

//Basic Operators

let a = 10;
let b = 3;

//Addition
let addition = a + b;
console.log(`${a} + ${b} = ${addition}`); // 10 + 3 = 13

//subtraction
let subtraction = a - b;
console.log(`${a} - ${b} = ${subtraction}`); // 10 - 3 = 7

//multiplication
let multiplication = a * b;
console.log(`${a} * ${b} = ${multiplication}`); // 10 * 3 = 30

//division
let division = a / b;
console.log(`${a} / ${b} = ${division}`); // 10 / 3 = 3.3333

//module (residue of division)
let residue = a % b;
console.log(`${a} % ${b} = ${residue}`); // 10 % 3 = 1 (because 10 = 3*3 + 1 )

//exponent(potency)
let potency = a ** 2;
console.log(`${a}² = {potency}`); // 10² = 100

//Increase operators
let counter = 0;
console.log(`Incial Counter: ${counter}`);

counter = counter + 1; // Long way
console.log(`After of +1 : ${counter}`);

counter += 1; // short way (same as counter = counter +1 )
console.log(`After of +=1; ${counter}`);

counter++; // shortest way ( just add 1 )
console.log(`After of ++ : ${counter}`);

counter--; // same way for substraccion
console.log(`After of --: ${counter}`);

counter *= 2; // counter = counter * 2
console.log(`After of *=2 : ${counter}`);

//=============================================
//PRACTICAL EXERCISE : TIP CALCULATOR
//=============================================

let restaurantBill = 850; //Total bill as $850
let tipPercentage = 15;

let tip = restaurantBill * (tipPercentage / 100);
let totalBill = restaurantBill + tip;

console.log('=== TIP CALCULATOR ====');
console.log(`Bill : $${restaurantBill}`);
console.log(`Tip (${tipPercentage}%) : $${tip}`);
console.log(`Total to paid : $${totalBill}`);

//============================================
//PRACTICE : CALCULATE YOUR AGE BY DAYS 
//============================================

let myAge = 30; 

let daysLived = 30 * 365;

console.log(`You have lived approximately :${daysLived} days`);
