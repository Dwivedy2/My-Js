#include <bits/stdc++.h>
using namespace std;

void printVector(vector<int> v) {
    for(auto it: v) {
        cout << it << " ";
    }
    cout << endl;
}

void printVector(list<int> v) {
    for(auto it: v) {
        cout << it << " ";
    }
    cout << endl;
}

void printVector(deque<int> v) {
    for(auto it: v) {
        cout << it << " ";
    }
    cout << endl;
}

void printVector(set<int> v) {
    for(auto it: v) {
        cout << it << " ";
    }
    cout << endl;
}

void printVector(multiset<int> v) {
    for(auto it: v) {
        cout << it << " ";
    }
    cout << endl;
}

void printVector(map<int, int> mp) {
    for(auto it: mp) {
        cout << it.first << " " << it.second << endl;
    }
}

void explainPair() {
    pair<int, int> p = {1, 3};

    cout << p.first << " " << p.second << endl;

    pair<int, pair<int, int>> p1 = {1, {2, 5}};

    cout << p1.first << " " << p1.second.first << " " << p1.second.second << endl;

    pair<int, int> arr[] = {{1, 2}, {4, 5}};

    cout << arr[1].first << endl;
}

void explainVector() {
    
    // Simple vector of integers
    vector<int> v;

    v.push_back(1);
    v.emplace_back(2); //fast

    // Simple vector of pairs
    vector<pair<int, int>> vec;

    vec.push_back({2, 3});
    vec.emplace_back(4, 5);

    vector<int> v1(5, 100); // {100, 100, 100, 100, 100}

    vector<int> v2(5); // {0, 0, 0, 0, 0}

    vector<int> v3(v1); // {100, 100, 100, 100, 100}

    // iterators in vectors
    vector<int>::iterator it = v.begin();
    
    it++;
    cout << *(it) << endl;

    vector<int>::iterator it2 = v.end(); // {1, 2, 3, 4} it points to address after 4
    vector<int>::reverse_iterator rite = v.rend();
    vector<int>::reverse_iterator ritb = v.rbegin();

    cout << v[0] << " " << v.at(0) << endl;

    // Loops
    for(vector<int>::iterator vit = v.begin(); vit != v.end(); vit++) {
        // cout << *vit << " ";
    }
    // cout << endl;  

    for(auto vit = v.begin(); vit != v.end(); vit++) {
        // cout << *vit << " ";
    }
    // cout << endl; 
    
    for(auto vit: v) {
        // cout << vit << " ";
    }
    // cout << endl; 

    // Erase
    vector<int> b = {2, 4, 5, 6, 4, 3, 2};

    b.erase(b.begin() + 2); // {2, 4, 6, 4, 3, 2}

    b = {10, 20, 30, 40, 50}; 

    b.erase(b.begin() + 1, b.begin() + 3); // {10, 40, 50}

    // Insert functions
    v.insert(v.begin(), 4); // {4, 1, 2}

    v.insert(v.begin() + 1, 3, 2); // {4, 2, 2, 2, 1, 2}

    vector<int> container(2, 11); // {11, 11}

    v.insert(v.begin() + 2, container.begin(), container.end()); // {4, 2, 11, 11, 2, 2, 1, 2}

    cout << v.size() << endl; // 8

    v.pop_back();

    cout << *(v.end() - 1) << endl; // 1

    v1.swap(v2);

    v.clear(); // {}

    cout << v.empty() << endl; // true
}

void explainList() {
    // internally implemented as doubly ll
    list<int> ls;

    ls.push_back(1);
    ls.emplace_back(2); // fast

    ls.push_front(3); // faster than insert in vector
    ls.emplace_front(4);

    printVector(ls);

    // rest function same as vector
    // begin, end, rend, rbegin, size, clear, insert, swap
}

void explainDequeue() {
    deque<int> dq;

    dq.push_back(1);
    dq.emplace_back(2); // fast

    dq.push_front(3); // faster than insert in vector
    dq.emplace_front(7);

    printVector(dq);

    // rest function same as vector
    // begin, end, rend, rbegin, size, clear, insert, swap
}

void explainStack() {
    // LIFO
    // TIME COMPLEXITY: Push, Pop, Top - O(1)
    stack<int> st;

    st.push(1); // {1}
    st.push(2); // {2, 1}
    st.push(3); // {3, 2, 1}
    st.emplace(4); // {4, 3, 2, 1}

    cout << st.top() << endl; // 4

    st.pop(); // 4

    cout << st.top() << endl; // 3

    cout << st.size() << endl; // 3

    cout << st.empty() << endl; // false

    stack<int> st1;
    st1.swap(st);

    cout << st1.top() << endl; // 3
}

void explainQueue() {
    // FIFO
    // TIME COMPLEXITY: Push, Pop, Top - O(1)
    queue<int> q;

    q.push(1);
    q.push(3);
    q.emplace(5);

    q.back() += 5; // 10

    cout << q.back() << endl; // 10

    cout << q.front() << endl; // 1

    q.pop(); // 1

    cout << q.front() << endl; // 3

    // size, empty, swap same as stack
}

