// for

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (let i = 0; i < 11; i++) {
//     if(i == 5) console.log("-----------5------------");    
//     console.log(i);
// }

// for (let i = 1; i < 11; i++) {
//     console.log(`\nTable of ${i}`);
//     for (let j = 1; j < 11; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);        
//     }
// }

let usernames = ["Mohan", "Sohan", "Rajesh", "Smita", "Manohar", "Raja"]

// for (let i = 0; i < usernames.length; i++) {
//     console.log(usernames[i]);   // i <= usernames.length; log -> undefined in last
// }

// Break, Continue
// for (let i = 0; i < usernames.length; i++) {
//     if ( usernames[i] == "Manohar" ) {
//         console.log("Found Manohar, not required to interrogate further !");
//         break
//     } else if ( usernames[i] == "Sohan" ) {
//         console.log(`Leave ${usernames[i]}, he was not present that day !`);
//         continue
//     }
//     console.log(`Next: ${usernames[i]}`);
// }