#include <bits/stdc++.h>
using namespace std;

void printName(int i, int n) {
    // base condition
    if(i > n) return;

    cout << "Omkareshwar Nath Dwivedy" << endl;
    printName(i+1, n);
}

void printLinear(int i, int n) {
    // base condition
    if(i > n) return;

    cout << i << endl;
    printLinear(i+1, n);
}

void printDecreasing(int i, int n) {
    int val = n - i + 1;

    if(val == 0) return;

    cout << val << endl;

    printDecreasing(i+1, n);
}

void printLinearBacktrack(int i, int n) {
    int val = n - i + 1;

    if(val == 0) return;

    printLinearBacktrack(i+1, n);

    cout << val << endl;
}

void printDecreasingBacktrack(int i, int n) {
    if(i > n) return;

    printDecreasingBacktrack(i+1, n);

    cout << i << endl;
}

int main() {
    
    // P1. Print your name n times
    // TC: O(n), SC: O(n), which is stack space
    // printName(1, 5);

    // P2. Print linearly from 1 to N
    // TC: O(n), SC: O(n), which is stack space
    // printLinear(1, 5);

    // P3. Print decreasing from N to 1
    // TC: O(n), SC: O(n), which is stack space
    // printDecreasing(1, 7);

    // P4. Print Linearly from 1 to N, but Backtrack
    // TC: O(n), SC: O(n), which is stack space
    // printLinearBacktrack(1, 7);

    // P5. Print Decreasing from N to 1, but Backtrack
    // TC: O(n), SC: O(n), which is stack space
    printDecreasingBacktrack(1, 7);

    return 0;
}