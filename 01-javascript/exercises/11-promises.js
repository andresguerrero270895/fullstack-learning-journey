// === PROMISES THE ELEGANT SOLUTION ===

/*
 A promise is an object that represents the FUTURE
 result of an asynchronous operation.

 States of a promise : 
 -PENDING: Waiting (has'bt finished yet)
 -FULLFILLED: Completed (finished successfully)
 -REJECTED: Rejected (there was an error)

 It's like when you order food for delivery: 
 -They give you a tracking number(promise)
 -Status: "Being prepared" (pending)
 -Status : "Delivered" (fulfilled) or "canceled" (Rejected)
 */

console.log("\n === PROMISES ===");

// EXAMPLE : Creating a Promise 

const myFirstPromise = new Promise ((resolve, reject) => {
  // resolve = call when everything went well 
  // reject = call when there was an error

  const sucess = true; // change to false to see the error

  setTimeout(() => {
    if(sucess) {
      resolve("Operation successful!"); //Fullfilled
    } else {
      reject("Something went wrong"); //Rejected
    }
  }, 1000);
});

//Using the promises with .then() and catch()

myFirstPromise.then((result) => {
  console.log("Success:", result);
}).catch((error) => {
  console.log("Error", error)
});

//=== EXAMPLE 2 : Converting callbacks to Promises

//Function with callback (old way)

function getUserCallback(id, callback) {
  setTimeout(() => { 
    callback({id: id, name: "Andres"});
  }, 2000);
}

//Same function with promises
function getUserPromise(id) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if(id <= 0) {
        reject("Invalid ID")
        return;
      }
      resolve({id: id, name: "Andres"});
    }, 2000);
  });
}

//Using the promise Version:
getUserPromise(1)
.then((user) => {
  console.log("User retrieved", user);
})
.catch((error) => {
  console.log("Error", error);
});

//=== EXAMPLE 3 : Chaining Promises (.then chain)

console.log("\n ===CHAINING PROMISES ===");

function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1. User retrieved");
      resolve({ id: id, name: "Esteban"})
    }, 3000);
  });
}

function getOrders(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2. Order retrieved");
      resolve({ 
        user: user, 
        orders: [{ id: 101, product: "Laptop"}]
      });
    }, 3000);
  });
}

function getDetails(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("3. Details Retrieved");
      resolve({
        ...data,
        details: { price: 15000, status: "Shipped"}
      });
    }, 3000);
  });
}

// Clean chainig (goodbye callback hell!)
// getUser(1)
// .then((user) => getOrders(user))
// .then((data) => getDetails(data))
// .then((result) => {
//   console.log("Final result", result);
// }).catch((error) => {
//   console.log("Error at any step", error);
// });

//Even shorter form 
getUser(1)
.then(getOrders)
.then(getDetails)
.then(console.log)
.catch(console.error);

