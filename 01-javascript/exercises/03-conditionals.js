//=============================================
//CONDITIONALS - CHOICES DARLING! HEHEHEHE:
// Compare operators

let Age = 18;


// same as (==) - compare just the value 
console.log( Age == 18 ); // true 
console.log(Age =='18'); // true , it can covert types 

//stricly equal (===) - compare value and type 
console.log(Age === 18); // true 
console.log(Age === '18'); // false ( one is number the other one is string)

// WE MUST USE (====) INSTEAD OF USE (==) TO AVOID ERRORS

//Not equal to (!= and !==)
console.log(Age !== 17); //true ( 18 is not equal at 17)

//Greater than (>)
console,log( Age > 17); // true

//Less than (<)
console.log(Age < 18 ); // false 

//greater than or equal to 
console.log(Age >= 18 ) // true 

//less tan or equal to 
console.log(Age <= 18 ) // true 


// basic conditional (IF)

let temperature = 30;

if(temperature > 25){
  console.log('Its hot, war light clothing');
}

//if the temperature was equal to 20, Nothing will be printed 


// (IF- ELSE )

let hour = 14;

if( hour <12 ) {
  console.log('Good Morning');
} else {
  console.log(" Good evening/night");
}

//(IF- ELSE IF - ELSE (MULTIPLE CHOICES))
let dayHour = 20;

if( dayHour < 12 ){
  console.log('Good Morning');
} else if( dayHour < 18 ){
  console.log('Good Evening');
} else if( dayHour < 21 ){
  console.log('Goood Night');
} else {
  console.log('Its too late, you should sleep');
}

//==== LOGICAL OPERATORS =====

//AND (&&) - BOTH SENTENCE MUST BE TRUE 

let gotMoney = true;
let ImStarving = true;

if( gotMoney && ImStarving){
  console.log('Shall we eat!');
}

//OR(||) - AT LEAST ONE CONDITION MUST BE TRUE
let isWeekend = false;
let isHoliday = true;

if( isWeekend || isHoliday ){
  console.log('There is no shift today');
}

//NOT(!) - INVEST THE VALUE 

let israining = false;

if( !israining ) {
  console.log(' Is not raining, I can go out without umbrella');
}

//===PRACTICAL EXERCISE : AGE VERIFIER===

let userAge = 17;

console.log('===ACCESS VERIFIER===');
console.log(`Age Entered: ${userAge}`);

if(userAge < 0){
  console.log(" X Error : Age cannot be a negative number");
} else if (userAge < 13 ){
  console.log('You are a Kid, Children content available');
} else if (userAge < 18 ){
  console.log('You are a teenager. Some content is restricted');
} else if (userAge < 65 ){
  console.log('You are an adult, Full access available');
} else {
  console.log('You are and older adult, Full access available + special discounts');
}


//===SCORE EXERCISE ===
let score  = 85;


console.log('===YOUR SCORE===')
console.log(`Score Entered ${score}`);

if(score >= 90){
  console.log('Result : Excellent');
} else if (score >= 80){
  console.log('Result: Very Good');
} else if (score >= 70){
  console.log('Result: Good');
} else if (score >= 60){
  console.log('Result: Sufficient')
} else {
  console.log('Result: Failed')
}