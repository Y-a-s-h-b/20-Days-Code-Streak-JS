/*Vasiliy likes to rest after a hard work, so you may often meet him in some bar nearby. As all programmers do, he loves the famous drink "Beecola", which can be bought in n different shops in the city. It's known that the price of one bottle in the shop i is equal to xi coins.

Vasiliy plans to buy his favorite drink for q consecutive days. He knows, that on the i-th day he will be able to spent mi coins. Now, for each of the days he want to know in how many different shops he can buy a bottle of "Beecola".
Input

The first line of the input contains a single integer n (1 ≤ n ≤ 100 000) — the number of shops in the city that sell Vasiliy's favourite drink.

The second line contains n integers xi (1 ≤ xi ≤ 100 000) — prices of the bottles of the drink in the i-th shop.

The third line contains a single integer q (1 ≤ q ≤ 100 000) — the number of days Vasiliy plans to buy the drink.

Then follow q lines each containing one integer mi (1 ≤ mi ≤ 109) — the number of coins Vasiliy can spent on the i-th day.
Output

Print q integers. The i-th of them should be equal to the number of shops where Vasiliy will be able to buy a bottle of the drink on the i-th day.
Example
Input
5
3 10 8 6 11
4
1
10
3
11

Output
0
4
1
5
*/
var num=parseInt(readline());
var shops=readline().split(" ");
var num1=parseInt(readline());
var days=[];
for(var i=0;i<num1;i++){
    days.push(parseInt(readline()));
}
shops.sort((a , b) => a-b);
var sum=0;
var low;
var up;
var mid;
for(var i=0;i<num1;i++){
    low=0;
    up=num-1;
    while(low<=up){
        mid=low + Math.floor((up-low)/2);
        if(parseInt(shops[mid])<=days[i]){
            low=mid+1;
        }
        else{
            
            up=mid-1;
        }
    }
    sum=low;
    print(sum);
}