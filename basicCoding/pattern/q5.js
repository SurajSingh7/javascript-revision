// node q5.js

var n=5;
var x=n,y=n;
for(let i=1;i<=n;i++){
    var p=pattern(i,n,x,y);
     x--;y++;
    console.log(p);
}

function pattern (i,n,x,y){
     var str="";
    for(let j=1;j<=2*n-1;j++){
        if(j>=x && j<=y)   
         str+="*";
        else
         str+=" "
    }
    return str;

}


// output

/*
PS D:\@mern\javascript-revision\basicCoding\pattern> node q5.js
    *    
   ***   
  *****  
 ******* 
*********  

*/

