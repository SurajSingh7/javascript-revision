// node q2.js

var n=5;
var x=n-1;
for(let i=1;i<=n;i++){
    var p=pattern(i,n,x);
    x--;
    console.log(p);
}


function pattern (i,n,x){
     var str="";
    for(let j=1;j<=n;j++){
        if(j<=n-i)   // (j<=x)
         str+=" ";
        else
         str+="*"
    }
    return str;

}


// output

/*
PS D:\@mern\javascript-revision\basicCoding\pattern>  node q2.js
    *
   **
  ***
 ****
*****

*/

