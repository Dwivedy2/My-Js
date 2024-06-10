// While loops

// on some condition 

let i = 0
while (i < 11) {
    // console.log(i);
    i += 2
}
// 0
// 2
// 4
// 6
// 8
// 10

// on arrays

let arr = [2, 4, 3, 5, 7, 9, 2, 5]

let arrIndex = 0

while (arrIndex < arr.length) {
    // console.log(arr[arrIndex]);
    arrIndex++
}

// do while loops

let val = -7

do {
    console.log(`val: ${val}`);    
    val++
} while (val < 5);