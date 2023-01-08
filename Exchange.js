/*
Monocarp is playing a MMORPG. There are two commonly used types of currency in this MMORPG — gold coins and silver coins. Monocarp wants to buy a new weapon for his character, and that weapon costs n

silver coins. Unfortunately, right now, Monocarp has no coins at all.

Monocarp can earn gold coins by completing quests in the game. Each quest yields exactly one gold coin. Monocarp can also exchange coins via the in-game trading system. Monocarp has spent days analyzing the in-game economy; he came to the following conclusion: it is possible to sell one gold coin for a
silver coins (i. e. Monocarp can lose one gold coin to gain a silver coins), or buy one gold coin for b silver coins (i. e. Monocarp can lose b

silver coins to gain one gold coin).

Now Monocarp wants to calculate the minimum number of quests that he has to complete in order to have at least n

silver coins after some abuse of the in-game economy. Note that Monocarp can perform exchanges of both types (selling and buying gold coins for silver coins) any number of times.
Input

The first line contains one integer t
(1≤t≤104) — the number of test cases.

Each test case consists of one line containing three integers n ,a and b (1≤n≤107; 1≤a,b≤50).
Output
For each test case, print one integer — the minimum possible number of quests Monocarp has to complete.

Example
Input
4
100 25 30
9999997 25 50
52 50 48
49 50 1

Output
4
400000
1
1
*/


x = readline();
while(x--)
{
    n= readline();
    a= readline();
    b= readline();
    w = Math.ceil(n/a);
    if(a>b)
    {
        w=1;
    }
    print(w);
}