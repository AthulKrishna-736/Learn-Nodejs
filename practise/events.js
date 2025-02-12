// const EventEmitter = require("node:events");

// const emitter = new EventEmitter()

// emitter.on("order pizza", (size, topping) => {
//     console.log("order receive");
//     console.log(`baking a ${size} pizza with ${topping} toppings`);
// });


// emitter.on("order pizza", (size) =>{
//     console.log(`pizza is being baked your prefered size is ${size}`);
//     if(size === "large"){
//         console.log("you can have a complementry drink");
//     }
// });

// emitter.emit("order pizza","large","mushroom");

// const EventEmitter = require("node:events");
// const emitter = new EventEmitter()

// emitter.on("event", (name)=>{
//     console.log(`this is event one ${name}`);
// });
// emitter.on('event', (name,name1)=>{
//     console.log(`this is event ${name1}`);
// });
// emitter.on('event', (...args)=>{
//     console.log(`this contains all the arguments passed in ${args} the events`)
// })
// emitter.emit("event",1,2,3,4);

// const pizzashop = require("./pizzashop");

// const pizza = new pizzashop();
// pizza.on("order", (size, toppings)=>{
//     console.log(`this is class called event ${size, toppings}`);
// })
// pizza.order("medium", "mushrooms");
// pizza.displayordernum();