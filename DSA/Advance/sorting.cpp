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

int main() {
    
    int a[] = {13, 46, 24, 52, 20, 9};
    int n = sizeof(a) / sizeof(a[0]);
    
    // selectionSort();
    
    // bubbleSort(a, n);

    insertionSort(a, n);

    printArr(a, n);
    return 0;
}
