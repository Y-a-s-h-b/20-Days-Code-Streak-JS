/*Vanya walks late at night along a straight street of length l, lit by n lanterns. Consider the coordinate system with the beginning of the street corresponding to the point 0, and its end corresponding to the point l. Then the i-th lantern is at the point ai. The lantern lights all points of the street that are at the distance of at most d from it, where d is some positive number, common for all lanterns.

Vanya wonders: what is the minimum light radius d should the lanterns have to light the whole street?
Input

The first line contains two integers n, l (1 ≤ n ≤ 1000, 1 ≤ l ≤ 109) — the number of lanterns and the length of the street respectively.

The next line contains n integers ai (0 ≤ ai ≤ l). Multiple lanterns can be located at the same point. The lanterns may be located at the ends of the street.
Output

Print the minimum light radius d, needed to light the whole street. The answer will be considered correct if its absolute or relative error doesn't exceed 10 - 9.
Examples
Input
7 15
15 5 3 7 9 14 0

Output
2.5000000000

Input
2 5
2 5

Output
2.0000000000
*/var inputs = readline().split(' '), counter = 0 , output = 0,
n = parseInt(inputs[0]), l = parseInt(inputs[1]),
a = readline().split(' ').sort((a,b) => {return a - b});
a.unshift('0');
a.push(l);
for(var i = 0 ; i < a.length ; ++i){
    if(a[i + 1] - a[i] > counter){
        counter = a[i + 1] - a[i];
    }
}
a.shift();
a.pop();
output = counter/2 ;
if(parseInt(a[0]) !== 0){
    if((output - a[0]) < 0){
        output = parseInt(a[0]);
    }
}
if(parseInt(a[a.length - 1]) !== parseInt(l)){
    if((parseInt(output) + parseInt(a[a.length - 1])) < l){
        output= parseInt(l) - a[a.length - 1];
    }  
}
print(output);