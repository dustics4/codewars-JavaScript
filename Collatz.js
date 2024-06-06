function collatz(n){
    //base cases

    let counter = 0;

    if(n === 1){
        return counter;
    }else if( (n % 2) === 0){
       n = n / 2;
       counter++
    }else {
        n = n * 3 + 1;
        counter++
    }
    return counter;
}

collatz(1);