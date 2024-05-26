#include<bits/stdc++.h>
using namespace std;

void countDigits() {
    int n = 1234;
    int cnt = 0;

    // notice that cnt will be how many times 10 can divide n
    // while(n) {
    //     int lastDigit = n % 10;
    //     cnt++;
    //     n = n / 10;
    // }
    // cout << cnt << endl;

    cnt = log10(n); // how many times 10 can divide n
    // here, remainder is left
    cout << cnt << endl; // 3
    // so, in order to fulfill it
    cnt = log10(n) + 1;
    cout << cnt << endl; // 4

}

int main() {
    countDigits();
    return 0;
}