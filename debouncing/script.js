const a = document.getElementById('input');


// a.addEventListener("input",(e)=>{
//     console.log("event",e.target.value);
// })

const debounce=(fn,delay=1000)=>{
     return (e)=>{
            setTimeout(()=>{
                fn(e);
            },delay)
     }
}

const handler= (e)=>{

    console.log("event",e);
}

const debounced=debounce(handler,1000);

a.addEventListener("input",debounced);

