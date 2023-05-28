const fibonacci = function(num) {
    if(num<0){
        return "OOPS";
    }
    let fib= [];
    fib[0]=1;
    fib[1]=1;
    if(num>2){
    for(let i = 2;i<num;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }}
    return fib[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
