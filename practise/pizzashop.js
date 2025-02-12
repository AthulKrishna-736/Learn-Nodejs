const EventEmitter = require("node:events");


class pizzashop extends EventEmitter{
    constructor(){
        super();
        this.ordernum = 0;
    }

    order(size, toppings){
        this.ordernum++;
        this.emit("order", size, toppings);
    }

    displayordernum(){
        console.log(`current order num is ${this.ordernum}`);
    }
}

module.exports = pizzashop;