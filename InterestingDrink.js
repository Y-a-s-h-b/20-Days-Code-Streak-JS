const prompt = require("prompt-sync")();
var n = prompt("Number of Shops:");
x = prompt("Prices").split(' ');
var q = prompt("Days");
m = prompt("Money").split(' ');
const a = [];

for(var i=0; i<q; i++){
    var c = -1;
    while(c != n){
        c += 1;
        if(m[i]>=x[c]){
            a[c] = a[i];
    
        }   
    }
    console.log(a.length)
    
}











console.log(n,x,q,m);

