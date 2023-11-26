// node asynCheck2

console.log("start");

async function suraj(){
    console.log("middle1");
    return "middle2"
}

var x=suraj();
x.then((data)=> console.log(data));
console.log(x);
console.log("end");


// PS D:\@mern\javascript-revision> node asynCheck2
// start
// middle1
// Promise { 'middle2' }
// end
// middle2
