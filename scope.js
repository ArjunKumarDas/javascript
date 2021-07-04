function test(n){

    function a(){
        return n % 3 === 0
    }

    function b(){
        return n % 5 === 0
    }
     if (a() && b()){
         console.log(n + ' is divisible by 3 and 5 ');
     } else {
         console.log('Not a valid Number');
     }
    

}

test(20)
test(30)