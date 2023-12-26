const x=()=>{
    const cache={};

    return(
        function y(num){

            if(num in cache){
                return cache[num]=num+50;
            }
            return cache[num]=num+50;
        }
    )
}

const z=x();
console.log(z(100));
console.log(z(150));
console.log(z(100));