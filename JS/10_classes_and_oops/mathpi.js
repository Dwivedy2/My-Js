// Can I change Math.PI ?

console.log(Math.PI); // 3.141592653589793

Math.PI = 4;

console.log(Math.PI); // 3.141592653589793

const Obj = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(Obj);

// as writable: false, so cant change
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

const OmConstant = {
    VALUE: 8,
    owner: "Omkareshwar Nath Dwivedy",
    feild: "Computer Science"
}

Object.defineProperty(OmConstant, "VALUE", {
    writable: false,
    enumerable: false
});

// now VALUE is only readonly and not loopable

OmConstant.VALUE = 9;

console.log(OmConstant.VALUE); // 8

for (const key in OmConstant) {
    console.log(`${key}: ${OmConstant[key]}`);
}

// owner: Omkareshwar Nath Dwivedy
// feild: Computer Science