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
    }, 4000);
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

//With async/await (cleaner)
async function getUserWithAsync() {
  const user = await getData(1);
  console.log("Async - User", user);

  const user2 = await getData(2);
  console.log("Async - User 2:", user2);

  return "Completed";
  
}

getUserWithAsync().then(console.log);


//EXAMPLE 4 : Error handling with Try/catch 



function operationThatMightFail (sucess) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(sucess){
        console.log("\n=== TRY/CATCH WITH ASYNC ===");
        resolve("Operation sucessful!");
      } else {
      reject(new Error("The operation failed"))
      }
    }, 5000);
  });
}

async function executeWithHandling() {
  try {
    console.log("Attempting operation 1...");
    const result1 = await operationThatMightFail(true);
    console.log(result1);

    console.log("Attempting operation 2...");
    const result2 = await operationThatMightFail(false);
    console.log(result2);

  } catch {
    console.log("Error caught", error.message);
    
  } finally {
    console.log("Process finished (always executes)");
  }
}

executeWithHandling();

//EXAMPLE 5 : Async/Await with promise.all

console.log("\n ASYNC/AWAIT + PROMISE ALL");

async function getAllData() {
  try {
    console.log("Fetching data in parallel");
    
    const [ user1, user2, user3 ] = await Promise.all([
      getData(1),
      getData(2),
      getData(3)
    ]);
    
    console.log("Users retrieved", { user1, user2, user3});
  
  } catch (error) {
    console.log("Error", error.message);
  }
}

getAllData();


// EXAMPLE 20: Real case - Simulate API fetch

console.log("\n=== REAL CASE: SIMULATE API ===");

const database = {
  users: [
    { id: 1, name: "Ana", role: "admin"},
    { id: 2, name: "Luis", role: "user"},
    { id: 3, name: "Maria", role: "user"}
  ],

  products: [
    { id: 1, name: "Laptop", price: 1500},
    { id: 2, name: "Mouse", price: 500},
    { id: 3, name: "keyboard", price: 800}
  ]
};

// Simulate API Calls 
function api(endpoint, delay = 500) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(endpoint === "/users") {
        resolve({ data: database.users, status: 200});
      } else if (endpoint === "/products") {
        resolve({ data: database.products, status : 200});
      } else if (endpoint.startsWith("/users")) {
        const id = parseInt(endpoint.split("/")[2]);
        const user = database.users.find(u => u.id === id);
        if (user) { 
          resolve({ data: user, status: 200});
        } else {
          reject({ error : "User not found", status : 404});
        }
      } else {
        reject({ error: "Endpoint not found", status: 404})
      }
    }, delay);
  });
}

async function main() {
  console.log("=== APLICATION STARTED ===\n");


  try { 
    //Get all users
    console.log("Fetching users...");
    const usersResponse = await api("/users");
    console.log("Users", usersResponse.data);

    //Get all products
    console.log("Fetching orders...");
    const productsResponse = await api("/products");
    console.log("Products", productsResponse.data);

    //Get a specific user 
    console.log("\n Fetching user with ID 2 ...");
    const userResponse = await api("/users/2");
    console.log("User", userResponse.data);


    //Try to get an user that doesn't exist 
    console.log("\n Fetching user with ID 99...");
    const noneexistenResponse= await api("/users/99");
    console.log("User", noneexistenResponse.data);

  } catch(error) { 
    console.log(`Error`, error.error, `(Status: ${error.status})`);
  }
  console.log("\n===APLICATION FINISHED ===");
}

main();



