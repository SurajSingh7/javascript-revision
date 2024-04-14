const a = document.getElementsByClassName("a")[0];
const b = document.getElementsByClassName("b")[0];
const c = document.getElementsByClassName("c")[0];

console.log("hello")
console.log(a)
console.log(b)
console.log(c)
console.log("hello")

a.addEventListener("click",(e)=>{
    console.log(e.target);
})


b.addEventListener("click",(e)=>{
    // e.stopImmediatePropagation();
     b.style.width = "375px"; 
})
b.addEventListener("click",(e)=>{
    console.log(e.target);
    e.stopImmediatePropagation();
    b.style.backgroundColor = "blue"; 
})
c.addEventListener("click",(e)=>{
    console.log(e.target);
})