void explainPriorityQueue() {
    // MAX HEAP: Tree DS inside
    // Max always at top
    // TIME COMPLEXITY: Push, Pop -> O(logn), Top -> O(1)
    priority_queue<int> pq;

    pq.push(3); // {3}
    pq.push(2); // {3, 2}
    pq.push(5); // {5, 3, 2}
    pq.push(4); // {5, 4, 3, 2}

    cout << pq.top() << endl; // 5

    pq.pop();

    cout << pq.top() << endl; // 4

    // size, empty, swap same as stack

    // Minimum Heap: smaller at top
    priority_queue<int, vector<int>, greater<int>> qp;
    qp.push(5); // {5}
    qp.push(3); // {3, 5}
    qp.push(6); // {3, 5, 6}
    qp.push(2); // {2, 3, 5, 6}

    cout << qp.top() << endl; // 2

    qp.pop();

    cout << qp.top() << endl; // 3
    
}

void explainSet() {
    // Unique + Sorted
    // TIME COMPLEXITY: O(logn)
    set<int> s;
    s.insert(1); // {1}
    s.insert(2); // {1, 2}
    s.insert(3); // {1, 2, 3}
    s.insert(3); // {1, 2, 3}
    s.insert(3); // {1, 2, 3}
    s.insert(4); // {1, 2, 3, 4}
    s.emplace(0); // {0, 1, 2, 3, 4}

    // printVector(s);

    // Functionality of insert in vector
    // can be used also, that only increase the 
    // efficience

    // begin(), rbegin(), end(), rend(), size(),
    // empty(), swap() those of above

    // Find
    auto sIt = s.find(3); // 3
    sIt = s.find(9); // s.end()

    cout << *sIt << endl;

    sIt = s.find(3); // 3 

    // Erase
    s.erase(sIt); // takes constant time

    s.erase(1); // takes logarithmic time

    s.insert(4);
    s.insert(3);
    s.insert(6); // {0, 2, 3, 4, 6}

    auto beginIt = s.find(2);
    auto endIt = s.find(4);

    s.erase(beginIt, endIt); // {0, 4, 6}

    int cnt = s.count(2); // 1

    // lower_bound and upper_bound works in the same ways as in 
    // vector it does, O(logn)

    // it works the same as binary search, if the element is found then the
    // iterator is returned pointing to that element, 
    // if not found then an iterator is returned which is just greater than the 
    // element
    auto lIt = s.lower_bound(6); // 6

    // it works the same as binary search, if the element is found or not an
    // iterator is returned pointing to the immediate greater than the element
    auto uIt = s.upper_bound(4); // 6

    printVector(s);

    cout << *lIt << " " << *uIt << endl;
}

void explainMultiSet() {
    // Only Sorted
    // TIME COMPLEXITY: O(logn)
    multiset<int> ms;

    ms.insert(1); // {1}
    ms.insert(1); // {1, 1}
    ms.insert(1); // {1, 1, 1}

    ms.erase(1); // {}

    ms = {1, 1, 1, 1, 1};

    multiset<int>::iterator begin = ms.find(1);
    ms.erase(begin); // {1, 1, 1, 1}
    ms = {1, 1, 1, 1};
    auto it = ms.find(1);
    begin = it;
    begin++;
    begin++;
    ms.erase(it, begin); // {1, 1}

    // rest all function are same
}

void explainUnorderedSet() {
    // Only Unique
    // TIME COMPLEXITY: In most of the cases it is O(1), but if
    // there is worst case scenerio where the data is passed intentionally
    // in such a condition that it wants to behave abrubtly, then it is O(N)
    unordered_set<int> us;

    // lower_bound and upper_bound does not works here,
    // rest all the function are same as set. It does not stores
    // data in a particular order or sorted order. It has better time complexity
    // than set in most cases, except some when collision happens
}

void explainMap() {
    // Everything is stored in {Key, Value}
    // Key is always "sorted" and "unique"
    map<int, int> mp;
    map<int, pair<int, int>> mp1;
    map<pair<int, int>, int> mp2;

    mp[1] = 2; // {{1, 2}}
    mp.emplace(3, 1); // {{1, 2}, {3, 1}}
    mp.insert({2, 4}); // {{1, 2}, {2, 4}, {3, 1}}
    mp2[{4, 5}] = 10; // {{{4, 5}, 10}}

    cout << mp[1] << endl; // 2
    cout << mp[4] << endl; // 0, '4' as a key is not found

    map<int, int>::iterator it = mp.find(2);

    auto lb = mp.lower_bound(2);
    auto ub = mp.upper_bound(4);

    // erase, size, swap, empty are same as above
}

void explainMultiMap() {
    // Keys are only sorted, no unique
    // map[key] cannot be used here
}

void explainUnorderedMap() {
    // Keys are unique, not sorted
}

int main() {
    explainMap();
    return 0;
}