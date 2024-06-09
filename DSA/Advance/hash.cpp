#include <bits/stdc++.h>
using namespace std;

// prepare hash, lets for this problem max num be, max size can be 10^7
int hashh[10000000];

void prepareHash(int arr[], int n) {
    // loop
    for(int i = 0; i < n; i++) {
        hashh[arr[i]]++;
    }
}

int main() {

    // Problem Statement: 
    /*
    5
    1 3 2 1 3
    5
    1
    4
    3
    2
    12

    Here size of array and array will be given, next you will
    be given number of queries and for each query you have to
    tell how many times that query appears in that array

    */
    // int n;
    // cin >> n;
    // int arr[n];
    // for(int i = 0; i < n; i++) {
    //     cin >> arr[i];
    // }
    // prepareHash(arr, n);
    // int q;
    // cin >> q;
    // while(q--) {
    //     int num;
    //     cin >> num;
    //     cout << hashh[num] << endl;
    // }

    // Character Hashing
    /*
    
    "abacfec"
    a - 2
    b - 1
    c - 2
    e - 1
    f - 1

    */

    // global hash 
    // int charHash[27] = {0};
    // or
    int charHash[256] = {0};

    string testCase = "abacfec";
    for(char i : testCase) {
        // charHash[i - 'a']++;
        // or
        charHash[i]++;
    }

    for(char i : testCase) {
        // cout << i << " - " << charHash[i - 'a'] << endl;
        // or
        cout << i << " - " << charHash[i] << endl;
    }
   
    
    return 0;
}