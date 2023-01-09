/*You are given a string s, consisting only of Latin letters 'a', and a string t, consisting of lowercase Latin letters.

In one move, you can replace any letter 'a' in the string s
with a string t. Note that after the replacement string s

might contain letters other than 'a'.

You can perform an arbitrary number of moves (including zero). How many different strings can you obtain? Print the number, or report that it is infinitely large.

Two strings are considered different if they have different length, or they differ at some index.
Input

The first line contains a single integer q
(1≤q≤104) — the number of testcases.

The first line of each testcase contains a non-empty string s , consisting only of Latin letters 'a'. The length of s doesn't exceed 50

The second line contains a non-empty string t, consisting of lowercase Latin letters. The length of t doesn't exceed 50.
Output
For each testcase, print the number of different strings s that can be obtained after an arbitrary amount of moves (including zero). If the number is infinitely large, print -1. Otherwise, print the number.
Example
Input
3
aaaa
a
aa
abc
a
b
Output
1
-1
2
*/


var x = parseInt(readline());
for(var i = 0; i < x; i++){
    var s = readline();
    var t = readline();
    if(t=="a"){
        print(1);
        continue;
    }
    if (t.indexOf('a') != -1){
        print(-1);
        continue;
    }
    print(Math.pow(2,s.length));
}
