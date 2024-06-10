// Singleton
// let new_obj = new Object()

// console.log(new_obj); // {}

let tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Micheal"
tinderUser.age = 23
tinderUser.gender = "Male"

// console.log(tinderUser); // { id: '123abc', name: 'Micheal', age: 23, gender: 'Male' }

// Nested Objects
let user = {
    id: "123abc",
    username: {
        fullname: {
            userfullname: {
                firstname: "Omkareshwar",
                middlename: "Nath",
                lastname: "Dwivedy"
            }
        }
    }
}

// console.log(user['username']['fullname']['userfullname']['firstname']); // Omkareshwar

// console.log(user.username.fullname.userfullname.firstname); // Omkareshwar

// Object Merge
let obj1 = {'1': 'a', '2': 'b'}
let obj2 = {'3': 'c', '4': 'd'}

// let obj3 = { obj1, obj2 }

// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// Use Object.assign(target, source), target - which object to assign
let obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// Use Spread Operator
let obj4 = {...obj1, ...obj2}

// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

let users_objects = [
    {
        id: 1,
        name: "A"
    }, 
    {
        id: 2,
        name: "B"
    }, 
    {
        id: 3,
        name: "C"
    }, 
]

// console.log(users_objects[1])

// Methods on Objects
// console.log(Object.keys(users_objects)); // [ '0', '1', '2' ]
// console.log(Object.keys(user)); // [ 'id', 'username' ]
// console.log(Object.values(user)); // [ '123abc', { fullname: { userfullname: [Object] } } ]
// console.log(Object.entries(user)); // [ [ 'id', '123abc' ], [ 'username', { fullname: [Object] } ] ]
// console.log(Object.entries(users_objects));

// console.log(user.hasOwnProperty('id')); // true


// Destructuring of Objects : Nothing just simplyfying property usage in objects
// Example : instead of using user.username you can use directly username through above

// console.log(user.username);
const {username} = user // extract key 'username' from user, u can use directly

// console.log(username);

// Or if you want to change the name, u can do it
const {id: userUniqueId} = user

// console.log(userUniqueId); // 123abc

const {name: user_name} = users_objects[1]

// console.log(user_name);
