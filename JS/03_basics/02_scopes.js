var c = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a); // error
// console.log(b); // error
// console.log(c); // 30

// Closure
function one() {
    const username = "Omkareshwar"

    function two() {
        const website = "Github"
        console.log(username);
    }

    // console.log(website); // error, website is not defined 
    two()
}

// one()

// two() // error, two is not defined

// Closure
// Nesting of function and enviornments ( lexical enviornments ) to maintain the local references
// docs // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// Example

function call() {
    const penname = "Om26"

    function inside() {
        console.log(penname);
    }

    return inside
}

let insideMethodRef = call()

// insideMethodRef() // Om26

// Explanation
// In languages like C, C++, Java a scope is maintained, i.e const penname should be destroyed as soon as 
// line 45 is called, like call(). Life of variables inside a scope is its execution. But here after execution
// of call() at 45 then also "penname" is not destroyed, but accessible
// so actually when call() is executed inside() maintains a reference with its lexical enviornment, because of
// that its variables are accessible

// Ex.2 Closure
function makeAdder(x) {

    return function (y) {
        return x + y;
    };

}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12


// Mini Hoisting
// Example

// printone() // Case2 Output : 1

function printone() {
    console.log(1);
}

// printone() // Case1 Output : 1

// printtwo() // Case2 Output : error, Cannot access 'printtwo' before initialization

// Variables in Js can hold function reference also
const printtwo = function() {
    console.log(2);
}

// printtwo() // Case1 Output : 2
  
// So, here the storage of functions are different that's why printone() can be called
// before or after the declaration of printone(), but in the second type, printtwo() throws
// error if tried to access before declaration.