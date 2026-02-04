function unstableOperation ()  {
  return new Promise((resolve, reject) => {

    const sucess = Math.random() > 0.7; // generates a random number between 0 an 1 

    setTimeout(() => {
      if(sucess) {
        resolve("Data obtained!"); // operation is sucessful
      } else {
        reject(new Error("Connection failed")); // operation fails
      }
    }, 500); // simulate a delay (500ms)
  })
}

async function retry(operation, maxAttempts) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++){ // retry function tries to execute the operation multiple times
    try {
      console.log(`Attempt ${attempt} of ${maxAttempts}...`);
      const result = await operation(); // use await because the operation returns a promise
      console.log("Sucess", result);
    } catch (error) {
      console.log(`Attempt ${attempt} failed: ${error.message}`); // operation fails, catch the error and print a message
      
      if(attempt === maxAttempts) {
        throw new Error(`Failed after ${maxAttempts} attempts`); // if it fails after the maximun attempts, we throw an error
      }
      await wait(1000); // pauses the code fo 1 second before trying again
    }
  }     
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//Test 
retry(unstableOperation, 5 ) 
  .then(console.log)
  .catch(console.log)


