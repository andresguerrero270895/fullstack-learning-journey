//=== CALLBACKS - THE FIRST SOLUTION 
/*
A callback is a function passed as an argument to another function, to be 
executed WHEN something completes.

It's like saying: "When you finish, call me at this number"

*/

console.log("\n===CALLBACKS===");

// //===EXAMPLE 1 : Basic Callback ===

// function greet( name, callback) {
//   console.log(`Hello, ${name}`);
//   callback(); // Executes callbacks after greeting

// }

// function sayGoodbye () {
//   console.log("Goodbye!");
// }

// greet("Maria", sayGoodbye);  // Result: Hello, Maria -> Goodbye

// //With anonymous function: 
// greet("Peter", () => {
//   console.log(`It was a pleasure meeting you`);
// });


// //=== EXAMPLE 2 : Callback with data ===
// function getUserWithCallback (id, callback) {
//   console.log(`Searching for user ${id} ...`);

//   setTimeout(() => {
//     //Simulate finding user after 1 second

//     const user = {
//       id: id,
//       name: "Juan perez",
//       email: "juan@email.com"
//     };

//     callback(user) //pass user to callback

//   }, 1000);
// }

// getUserWithCallback(1, (user) => {
//   console.log("User found", user);
//   console.log(`Welcome, ${user.name}!`);
// });

// console.log("This executes while we search");

// //===EXAMPLE 3 : Error-First Callback pattern ===
// function divide (a, b, callback) {
//   //Convention: callback(error, result)
//   //On error: first parameter has error / On success: first parameter is null
//   if(b === 0) {
//     callback( new Error ("Cannot divide by zero"), null);
//     return;
//   }
//   callback(null, a/b);
// }

// //Usage with error handling:
// divide(10,2, (error, result) => {
//   if(error){
//     console.log("X Error:", error.message);
//     return;
//   }
//   console.log("Result:", result);
// });

// divide(10, 0, (error, result) => {
//   if(error) {
//     console.log("X Error:", error.message);
//     return;
//   }
//   console.log("Result:", result);
// });

// EXAMPLE 4: CALLBACK HELL (The problem)

console.log("\n === CALLBACK HELL ===");
/*
What happens when we need to do MULTIPLE asynchronous operations that
depend on each other ?
*/

function getUserDB(id, callback) {
  setTimeout(() => {
    callback({id: id, name: "Juan"});
  }, 500);
}

function getUserOrders(user, callback) {
  setTimeout(() => {
    callback([
      {id: 101, product: "Laptop"},
      {id: 102, product: "Mouse"}
    ]);
  }, 500);
}

function getOrderDetails(order, callback) {
  setTimeout(() => {
    callback({
      ...order,
      price: 15000,
      status: "Shipped"
    });
  }, 500);
}

//CALLBACK HELL - Difficult to read/maintain code 

getUserDB(1, (user) => {
  console.log("User", user);

  getUserOrders(user, (orders) => {
    console.log("Orders:", orders);

    getOrderDetails(orders[0], (details) => {
      console.log("Order details:", details);

      //Imagine more nested levels..
      //This becomes unmaintainable
    });
  });
});

/*
X Problems with callback Hell: 
1. Hard to read code ( pyramid of doom)
2. Diffilcult error handling.
3. Challenging to debug
4. Can't use try/catch
SOLUTION : PROMISES
*/


