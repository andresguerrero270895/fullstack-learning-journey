// === ASYNCHRONY IN JAVASCRIPT ===
/** 
 * Javascript is SINGLE-THREADED (a single thread)
 * This means it can only do ONE thing at time.
 * 
 * But... how does it handle multiple tasks then?
 * 
 * Answer: The EVENT LOOP and ASYNCHRONY
*/

//=== EXAMPLE 1 : Synchronous (Blocking) ===
console.log("=== SYNCHRONOUS CODE ===");
console.log("1. Fisrt");
console.log("2. Second");
console.log("3. Thrid");


// Result : 1, 2, 3 (in order)

//=== EXAMPLE 2 : Asynchronous Code ( Non - blocking)
console.log('\n=== ASYNCHRONOUS CODE ===');
console.log("1, Start");

//setTimeOut = executes code AFTER x milliseconds 
// setTimeout(() => {
//   console.log("2.  This appear later ( SetTimeout 2 seconds");
// }, 2000) // 2000 ms = 2 seconds
// console.log("3. End");

/*
Result : 

1. Start 3.End  2. This appears later (setTimeout 2 seconds)

The "3 End" appears BEFORE the "2"!

why?
Javascript does NOT Wwait for setTimeout.
It "schedules" it for later and continues to the next line 

*/


//=== EXAMPLE 3 : Multiple timers ===
// console.log("\n=== MULTIPLE TIMERS ===");

// console.log("Starting timers...");

// setTimeout(() => { console.log("Timer A : 3 seconds")}, 3000);
// setTimeout(() => { console.log("Timer B : 1 second")}, 1000);
// setTimeout(() => { console.log("Timer C : 2 seconds")}, 2000);
// console.log("All timers were scheduled");

/*
Result : 
1.Starting timers 
2. All timers were schedule , 
4. Timer B : 1 second , 
5. Timer C : 2 Seconds, 
6. Timer A : 3 seconds
*/


//EXAMPLE 4 : The asynchrony problem
console.log("\n=== THE PROBLEM ===");

//Simulate fetching user data 

function getUser() {
  let user;

  setTimeout(() => {
    user = { id: 1, name: "Juan"};
    console.log("User obtained inside the timeout", user);
  }, 1000);

  return user;  // returns BEFORE setTimeout finishes!
}

const myUser = getUser();
console.log("User outside the function", myUser); //undefined!

/* Result: 
User outside the function: undefined/ 
User obtained inside the timeout: { id: 1, name: "Juan"}

X The problem : the function returns BEFORE having the data
How do we solve it ? 
-WITH CALLBACKS, PROMISES or ASYNC/AWAIT
*/

//=== SOLUTION 1 : Callbacks ===
console.log("\n==CALLBACK SOLUTION===");
 
function getUserWithCallback(callback) {
  setTimeout(() => {
    const user = { id: 1, name: "Juan"}
    callback(user);
  }, 1000);
}

getUserWithCallback( user => {
  console.log("User with callback:", user);
});

//=== SOLUTION 2 : Promises ===
console.log("\n===PROMISE SOLUTION==");

function getUserWithPromise(){
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve({id: 1, name: "Juan"});
    }, 1000);
  });
}

getUserWithPromise()
.then(user => console.log("User with promise:", user));

//=== SOLUTION 3 : Async/Await ===
console.log("\n=== ASYNC/AWAIT SOLUTION===");

async function fetchUser () {
  const user = await getUserWithPromise();
  console.log("User with async/await:", user)
}

fetchUser();


