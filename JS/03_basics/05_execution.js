// Context are of type : 
// Global Execution Context
// Function Execution Context
// Eval Execution Context

// Javascript code is run in two phases : 

// Memory creation phase (or called creation phase) : in this phase only memory is allocated to the variables functions
// Execution phase : Code is executed in this phase
//                For every time the code is execute, a context is created, which consist of : 
// 		New Variable Enviorment
//                 Execution Thread
// 	 It returns the variable to the parent context, ie. global execution context, and then it is delete to free up the memory

let va1 = 10
let val2 = 5

function addNum(num1, num2) {
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)