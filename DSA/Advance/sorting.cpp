#include<iostream>
using namespace std;

void printArr(int arr[], int n) {
    for(int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    } 
    cout << endl;
}

// Time Complexity: (n x (n + 1)) / 2
// Best Case = Average Case = Worst Case = O(n^2)
void selectionSort() {
    // CONCEPT
    // Select the minimum and swap
    // ex:
    // 13, 46, 24, 52, 20, 9
    // 9, 46, 24, 52, 20, 13 -> smallest: 9 in (0 - n-1), swap index '0' with '9'
    // 9, 13, 24, 52, 20, 46 -> smallest: 13 in (1 - n-1), swap index '1' with '13'
    // 9, 13, 20, 52, 24, 46 -> smallest: 20 in (2 - n-1), swap index '2' with '20'
    // 9, 13, 20, 24, 52, 46 -> smallest: 24 in (3 - n-1), swap index '3' with '24'
    // 9, 13, 20, 24, 46, 52 -> smallest: 46 in (4 - n-1), swap index '4' with '46'

    int arr[] = {13, 46, 24, 52, 20, 9};
    int n = sizeof(arr) / sizeof(arr[0]);

    for(int i = 0; i < n; i++) {
        int min = i;
        for(int j = i; j < n; j++) {
            if(arr[j] < arr[min]) min = j;
        }
        swap(arr[i], arr[min]);
    }

    printArr(arr, n);
}

// Time Complexity: (n x (n + 1)) / 2
// Average Case = Worst Case = O(n^2)
// Best Case = O(n), imagine [2, 3, 4, 5]
void bubbleSort(int a[], int n) {
    // Concept
    // Biggest at the last, swap adjecent if not sorted

    // Ex
    // 13, 46, 24, 52, 20, 9
    /*
        1st iteration
        swap(2, 3)
        13, 24, 46, 52, 20, 9
        swap(4, 5)
        13, 24, 46, 20, 52, 9
        swap(5, 6)
        13, 24, 46, 20, 9, 52
        so here "52" was the largest which bubbled out at last

    */

    // So we will repeat above iteration several times
    // 2nd iteration
    // 13, 24, 20, 9, 46, 52
    // 3rd iteration
    // 13, 20, 9, 24, 46, 52
    // 4th iteration
    // 13, 9, 20, 24, 46, 52
    // 5th iteration
    // 9, 13, 20, 24, 46, 52

    for(int i = 0; i < n-1; i++) {
        bool didSwap = false;
        for(int j = 0; j <= (n - i - 1); j++) {
            if((j+1 < n) && a[j] > a[j+1]) {
                didSwap = true;
                swap(a[j], a[j+1]);
            }
        }
        if(!didSwap) break;
    }

    printArr(a, n);
}

// Time Complexity
// worst case: [5, 4, 3, 2, 1], (n * (n+1)) / 2, O(n^2)
// best case: [1, 2, 3, 4, 5], O(n)
void insertionSort(int a[], int n) {
    // Concept
    // Insert the value at its right index, by comparing and swapping

    // Ex
    // 13, 46, 24, 52, 20, 9
    
    // should "46" be at idx "1" in array of size 2, YES

    // should "24" be at idx "2" in array of size 3, NO
    // swap until its swappable
    // swap(24, 46): 13, 24, 46

    // should "52" be at idx "3" in array of size 4, YES

    // should "20" be at idx "4" in array of size 5, NO
    // swap until its swappable
    // swap(20, 52): 13, 24, 46, 20, 52
    // swap(20, 46): 13, 24, 20, 46, 52
    // swap(20, 24): 13, 20, 24, 46, 52
    
    // should "9" be at idx "5" in array of size 6, NO
    // swap until its swappable
    // swap(9, 52): 13, 24, 46, 20, 9, 52
    // swap(9, 20): 13, 24, 46, 9, 20, 52
    // swap(9, 46): 13, 24, 9, 46, 20, 52
    // swap(9, 24): 13, 9, 24, 46, 20, 52
    // swap(9, 13): 9, 13, 24, 46, 20, 52

    // Logic
    // since 1st element is always at correct position,
    // in size of array "1"
    for(int i = 1; i < n; i++) {
        int j = i;
        while(j > 0 && a[j] < a[j-1]) {
            swap(a[j], a[j-1]);
            j--;
        }
    }

}

