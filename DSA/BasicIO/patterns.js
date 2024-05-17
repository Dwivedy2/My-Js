/*
    * * *
    * * *
    * * *
*/
function pattern1(n) {
    for(let i=0; i<n; i++) {
        let ptn = '';
        for(let j=0; j<n; j++) {
            ptn += '* ';
        }
        console.log(ptn);
    }
}

/*
    * 
    * * 
    * * *
*/
function pattern2(n) {
    for(let i=1; i<=n; i++) {
        let ptn = '';
        for(let j=0; j<i; j++) {
            ptn += '* ';
        }
        console.log(ptn);
    }
}

/*
    1 
    1 2 
    1 2 3
*/
function pattern3(n) {
    for(let i=1; i<=n; i++) {
        let ptn = '';
        for(let j=1; j<=i; j++) {
            ptn += j + ' ';
        }
        console.log(ptn);
    }
}

/*
    1 
    2 2 
    3 3 3
*/
function pattern4(n) {
    for(let i=1; i<=n; i++) {
        let ptn = '';
        for(let j=1; j<=i; j++) {
            ptn += i + ' ';
        }
        console.log(ptn);
    }
}

/*
    * * * * * 
    * * * *
    * * *
    * *
    * 
*/
function pattern5(n) {
    for(let i=1; i<=n; i++) {
        let ptn = '';
        for(let j=1; j <= (n - i + 1); j++) {
            ptn += '* ';
        }
        console.log(ptn);
    }
}

/*
    1 2 3 4 5
    1 2 3 4
    1 2 3
    1 2
    1
*/
function pattern6(n) {
    for(let i=1; i<=n; i++) {
        let ptn = '';
        for(let j=1; j <= (n - i + 1); j++) {
            ptn += j + ' ';
        }
        console.log(ptn);
    }
}

/*
            *
          * * *
        * * * * *   
      * * * * * * * 
    * * * * * * * * *
*/

// logic
// star
// row = 0 to n - 1
// 2 * row + 1
// 
// space
// row 0: 8 space - 2 x 4 = 2 x (n - 1 - i)
// row 1: 6 space - 2 x 3 = 2 x (n - 1 - i)
// row 2: 4 space - 2 x 2
// row 3: 2 space - 2 x 1
// row 4: 0 space - 2 x 0
function pattern7(n) {
    for(let i = 0; i < n; i++) {
        // space
        let space = '';
        for(let j = 0; j < 2 * (n - 1 - i); j++) {
            space += ' ';
        }

        // star
        let ptn = space + ' ';
        for(let k = 0; k < (2 * i) + 1; k++) {
            ptn += '* ';
        }
        console.log(ptn);
    }
}

/*
    * * * * * * * * *
      * * * * * * *
        * * * * *
          * * *
            *
*/

// logic
// outer loop - 0 to n -1
// space
// row (i) 0: 0 space - 2 * i
// row (i) 1: 2 space - 
// row (i) 2: 4 space
// row (i) 3: 6 space
// row (i) 4: 8 space
// 
// star
// row (i) 0: 9 star - 2 * (n - 1 - i) + 1
// row (i) 1: 7 star
// row (i) 2: 5 star
// row (i) 3: 3 star
// row (i) 4: 1 star
function pattern8(n) {
    for(let i = 0; i < n; i++) {
        // space
        let space = '';
        for(let j = 0; j < 2*i; j++) {
            space += ' ';
        }

        // star
        let star = space + ' ';
        for(let k = 0; k < (2 * (n-1-i) + 1); k++) {
            star += '* ';
        }
        console.log(star);
    }
}

/*
            *
          * * *
        * * * * *   
      * * * * * * * 
    * * * * * * * * *
    * * * * * * * * *
      * * * * * * *
        * * * * *
          * * *
            *
*/

function pattern9(n) {
    // upper half
    for(let i = 0; i < n; i++) {
        // space
        let space = '';
        for(let j = 0; j < 2 * (n - 1 - i); j++) {
            space += ' ';
        }

        // star
        let ptn = space + ' ';
        for(let k = 0; k < (2 * i) + 1; k++) {
            ptn += '* ';
        }
        console.log(ptn);
    }
    // below half
    for(let i = 0; i < n; i++) {
        // space
        let space = '';
        for(let j = 0; j < 2*i; j++) {
            space += ' ';
        }

        // star
        let star = space + ' ';
        for(let k = 0; k < (2 * (n-1-i) + 1); k++) {
            star += '* ';
        }
        console.log(star);
    }
}

/*
    *
    * *
    * * *   
    * * * * 
    * * * * *
    * * * * 
    * * * 
    * * 
    * 
*/
function pattern10(n) {
    // upper half
    for(let i = 1;  i <= n; i++) {
        let ptn = '';
        for(let j = 1; j <= i; j++) {
            ptn += '* ';
        }
        console.log(ptn);
    }

    // lower half
    for(let i = 1;  i <= n-1; i++) {
        let ptn = '';
        for(let j = 1; j <= n-i; j++) {
            ptn += '* ';
        }
        console.log(ptn);
    }
}

