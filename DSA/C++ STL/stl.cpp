#include <bits/stdc++.h>
using namespace std;

void printVector(vector<int> v) {
    for(auto it: v) {
        cout << it << " ";
    }
    cout << endl;
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


int main() {
    explainVector();
    return 0;
}