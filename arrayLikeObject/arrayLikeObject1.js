//  node arrayLikeObject1

var a=[6,7,9];
console.log(a);
a["hi"]=40;
console.log(a);
console.log(a[3]);

console.log("suraj.............");

for(let i=0;i<a.length;i++){
    console.log(a[i]);
}

console.log(a.length);
console.log(a["hi"]);


// OUTPUT
// PS D:\@mern\javascript-revision> node arrayLikeObject
// [ 6, 7, 9 ]
// [ 6, 7, 9, hi: 40 ]
// undefined
// suraj.............
// 6
// 7
// 9
// 3
// 40