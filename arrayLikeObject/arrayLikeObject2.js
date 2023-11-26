//  node arrayLikeObject2

var a=[6,7,9,{x:"suraj"}];
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
// PS D:\@mern\javascript-revision> node arrayLikeObject2
// [ 6, 7, 9, { x: 'suraj' } ]
// [ 6, 7, 9, { x: 'suraj' }, hi: 40 ]
// { x: 'suraj' }
// suraj.............
// 6
// 7
// 9
// { x: 'suraj' }
// 4
// 40