/*
    1 
    0 1 
    1 0 1
    0 1 0 1
    1 0 1 0 1
*/
function pattern11(n) {
    for(let i=1; i<=n; i++) {
        let counter = i % 2;
        let ptn = '';
        for(let j=1; j<=i; j++) {
            ptn += counter + ' ';
            // flip
            counter = 1 - counter;
        }
        console.log(ptn);
    }
}

/*
    1      1
    12    21
    12344321
*/

/*
    logic
    print
    i = 1 to n
    j = 1 to i

    space 
    i = 1: 6 sp - 4 * 3 - 2 (n * (n - i) - (n - i - 1)))
    i = 2: 4 sp - 4 * 2 - 1 
    i = 3: 2 sp - 4 * 1 - 0
    i = 4: 0 sp

    print
    i = 1 to n
    j = i to 1
*/
function pattern12(n) {
    for(let i = 1; i <= n; i++) {
        let ptn1 = '';
        let ptn2 = '';
        let spc = '';

        // print 1
        for(let j = 1; j <= i; j++) {
            ptn1 += j;
        }

        // space
        for(let sp = 1; sp <= 2 * (n - i); sp++) {
            spc += ' ';
        }

        // print 2
        for(let j = i; j >= 1; j--) {
            ptn2 += j;
        }

        console.log(ptn1 + spc + ptn2);
    }
}

/*
    1 
    2 3 
    4 5 6
    7 8 9 10
    11 12 13 14 15
*/
function pattern13(n) {
    let counter = 1;
    for(let i = 1; i <= n; i++) {
        let ptn = '';
        for(let j = 0; j < i; j++) {
            ptn += counter++ + ' ';
        }
        console.log(ptn);
    }
}

/*
    A
    A B
    A B C
    A B C D
    A B C D E
*/
function pattern14(n) {
    for(let i = 1; i <= n; i++) {
        let ptn = '';
        let char = 65;
        for(let j = 0; j < i; j++) {
            ptn += String.fromCharCode(char + j) + ' ';
        }
        console.log(ptn);
    }
}

/*  
    A B C D E
    A B C D 
    A B C
    A B
    A
*/
function pattern15(n) {
    for(let i = 0; i < n; i++) {
        let ptn = '';
        for(let j = 0; j < n - i; j++) {
            ptn += String.fromCharCode(65 + j) + ' ';
        }
        console.log(ptn);
    }
}

/*  
    A B C D E
    F G H I 
    J K L
    M N
    O
*/
function pattern16(n) {
    let charCode = 65
    for(let i = 0; i < n; i++) {
        let ptn = '';
        for(let j = 0; j < n - i; j++) {
            ptn += String.fromCharCode(charCode++) + ' ';
        }
        console.log(ptn);
    }
}

/*  
    A B C D E
    f g h i 
    J K L
    m n
    O
*/
function pattern17(n) {
    let upChar = 65;
    let lowChar = 97;
    let char = 65;
    for(let i = 1; i <= n; i++) {
        let ptn = '';

        for(let j = 1; j <= (n + 1 - i); j++) {
            ptn += String.fromCharCode(char++) + ' ';
        }
        console.log(ptn);

        // flip
        if(char >= 65 && char <= 91) {
            // convert to lower
            char += 32;
        } else if(char >= 97 && char <= 123) {
            // convert to upper
            char -= 32;
        }
    }
}

/*  
    A
    B B 
    C C C 
    D D D D
    E E E E E
*/
function pattern18(n) {
    let char = 65;
    for(let i = 0; i < n; i++) {
        let ptn = '';
        for(let j = 0; j <= i; j++) {
            ptn += String.fromCharCode(char + i) + ' ';
        }
        console.log(ptn);
    }
}

/*

       A
      ABA
     ABCBA
    ABCDCBA
*/
/*
    Logic
    i = 1: 3 sp - (n - i) spaces
    i = 2: 2 sp
    i = 3: 1 sp

    0 - i print chars

    (i-2) to 0 print chars
*/
function pattern19(n) {
    for(let i = 1; i <= n; i++) {

        // space
        let sp = '';
        for(let j = 0; j <= (n - i); j++) {
            sp += ' ';
        }

        // increasing chars
        let char = 65;
        let ptn = sp;
        for(let j = 0; j < i; j++) {
            ptn += String.fromCharCode(char + j);
        }

        // decreasing chars
        for(let j = (i - 2); j >= 0; j--) {
            ptn += String.fromCharCode(char + j);
        }
        console.log(ptn);
    }
}

// pattern1(15);
// pattern2(15);
// pattern3(10);
// pattern4(5);
// pattern5(10);
// pattern6(10);
// pattern7(15);
// pattern8(15);
// pattern9(25);
// pattern10(11);
// pattern11(6);
// pattern12(10);
// pattern13(15);
// pattern14(10);
// pattern15(11);
// pattern16(11);
// pattern17(5);
// pattern18(5);
pattern19(5);