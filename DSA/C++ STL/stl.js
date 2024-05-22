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

// VECTOR

// CODE IN C++
/*
    void explainVector() {
        vector<int> vc;
        vc.push_back(1); 
        vc.emplace_back(1); // fast exec

        vector<pair<int, int>> vec;
        vec.push_back({1, 2}); 
        vec.emplace_back(1, 2);

        vector<int> v1(5, 100); // [100, 100, 100, 100, 100]

        vector<int> v2(5);   // [0, 0, 0, 0, 0]

        vector<int> v3(5, 20);
        vector<int> v4(v3); // [20, 20, 20, 20, 20]

        // iterators in vectors
        vector<int> v;
        v.push_back(1);
        v.push_back(2);
        v.push_back(3);
        v.push_back(4);
        // {1, 2, 3, 4}
        vector<int>::iterator it = v.begin(); // memory address of v[0]
        it++;
        cout << *(it) << endl; // 2

        it = it + 2;
        cout << *(it) << endl;
 
        vector<int>::iterator it = v.end(); // {1, 2, 3, 4} it points to address after 4
        vector<int>::iterator it = v.rend(); // {4, 3, 2, 1} it points to address after 1
        vector<int>::iterator it = v.rbegin(); // {4, 3, 2, 1} it points to address at 4 i.e v[0]

        cout << v[0] << " " << v.at(0);

        cout << v.back(); // 4

        // loops
        for(vector<int>::iterator it = v.begin(); it != v.end(); it++) {
            cout << *(it) << " ";
        }

        for(auto it = v.begin(); it != v.end(); it++) {
            cout << *(it) << " ";
        }
        
        for(auto it : v) {
            cout << it << " ";
        }

        // erase
        // {1, 2, 3, 4} to {1, 3, 4}
        v.erase(v.begin() + 1);

        // {10, 20, 30, 40, 50} to {10, 20, 50}
        v.erase(v.begin() + 1, v.begin() + 4);

        // insert functions
        // {1, 2, 3, 4, 5} to {20, 1, 2, 3, 4, 5}
        v.insert(v.begin(), 20);

        // {20, 1, 2, 3, 4, 5} to {20, 1, 2, 77, 77, 77, 3, 4, 5}
        v.insert(v.begin() + 3, 3, 77);

        vector<int> copy(2, 11);
        v.insert(v.begin(), copy.begin(), copy.end()); // {11, 11, 20, 1, 2, 77, 77, 77, 3, 4, 5}

        v.size(); // 11

        v.pop_back(); // {11, 11, 20, 1, 2, 77, 77, 77, 3, 4}

        // v1 -> {10, 20}
        // v2 -> {30, 40}
        v1.swap(v2); // v1 -> {30, 40}, v2 -> {10, 20}

        v.clear(); // {}

        v.empty(); // true
    }

*/

function explainVectorJs() {
    // vector<int> vc;
    let vc = [];
    vc.push(1);

    // vector<pair<int, int>> vec;
    let vec = [];
    vec.push([1, 2]);
    vec.push([1, 2]);

    // vector<int> v1(5, 100);
    let v1 = Array(5).fill(100); // [100, 100, 100, 100, 100]

    // vector<int> v2(5);
    let v2 = Array(5).fill(0); // [0, 0, 0, 0, 0]

    // vector<int> v3(5, 20);
    // vector<int> v4(v3);
    let v3 = Array(5).fill(20);
    let v4 = v3.slice(); // [20, 20, 20, 20, 20]

    // iterators in vectors
    let v = [1, 2, 3, 4];
    let it = v[Symbol.iterator]();
    it.next(); // {value: 1, done: false}
    console.log(it.next().value); // 2

    it.next();
    console.log(it.next().value); // 4

    // cout << v[0] << " " << v.at(0);
    // console.log(v[0], v[0]);

    // cout << v.back(); // 4
    console.log(v[v.length - 1]); // 4

    // loops
    for (let val of v) {
        console.log(val);
    }

    // erase
    // {1, 2, 3, 4} to {1, 3, 4}
    v = [1, 2, 3, 4];
    v.splice(1, 1);

    // {10, 20, 30, 40, 50} to {10, 20, 50}
    v = [10, 20, 30, 40, 50];
    v.splice(2, 2);

    // insert functions
    // {1, 2, 3, 4, 5} to {20, 1, 2, 3, 4, 5}
    v = [1, 2, 3, 4, 5];
    v.splice(0, 0, 20);
    
    // {20, 1, 2, 3, 4, 5} to {20, 1, 2, 77, 77, 77, 3, 4, 5}
    v.splice(3, 0, 77, 77, 77);

    let copy = [11, 11];
    v.splice(0, 0, ...copy); // {11, 11, 20, 1, 2, 77, 77, 77, 3, 4, 5}

    // console.log(v.length); // 11

    v.pop(); // {11, 11, 20, 1, 2, 77, 77, 77, 3, 4}

    // v1 -> {10, 20}
    // v2 -> {30, 40}
    [v1, v2] = [v2, v1]; // v1 -> {30, 40}, v2 -> {10, 20}

    v.length = 0; // {}

    console.log(v.length === 0); // true
}


//  LIST

// CODE IN C++
/*
    void explainList() {
        // internally doubly ll
        list<int> ls;

        ls.push_back(1);
        ls.emplace_back(2);

        ls.push_front(3); // IMP: operation is cheaper than insert in Vector
        ls.emplace_front(); {1, 2}
    }
*/

function explainListJs() {
    let ls = [2, 5, 3];

    ls.push(1);

    ls.unshift(6);
    ls.shift(); 
}

