const accountId = 14822
let accountEmail = "omkareshwar@google.com"
var accountPassword = "1234" // outside scope, global
accountCity = "Indore"
let accountState; // undefined

// accountId = 1234 // assignment to const not allowed

accountEmail = "omk@microsoft.com"
accountPassword = "3221"
accountCity = "Pune"

/*
    Prefer not to use var,
    because of block scope & functional scope
*/

// console.log("accountId", accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])