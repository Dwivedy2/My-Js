#include<bits/stdc++.h>
using namespace std;

// UTIL
void printVector(vector<int> v) {
    for(auto it: v) {
        cout << it << " ";
    }
    cout << endl;
}

// MAIN
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
    // TODO: reverse the digits in a number
    // Here, reverse the digit, if the reversing of digit crosses 
    // the lower and upper limit of integer data type then return 0
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

bool isPalindrome(int x) {
    // TODO: Check if x is palindrome
    // x: 121, true
    // x: -121, false as -121 and 121- are not palindrome
    // x: 10, false as 10 and 01 are not palindrome
    // x > INT_MAX or x < INT_MIN return false
    if(x < 0) return false;
    int n = x;
    int rev = 0;
    while(n) {
        int lastDigit = n % 10;
        if(rev >= INT_MAX/10 || rev <= INT_MIN/10) return false;
        rev = rev * 10 + lastDigit;
        n = n / 10;
    }
    return rev == x;
}

bool isArmstrong(int x) {
    // TODO: Check whether a number x is armstrong or not
    // 374: cube(3) + cube(7) + cube(4) = 374 so yes
    // 1634: fourth(1) + fourth(6) + fourth(3) + fourth(4) = 1634 so yes
    // 35: square(3) + square(5) = 152 != 35 so no

    int n = x;
    int sum = 0;
    int p = log10(x) + 1;
    while(n) {
        int d = n % 10;
        sum += pow(d, p);
        n = n / 10;
    }
    return x == sum;
}

vector<int> getDivisors(int x) {
    // TODO: print all the divisors of x
    // 36: 1, 2, 3, 4, 6, 9, 12, 18, 36

    // TC: O(N)
    vector<int> result;
    // for(int d = 1; d <= x; d++) {
    //     if(x % d == 0) result.push_back(d);
    // }

    // Optimised
    // Approach
    // 1 * 36
    // 2 * 18
    // 3 * 12
    // 4 * 9
    // 6 * 6 -> this is nothing but sqrt(36) = 6 * 6
    // 9 * 4 -> from here it is reverse replica of above, so we can ignore looping
    // 12 * 3
    // 18 * 2
    // 36 * 1
    
    // Here not used sqrt(x) as on each d it is called
    // TC: O(sqrt(x))
    for(int d = 1; d*d <= x; d++) {
        if(x % d == 0) {
            result.push_back(d);
            if(d != (x / d))
                result.push_back(x / d);
        }
    }

    // Internal Sorting: O(n log(n)), n is the number of factors
    sort(result.begin(), result.end());

    // Print: O(n), n is the number of factors
    return result;

    // TC: O(x) + O(n log(n)) + O(n), where x = N, n = no. of factors of N
}

int main() {
    // countDigits();

    // int n = 123;
    // int output = reverseDigit(n);
    // cout << output << endl;

    // int n = 10;
    // cout << isPalindrome(n) << endl;

    // 371, 1634, 35
    // int n = 371;
    // cout << isArmstrong(n) << endl;

    // int n = 36;
    // printVector(getDivisors(n));

    return 0;
}