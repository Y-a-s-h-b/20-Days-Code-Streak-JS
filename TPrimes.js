/*We know that prime numbers are positive integers that have exactly two distinct positive divisors. Similarly, we'll call a positive integer t Т-prime, if t has exactly three distinct positive divisors.

You are given an array of n positive integers. For each of them determine whether it is Т-prime or not.
Input

The first line contains a single positive integer, n (1 ≤ n ≤ 105), showing how many numbers are in the array. The next line contains n space-separated integers xi (1 ≤ xi ≤ 1012).

Please, do not use the %lld specifier to read or write 64-bit integers in С++. It is advised to use the cin, cout streams or the %I64d specifier.
Output

Print n lines: the i-th line should contain "YES" (without the quotes), if number xi is Т-prime, and "NO" (without the quotes), if it isn't.
Examples
Input
3
4 5 6

Output
YES
NO
NO
*/

var numberOfNumbers = readline();
var numbers = readline().split(" ").map(x => parseInt(x));
var checkedNumbers = {};
 
function isPrime(number) {
  var sqrt = Math.round(Math.sqrt(number));
  for (var i  = 2; i <= sqrt; i++) {
    if (number % i === 0) {
      return false;
    }
  }
 
  return true;
}
 
for (var i = 0; i < numbers.length; i++) {
  var sqrt = Math.sqrt(numbers[i]);
  if (checkedNumbers[i]) {
    print(checkedNumbers[i]);
  } else if ((sqrt != Math.round(sqrt)) || (numbers[i] === 1)) {
    print("NO");
    checkedNumbers[i] = "NO";
  } else if (isPrime(sqrt)) {
    print("YES");
    checkedNumbers[i] = "YES";
  } else {
    print("NO");
    checkedNumbers[i] = "NO";
  }
}