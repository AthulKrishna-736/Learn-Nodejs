async function first() {
    console.log("First start");
    await second();
    console.log("First end");
  }
  
  async function second() {
    console.log("Second start");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Second resolved");
        resolve();
      }, 1000);
    });
  }
  
  console.log("Script start");
  first();
  console.log("Script end");
  