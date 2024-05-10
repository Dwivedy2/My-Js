function addfive(num, key = '') {
    let msg = 'Inside: ';
    if(typeof num == "object") {
        num[key] += 5;
        msg += num[key];
    } else {
        num += 5;
        msg += num;
    }
    console.log(msg);
   
}

// pass by value
let n = 5;
addfive(n);
console.log('Outside: ', n);

// pass by reference
let num = {
    n: 5,
}

addfive(num, 'n');
console.log('Outside: ', num.n);