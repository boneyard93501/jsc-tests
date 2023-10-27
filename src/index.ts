import { 
    Fluence, // Import the API for JS Client
    randomKras // // Import function for choosing random relay from list of possible relay nodes (network environment)
} from "@fluencelabs/js-client";  
import {
  registerHelloWorld,
  sayHello,
  getRelayTime,
  tellFortune,
} from "./_aqua/hello-world"; // Aqua compiler provides functions which can be directly imported like any normal TypeScript function.

await Fluence.connect(randomKras()); // Connecting to the fourth kras node.

/*
For every exported `service XXX` definition in aqua code, the compiler provides a `registerXXX` counterpart. These functions provide a type-safe way of registering callback handlers for the services. The callbacks are executed when the appropriate service is called in Aqua on the current peer. The handlers take the form of an object where keys are names of functions and values are async functions used as the corresponding callbacks. For example, in (3) we are registering handlers for `HelloWorld` service functions which outputs its parameter to the console. Please note that the handlers can be implemented in both synchronous and asynchronous ways. The handler can be made asynchronous like any other function in javascript: either return a Promise or mark it with the async keyword to take advantage of the async-await pattern.
*/
registerHelloWorld({
    hello: (str) => {
        console.log(str);
    },
    getFortune: async () => {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
        return "Wealth awaits you very soon.";
    },
});

/*
For every exported `func XXX` definition in aqua code, the compiler provides an async function which can be directly called from typescript.
For example, we are calling an aqua function called `sayHello`:
*/
await sayHello();

/*
And here we are calling the `tellFortune` function.
Please keep in mind that all functions are asynchronous.
*/
console.log(await tellFortune());

const relayTime = await getRelayTime();

console.log("The relay time is: ", new Date(relayTime).toLocaleString());

// You should call `disconnect` to prevent your application from hanging.
await Fluence.disconnect();