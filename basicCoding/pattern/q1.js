// node q1.js

var n=5;
for(let i=1;i<=n;i++){
    var p=pattern(i,n);
    console.log(p);
}


function pattern (i,n){
     var str="";
    for(let j=1;j<=n;j++){
        if(j<=i)
         str+="*";
        else
         str+=" "
    }
    return str;

}


// output

/*
PS D:\@mern\javascript-revision\basicCoding\pattern> node q1.js

*    
**   
***  
**** 
*****

*/