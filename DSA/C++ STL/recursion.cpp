#include <bits/stdc++.h>
using namespace std;

// RECURSION: When a function calls itself,
//            untill a specified condition is met,
//            this condition is called as base condition.
void f() {
    cout << "1" << endl;

    // SEGMENTATION FAULT or STACK OVERFLOW ERROR
    // This error occurred as each function call occupies a mempry in a call stack
    // since this call is not completed, due to another call so '1' get printed all over
    // so there is a memory overflow or a stack overflow.
    f();
}

int gCount = 0;

void f1() {
    // base condition
    if(gCount == 3) return;

    cout << gCount << endl;
    gCount++;
    
    f1();
}

int main() {

    // f();
    f1();

    return 0;
}