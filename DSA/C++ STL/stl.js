// PAIR

// CODE IN C++
/*
    void explainPair() {
        pair<int, int> p = {1, 3};

        cout << p.first << " " << p.second << endl;

        pair<int, pair<int, int>> p1 = {1, {4, 5}};

        cout << p1.first << " " << p1.second.second << " " << p.second.first << endl;

        pair<int, int> arr[] = {{1, 2}, {4, 6}, {3, 5}};

        cout << arr[1].second << endl;
    }
*/

function explainPairJs() {
    let p = {first: 1, second: 2};
    
    console.log(`${p.first} ${p.second}`);

    let p1 = {first: 1, second: {first: 4, second: 5}};

    console.log(`${p1.first} ${p1.second.second} ${p1.second.first}`);

    let arr = [{first: 1, second: 2}, {first: 4, second: 6}, {first: 3, second: 5}];

    console.log(arr[1].second);

}