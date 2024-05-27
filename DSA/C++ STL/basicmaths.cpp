#include<bits/stdc++.h>
using namespace std;

void countDigits() {
    int n = 1234;
    int cnt = 0;

    // TIME COMPLEXITY: O(log10(n))
    // notice that cnt will be how many times 10 can divide n
    // while(n) {
    //     int lastDigit = n % 10;
    //     cnt++;
    //     n = n / 10;
    // }
    // cout << cnt << endl;

    // TIP: if it was 
    // n = n / 5, then it would have been O(log5(n))
    // n = n / 2, then it would have been O(log2(n))

    cnt = (int) log10(n); // how many times 10 can divide n
    // here, remainder is left
    cout << cnt << endl; // 3
    // so, in order to fulfill it
    cnt = (int) log10(n) + 1;
    cout << cnt << endl; // 4

}

int reverseDigit(int x) {
    int revN = 0;
    int num = x;
    while(num) {
        int digit = num % 10;
        if(revN > INT_MAX / 10 || revN < INT_MIN / 10) return 0;
        revN = revN * 10 + digit;
        num /= 10;
    }
    return revN;
}

int main() {
    // countDigits();

    // Here, reverse the digit, if the reversing of digit crosses 
    // the lower and upper limit of integer data type then return 0
    int n = 123;
    int output = reverseDigit(n);
    cout << output << endl;
    return 0;
}