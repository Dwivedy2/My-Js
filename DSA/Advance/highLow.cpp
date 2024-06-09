#include<bits/stdc++.h>
using namespace std;

int main() {
    // Problem statement
    // [1, 2, 3, 1, 3, 3]
    // high: 3, low: 2

    int arr[] = {1, 2, 3, 1, 3, 3};
    int n = sizeof(arr) / sizeof(arr[0]);

    unordered_map<int, int> mp;

    // n
    for(int i = 0; i < n; i++) {
        mp[arr[i]]++;
    }

    int value = INT_MIN;
    int key = -1;
    // n
    for(auto it: mp) {
        if(it.second > value) {
            value = it.second;
            key = it.first;
        }
    }

    // TIME COMPLEXITY: O(n)
    cout << key << endl;

    return 0;
}