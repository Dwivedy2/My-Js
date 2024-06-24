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

int main() {

    vector<int> v = {0,0,1,1,1,2,2,3,3,4};
    removeDuplicates(v);
    printVector(v);
    cout << v.size() << endl;
    return 0;
}