#include<bits/stdc++.h>
using namespace std;

void printVector(vector<int> v) {
    for(auto it: v) {
        cout << it << " ";
    }
    cout << endl;
}

void printArray(int arr[], int n) {
    for(int i = 0; i < n; i++) {
        cout << arr[i] << " " ;
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
    // brute force
    /*
    int rotate = k;

    while(rotate--) {
        int num = nums[nums.size() - 1];
        nums.pop_back();
        nums.insert(nums.begin(), num);
    }
    */

    // optimised
    // TC: O(k)
    int n = nums.size();
    // if k > n
    k = k % n;
    // reverse from start to n-k
    reverse(nums.begin(), nums.begin()+n-k);
    // reverse from n-k to end
    reverse(nums.begin()+n-k, nums.end());
    // reverse from start to end
    reverse(nums.begin(), nums.end());
    
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

void rightRotateByK(int nums[], int n, int k) {
    // 1 2 3 4 5 6 7
    
    // left rotate by 3
    // 4 5 6 7 1 2 3

    // right rotate by 3
    // 5 6 7 1 2 3 4
    // TC: O(k) + O(n-k) + O(k) = O(n+k)
    // SC: O(k)
    k = k % n;

/*
    int temp[k];

    for(int i = 0; i <= k; i++) {
        temp[i] = nums[i];
    }

    for(int i = k+1; i < n; i++) {
        nums[i-k-1] = nums[i];
    }

    for(int i = k; i < n; i++) {
        nums[i] = temp[i-k];
    }

*/

    // TC: O(n + k)
    // SC: O(1)

    // reverse till k
    for(int i = 0; i <= k / 2; i++) {
        swap(nums[i], nums[k - i]);
    }

    // reverse from k+1
    for(int i = 0; i < (n - k) / 2; i++) {
        swap(nums[i + k + 1], nums[n - i - 1]);
    }

    // reverse whole
    for(int i = 0; i <= n / 2; i++) {
        swap(nums[i], nums[n - i - 1]);
    }
}

void moveZerosToRight(int nums[], int n) {
    // Brute force, O(n^2)
    // 1. bubble out zeros
/*
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            if(nums[j] == 0 && j+1 < n) swap(nums[j], nums[j+1]);
        }
    }
*/
    // Better approach, O(2n)
    // 2. with extraspaces, O(n - z)

/*
    int buffer[n];
    int j = 0;
    
    // insert non zero, O(n)
    for(int i = 0; i < n; i++) {
        if(nums[i]) buffer[j++] = nums[i];
    }

    // copy non zeros, O(n - z)
    for(int i = 0; i < j; i++) {
        nums[i] = buffer[i];
    }

    // copy the zeros, O(z)
    for(int i = j; i < n; i++) {
        nums[i] = 0;
    }
*/

    // Optimal Approach
    // 3. 2 pointer approach, O(n), SC: O(1)
    // pointer that points to the position of zero
    int j = -1;
    // O(x)
    for(int i = 0; i < n; i++) {
        if(nums[i] == 0) {
            j = i;
            break;
            // first place of zero
        } 
    }

    // if zero found
    // O(n - x)
    if(j > -1) {
        for(int i = j+1; i < n; i++) {
            // compare
            // if non zero swap with zero other wise skip till you get 
            // non zero
            if(nums[i]) {
                swap(nums[i], nums[j]);
                j++;
            } else continue;
        }
    }

}

int main() {

    // vector<int> v = {0,0,1,1,1,2,2,3,3,4};
    // removeDuplicates(v);
    // printVector(v);
    // cout << v.size() << endl;

    // vector<int> n = {-1,-100,3,99};
    // int k = 2;
    // rotate(n, k);
    // printVector(n);

    // int a[] = {1, 2, 4, 7, 7, 5};
    // int n = sizeof(a) / sizeof(a[0]);
    // int secondLargest = SecondLargest(a, n);
    // cout << secondLargest << endl;

    // int nums[] = {1, 2, 3, 4, 5, 6, 7};
    // int n = sizeof(nums) / sizeof(nums[0]);
    // int k = 3;
    // rightRotateByK(nums, n, k);
    // printArray(nums, n);
    
    // move zeros to right
    // int nums[] = {1, 0, 2, 3, 2, 0, 0, 4, 5, 1};
    // int n = sizeof(nums) / sizeof(nums[0]);

    // moveZerosToRight(nums, n);

    // printArray(nums, n);

    return 0;
}