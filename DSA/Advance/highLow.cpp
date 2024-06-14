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

    int highValue = INT_MIN, lowVal = INT_MAX;
    int high = -1, low = -1;
    // n
    for(auto it: mp) {
        if(it.second > highValue) {
            highValue = it.second;
            high = it.first;
        } else if(it.second < lowVal) {
            low = it.first;
            lowVal = it.second;
        }
    }

    // TIME COMPLEXITY: O(n)
    cout << "high: " << high << ", low: " << low << endl;

    return 0;
}