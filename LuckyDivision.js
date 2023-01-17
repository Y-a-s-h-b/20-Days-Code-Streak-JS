/*Petya loves lucky numbers. Everybody knows that lucky numbers are positive integers whose decimal representation contains only the lucky digits 4 and 7. For example, numbers 47, 744, 4 are lucky and 5, 17, 467 are not.
Petya calls a number almost lucky if it could be evenly divided by some lucky number. Help him find out if the given number n is almost lucky.

Input
The single line contains an integer n (1 ≤ n ≤ 1000) — the number that needs to be checked.

Output
In the only line print "YES" (without the quotes), if number n is almost lucky. Otherwise, print "NO" (without the quotes).
Examples
Input
47

Output
YES

Input
16

Output
YES

Input
78

Output
NO
*/
var x = readline();
// x = parseInt(x);
var arr = [4,7,47,74,44,444,447,474,477,777,774,744];
var f = false;
for(var i = 0; i < arr.length; i++) {
  if(x % arr[i] === 0) {
      f = true;
  }
}
if(f === true) {
  print("YES\n");
} else {
  print("NO\n");
}