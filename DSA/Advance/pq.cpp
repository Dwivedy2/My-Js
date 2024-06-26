#include<bits/stdc++.h>
using namespace std;

void printVector(vector<int> v) {
    for(auto it: v) {
        cout << it << " ";
    }
    cout << endl;
}

void removeDuplicates(vector<int>& nums) {

    // brute force
    /*
        for(int i = 0; i < nums.size() - 1; i++) {
            if(nums[i] == nums[i+1]) {
                int j = i;
                while(j+1 < nums.size() && nums[j] == nums[j+1]) { j++; }
                nums.erase(nums.begin()+i+1, nums.begin()+j+1);
            }
        }
    */

    // optimised
    int j = 1;
    for(int i = 1; i < nums.size(); i++) {
        if(nums[i] != nums[i-1]) {
            nums[j] = nums[i];
            j++;
        }
    }
    nums.erase(nums.begin()+j, nums.end());
}

void rotate(vector<int>& nums, int k) {
    int start = nums.size() - k;
    auto startIt = nums.begin() + start;
    auto endIt = nums.end();
    vector<int> cNums;
    copy(startIt, endIt, cNums.begin());
    nums.erase(startIt, endIt);
    nums.insert(nums.begin(), cNums.begin(), cNums.end());
}

int SecondLargest(int a[], int n) {
    // TC: O(2n)
    // sC: O(1)
    /*
        int largest = a[0];
	    for(int i = 1; i < n; i++) {
	        if(a[i] > largest) largest = a[i];
	    }
	    
	    int sLargest = -1;
	    for(int i = 0; i < n; i++) {
	        if(a[i] != largest && a[i] > sLargest) sLargest = a[i];
	    }
    */
    // TC: O(n)
    // sC: O(1)
    int largest = a[0];
    int sLargest = -1;
    for(int i = 1; i < n; i++) {
        if(a[i] > largest) {
            sLargest = largest;
            largest = a[i];
        } else if(a[i] != largest && a[i] > sLargest) {
            sLargest = a[i];
        }
    }
    return sLargest;
}

int main() {

    // vector<int> v = {0,0,1,1,1,2,2,3,3,4};
    // removeDuplicates(v);
    // printVector(v);
    // cout << v.size() << endl;

    // vector<int> n = {1,2,3,4,5,6,7};
    // int k = 3;
    // rotate(n, k);
    // printVector(n);

    int a[] = {1, 2, 4, 7, 7, 5};
    int n = sizeof(a) / sizeof(a[0]);
    int secondLargest = SecondLargest(a, n);
    cout << secondLargest << endl;
    
    return 0;
}