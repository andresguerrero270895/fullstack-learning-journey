//=== ASYNC/AWAIT - THE MODERN AND CLEAN WAY 

/*
async/await is Syntactic sugar over Promises.
It makes asynchronous code LOOK like synchronous code.

- asyn: Declares that a function is asynchronous 
- await: waits for a Promise to resolve

I'ts the most readable way to handle asynchrony!

*/

console.log("\=== ASYNC/AWAIT");

//EXAMPLE 1: Basic async function
async function greetAsync() {
  return "Hello from async!";
}

// An async function ALWAYS returns a Promise 
greetAsync().then(console.log);


//Also as an arrow function 
const farewellAsync = async () => {
  return "Goobye from async!";
};

farewellAsync().then(console.log);

//EXAMPLE 2 : Await - waiting for promises 

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function process() {
  console.log("Process Started");

  await wait(1000); //Wait 1 second
  console.log("1 second passed");

  await wait(1000); //wait another second
  console.log("2 seconds passed");

  await wait(1000); //wait another second
  console.log("3 seconds passsed");

  return "Process completed";
}

//Execute
process().then(console.log);

//EXAMPLE 3 : Async/Await vs Promises 
function getData(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name : `User ${id}`});
    }, 500);
  });
}

//with promises (more verbose)
function getUserWithPromises (){
  return getData(1). then((user => {
    console.log(`Promise - User`, user);
    return getData(2);
  }))
  .then((user2) => {
    console.log("Promise - User 2", user2);
    return "Completed"
  });
}

//With async/await (cleanner)
async function getUserWithAsync() {
  const user = await getData(1);
  console.log("Async - User", user);

  const user2 = await getData(2);
  console.log("Async - User 2:", user2);

  return "Completed";
  
}

getUserWithAsync().then(console.log);

