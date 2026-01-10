// EXERCISE 1 : Traffic Light 

/* 
Create a traffic light that changes color at certain intervals:
- Red : 3 seconds
- Yellow : 1 second, 
-Green: 2 seconds
-Repeat indefinitely
*/

function wait(ms) {
 return new Promise( resolve => setTimeout(resolve, ms));
}

async function trafficLight() {
  console.log("\n TRAFFIC LIGHT STARTED");

  while(true) {  //Infinite loop
    console.log("RED - Stop");
    await wait(3000);

    console.log("YELLOW  - Caution");
    await wait(1000);
    
    console.log("GREEN - Go");
    await wait(2000);
  }
}

trafficLight();