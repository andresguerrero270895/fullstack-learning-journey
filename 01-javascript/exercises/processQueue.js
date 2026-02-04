async function processQueue (tasks) {
  const results = [];

  for (const[ index, task ] of tasks.entries()) { // entries() returns each task along its index
    console.log(`Processing task ${index + 1}/${tasks.length}`);

    const result = await task();
    results.push(result);
    console.log(`✅ Task ${index + 1} completed:`, result);
  }
  return results;
}

// create example tasks 
const myTasks = [
  () => new Promise(resolve => setTimeout(() => resolve('Task A completed'), 1000)),
  () => new Promise(resolve => setTimeout(() => resolve('Task B completed'), 500)),
  () => new Promise(resolve => setTimeout(() => resolve('Task C completed'), 1500)),
];

// Call the processQueue function 
processQueue(myTasks)
  .then(results => console.log('All tasks completed:', results))
  .catch(error => console.error('Error processing tasks:', error));