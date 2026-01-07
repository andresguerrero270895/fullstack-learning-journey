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