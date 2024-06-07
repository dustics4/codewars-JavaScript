function sumNums(n){
    if(n === 1)return 1;
    return n + sumNums(n - 1);
}

sumNums(3)

function power(base,exponent){
    if(exponent === 0)return 1;
    return base * power(base , exponent - 1);
}

power(2,4);

function factorial(n){
    if(n === 0)return 1;
    return n * factorial(n - 1);
}

factorial(5);

var allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven); // false

function all(array, callback){
    var copy = copy || array.slice(); //copies the array

    if(copy.length === 0) return true; //if the array is empty return true

    if(callback(copy[0])){ 
        copy.shift(); // remove first element of array
        return all(copy, callback);
    }else{
        return false;
    }
}