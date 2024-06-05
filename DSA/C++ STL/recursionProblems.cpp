#include <bits/stdc++.h>
using namespace std;

/* Utils */
void printArr(int arr[], int n) {
    for(int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

/* Solution */
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

void sumOfN(int n, int sum) {
    
    if(n == 0) {
        cout << "Sum: " << sum << endl;
        return;
    }

    sumOfN(n-1, sum + n);

}

int sumOfN(int n) {
    if(n == 1) return 1;
    return n + sumOfN(n-1);
}

int factorial(int n) {
    if(n == 1) return 1;
    return n * factorial(n-1);
}

void reverseArr(int arr[], int s, int e) {
    if(s >= e) return;
    swap(arr[s], arr[e]);
    reverseArr(arr, s+1, e-1);
}

void reverseArr(int i, int arr[], int n) {
    if(i >= n/2) return;
    swap(arr[i], arr[n-i-1]);
    reverseArr(i+1, arr, n);
}

bool isPalindrome(string s, int n, int i) {
    if(i >= n) return true;
    if(s[i] != s[n]) return false;
    bool flag = isPalindrome(s, n-1, i+1);
    return flag;
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
    // printDecreasingBacktrack(1, 7);

    // P6. Sum of n numbers, parameterised way
    // sumOfN(4, 0);

    // P7. Sum of n numbers, functional way
    // int sum = sumOfN(3);
    // cout << "Sum: " << sum << endl;

    // P8. Factorial of n numbers
    // int factResult = factorial(3);
    // cout << "Factorial: " << factResult << endl;

    // P9. Reverse an array, with 2 variables
    int arr[] = {1, 2, 4, 5, 3, 6};
    int start = 0, n = sizeof(arr)/sizeof(arr[0]);
    // reverseArr(arr, start, n-1);
    // printArr(arr, n);

    // P10. Reverse an array with a single variable
    reverseArr(0, arr, n);
    // printArr(arr, n);

    // P11. string palindrome ?
    string s = "12e21";
    bool result = isPalindrome(s, s.length() - 1, 0);
    cout << s << endl << result << endl;

    return 0;
}