class MyPromise {
    constructor(executor) {
      this.state = "pending"; // "pending" | "fulfilled" | "rejected"
      this.value = undefined;
      this.reason = undefined;
      this.thenCallbacks = [];
      this.catchCallbacks = [];
  
      const resolve = (value) => {
        if (this.state === "pending") {
          this.state = "fulfilled";
          this.value = value;
          this.thenCallbacks.forEach((callback) => callback(value));
        }
      };
  
      const reject = (reason) => {
        if (this.state === "pending") {
          this.state = "rejected";
          this.reason = reason;
          this.catchCallbacks.forEach((callback) => callback(reason));
        }
      };
  
      try {
        executor(resolve, reject);
      } catch (error) {
        reject(error);
      }
    }
  
    then(onFulfilled) {
      return new MyPromise((resolve, reject) => {
        if (this.state === "fulfilled") {
          resolve(onFulfilled(this.value));
        } else if (this.state === "pending") {
          this.thenCallbacks.push((value) => resolve(onFulfilled(value)));
        }
      });
    }
  
    catch(onRejected) {
      return new MyPromise((resolve, reject) => {
        if (this.state === "rejected") {
          reject(onRejected(this.reason));
        } else if (this.state === "pending") {
          this.catchCallbacks.push((reason) => reject(onRejected(reason)));
        }
      });
    }
  }
  

  const myPromise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise Resolved!");
    }, 1000);
  });
  
  myPromise.then((data) => {
    console.log(data); // Output after 1s: "Promise Resolved!"
  });
  