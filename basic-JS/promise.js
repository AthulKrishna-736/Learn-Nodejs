const myPromise = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        reject('Promise is resolved')
    },2000)
})

myPromise
.then((message) => {
    console.log('message: ', message)
})
.catch((err)=> {
    console.error(err)
})

import fetch from "node-fetch"; // Import fetch manually

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Users:", data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

fetchUsers();

