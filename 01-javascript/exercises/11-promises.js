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
  }, 100);
});

//Using the promises with .then() and catch()

myFirstPromise.then((result) => {
  console.log("\n === PROMISES ===");
  console.log("Success:", result);
}).catch((error) => {
  console.log("Error", error)
});

//=== EXAMPLE 2 : Converting callbacks to Promises

//Function with callback (old way)

function getUserCallback(id, callback) {
  setTimeout(() => { 
    callback({id: id, name: "Andres"});
  }, 200);
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
    }, 200);
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

function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("\n ===CHAINING PROMISES ===");
      console.log("1. User retrieved");
      resolve({ id: id, name: "Esteban"})
    }, 500);
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
    }, 500);
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
    }, 500);
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

//=== EXAMPLE 4 : Promise.all - Execute in paeallel

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("Result 1"), 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Result 2"), 2000);
});

const promise3 =  new Promise((resolve) => {
  setTimeout(() => resolve("Result 3"), 3000);
});

Promise.all([promise1, promise2, promise3])
.then((results) => {
  console.log("\n=== PROMISE.ALL");
  console.log("All results", results);
});

//Practical example: fetching data from multiple endpoints 
function getProduct(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({id: id, name: `Product ${id}`}),4000);
  });
}

//Get 3 products in parallel (faster than sequential)
Promise.all([getProduct(1), getProduct(2), getProduct(3)])
.then ((products) => {
  console.log("All products:", products);
});

//===EXAMPLE 5 : Promise.race - The first One Wins

const slow = new Promise((resolve) => {
  setTimeout(() => resolve("Slow Server"), 5000);
});

const fast = new Promise((resolve) => {
  setTimeout(() => resolve("Fast Server"), 4500);
});

//The first one to finish "wins"
Promise.race([slow, fast])
.then((result) => {
  console.log("Winner", result);
});

//Practicall use: timeout for operations
function withTimeout(promise, ms){
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject("Timeout"),ms);
  });

  return Promise.race([promise, timeout]);
}

const slowOperation = new Promise((resolve) => {
  setTimeout(() => resolve("Data"),5500);
});

withTimeout(slowOperation, 2000)
.then(console.log)
.catch(console.error);

//=== EXAMPLE 5: Promise.allSettled - All results ===

console.log("\n===PROMISE.ALLSETTLED===");

const sucessful = Promise.resolve("Success");
const failed = Promise.reject("Error");
const anotherSuccesful = Promise.resolve("Another success");

Promise.allSettled([sucessful, failed, anotherSuccesful])
.then((results) => {
  console.log("All results (including errors):");
  results.forEach((result, index) => {
    if(result.status === "fulfilled") {
      console.log(`${index}: ${result.value}`);
    } else {
      console.log(`${index}: ${result.reason}`);
    }
  });
});

