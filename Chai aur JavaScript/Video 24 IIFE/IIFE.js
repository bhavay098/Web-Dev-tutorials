// Immediately Invoked Function Expressions (IIFE)

(function chai() {                 // Interview:
    // named IIFE                  // IIFE Executes immediately after being defined.
    console.log(`DB CONNECTED`);   // IIFE prevents global scope variables from affecting the function 
})();                              // first () conatins function definition & second () is for execution  
                                    

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('bhavay');     // semicolon ; is neccessary to end IIFE so it doesn't interfere with other codes