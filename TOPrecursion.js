function fibonacci(num){
 let answer = [];
 let x = 0;
 let y = 1;
 let z;

 answer.push(x);
 answer.push(y);
 
 let i = 2;
 while( i < num){
    z = x + y;
    x = y;
    y = z

    answer.push(z);
    i = i + 1;
 }
 return answer;
}

fibonacci(8);

function fibonacciRec(num){
    function fibonacci(n){
        if(n <= 1)return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    let answer = [];
    for(let i = 0; i < num; i++){
        answer.push(fibonacci(i));
    }
    return answer;
}

fibonacciRec(8);