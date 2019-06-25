for(var i=1; i < 100; i ++){
    // % significa mod
    if (i % 3 == 0){
        console.log("FIZ",i);
    }else if (i % 5 == 0){
        console.log("Buzz",i);
    }
    if ((i % 3 == 0)&&(i % 5 == 0)){
        console.log("FizzBuzz",i);
    }
}