void merge(int a[], int low, int mid, int high) {
    // arr1 -> 0 to mid
    // arr2 -> mid+1 to high
    int mergedArr[low+high+1];
    int i = low, j = mid+1, idx = low;
    while(i <= mid && j <= high) {
        if(a[i] < a[j]) {
            mergedArr[idx] = a[i];
            i++;
        } else {
            mergedArr[idx] = a[j];
            j++;
        }
        idx++;
    }

    // if left is exhausted
    while(j <= high) {
        mergedArr[idx] = a[j];
        idx++, j++;
    }

    // if right is exhausted
    while (i <= mid)
    {
        mergedArr[idx] = a[i];
        idx++, i++;
    }

    // copy mergedArr into our a
    for(int i = low; i <= high; i++) {
        a[i] = mergedArr[i];
    }
    
}


// Time Complexity
// For dividing: n -> n/2 -> n/4 -> n/8, so O(log2(n))
// For merging: O(l) + O(h) = O(n)
// So TC: O(nlog2(n))
// SC: O(n)
void mergeSort(int a[], int low, int high) {
    // Concept: Divide & Merge

    // Ex:
    //          [0 ,  1,  2,  3,  4, 5]
    //          [13, 46, 24, 52, 20, 9], l = 0, h = 5, m = 2
    //                     / \ 
    //        [13, 46, 24]     [52, 20, 9]
    //              / \              / \ 
    //      [13, 46]   [24]  [52, 20]   [9]
    //        / \               / \ 
    //    [13]   [46]       [52]   [20]
    
    // MergeSort Logic:
    // left(l, m) --- right(m+1, h)

    // Here l = 0, h = 5, m = 2, array is divided into "2" parts from Sort(0, 2) & Sort(3, 5)
    // left: l = 0, h = 2, m = 1, Sort(0, 1) & Sort(2, 2)
    // left: l = 0, h = 1, m = 0, Sort(0, 0) & Sort(1, 1)
    // Sort(0, 0) -> return, l == h
    // Sort(1, 1) -> return, l == h
    // Sort(0, 1) -> Merge(Sort(0, 0), Sort(1, 1))
    // Sort(2, 2) -> return, l == h
    // Sort(0, 2) -> Merge(Sort(0, 1), Sort(0, 2))

    // Left is sorted go to right
    // right: l = 3, h = 5, m = 4, Sort(3, 4) & Sort(5, 5)
    // right: l = 3, h = 4, m = 3, Sort(3, 3) & Sort(4, 4)
    // Sort(3, 3) -> return, l == h
    // Sort(4, 4) -> return, l == h
    // Sort(3, 4) -> Merge(Sort(3, 3), Sort(4, 4))
    // Sort(5, 5) -> return, l == h
    // Sort(3, 5) -> Merge(Sort(3, 4), Sort(5, 5))

    // Now as Left & Right are sorted and merge so final merge
    // Sort(0, 5) -> Merge(Sort(0, 2), Sort(3, 5))
    
    // since single elements are already sorted, so return back and merge them
    //                      [13]    [46]     [52]    [20]
    //                          \  /             \  /
    //                   [13, 46]  [24]   [20, 52]  [9]
    //                           \/              \  /
    //                      [13, 24, 46]     [9, 20, 52]
    //                                    \/ 
    //                         [9, 13, 20, 24, 46, 52]

    // Merge logic: as we know for both sorted array smallest lies at low
    // so for left low is "13" & for right low is "9"
    // now compare "13" & "9", since "9" is small so insert "9" and move pointer to right of "9"
    // now compare "13" & "20", since "13" is small so insert "13" and move pointer to right of "13"
    // now compare "24" & "20", since "20" is small so insert "20" and move pointer to right of "20"
    // now compare "24" & "52", since "24" is small so insert "24" and move pointer to right of "24"
    // now compare "46" & "52", since "46" is small so insert "46" and move pointer to right of "46"
    // now since first array is completed so insert all elements of right
    // [9, 13, 20, 24, 46, 52]

    // BASE CONDITION
    if(low >= high) return;

    int mid = (low + high) / 2;
    mergeSort(a, low, mid);
    mergeSort(a, mid+1, high);
    merge(a, low, mid, high);
}

int main() {
    
    // int a[] = {13, 46, 24, 52, 20, 9};
    // int a[] = {3, 2, 4, 1, 3};
    int a[] = {42, 7, 19, 85, 23, 4, 77, 13, 60, 31, 7, 42, 13};
    int n = sizeof(a) / sizeof(a[0]);
    
    // selectionSort();
    
    // bubbleSort(a, n);

    // insertionSort(a, n);

    int low = 0, high = n-1;
    mergeSort(a, low, high);

    printArr(a, n);
    
    return 0;
}
