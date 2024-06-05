const sumTo = (n) => {
    //using a for loop
    let sum = 0;

    for(let i = 1; i <= n; i++){
        sum += i;
    }
    console.log(sum);
}


function sumTo2(n){
    //using a recursion 
    if(n == 1) return 1;
    return n + sumTo2(n - 1); 
}

function sumTo3(n){
    //using the arithmetic progression formula
    return n * (n + 1) / 2;
}


sumTo(3);
sumTo2(3);
sumTo3(3);

function factorial(n){
    if(n == 1) return 1;
    return n * factorial(n - 1);
}

factorial(5);

function fib(n){
    let a =1 ;
    let b = 1;
    for(let i = 3; i <= n; i++){
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

fib(7)


let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };