// Lexical Scoping means, child function has access to parent function properties
// example
function parent() {
    // property
    let fatherName = "Papa";
    let motherName = "Mom";

    function baby1() {
        // child has access
        // Output : My father name is Papa, and my mother name is Mom
        let baby1Name = "Brother";
        console.log(`My father name is ${fatherName}, and my mother name is ${motherName}`);
    }

    // sibilings cannot access each other property
    function baby2() {
        // Error: baby1Name is not defined
        console.log(`My sibiling is : ${baby1Name}`);
    }

    baby1();
    // baby2();
}

// parent();


// closures
function getHashColour(color) {
    return function() {
        // since has lexical scoping, access to parent which is "color"
        return `${color}Red`;
    }
}

let hashedColor = getHashColour("Orange")
let newColor = hashedColor();
console.log(newColor);
