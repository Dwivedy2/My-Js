// Immediatly Invoked Function Execution

// normal function execution
// function connectDb() {
//     console.log('Db connected');
// } 
// connectDb() // Db connected

// ()()

// IIFE, named IIFE
(function connectDb() {
    console.log('Db connected');
})(); // Db connected


// Below code gives error, as IIFE dont know when to end context
// Use a ; to stop the context

// unnamed IIFE
( (connectionName) => {
    console.log(`${connectionName} Db connected`);
} )('Dev')
