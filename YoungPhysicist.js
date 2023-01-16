/*A guy named Vasya attends the final grade of a high school. One day Vasya decided to watch a match of his favorite hockey team. And, as the boy loves hockey very much, even more than physics, he forgot to do the homework. Specifically, he forgot to complete his physics tasks. Next day the teacher got very angry at Vasya and decided to teach him a lesson. He gave the lazy student a seemingly easy task: You are given an idle body in space and the forces that affect it. The body can be considered as a material point with coordinates (0; 0; 0). Vasya had only to answer whether it is in equilibrium. "Piece of cake" — thought Vasya, we need only to check if the sum of all vectors is equal to 0. So, Vasya began to solve the problem. But later it turned out that there can be lots and lots of these forces, and Vasya can not cope without your help. Help him. Write a program that determines whether a body is idle or is moving by the given vectors of forces.

Input
The first line contains a positive integer n (1 ≤ n ≤ 100), then follow n lines containing three integers each: the xi coordinate, the yi coordinate and the zi coordinate of the force vector, applied to the body ( - 100 ≤ xi, yi, zi ≤ 100).

Output
Print the word "YES" if the body is in equilibrium, or the word "NO" if it is not.
Examples
Input
3
4 1 7
-2 4 -1
1 -5 -3

Output
NO

Input
3
3 -1 7
-5 2 -4
2 -1 -3

Output
YES
*/

var n = readline()
var arr = [0,0,0];
while(n--){
    m=readline().split(' ')
    arr[0]+=parseInt(m[0])
    arr[1]+=parseInt(m[1])
    arr[2]+=parseInt(m[2])
}
if(arr[0] == 0 && arr[1] == 0 && arr[2] == 0)
{
    print("YES")
}
else{
    print("NO")
}