#include<iostream>
using namespace std;

void printArr(int arr[], int n) {
    for(int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    } 
    cout << endl;
}

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

int main() {
    selectionSort();
    return 0;
}
