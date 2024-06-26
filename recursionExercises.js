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

var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
console.log(seven);

function totalIntegers(array){
	if(array.length === 0) return 0;

	let total = 0;
	let first = array.shift();

	if (Array.isArray(first)){
		total += totalIntegers(first); 
	} else if (Number.isInteger(first)) {
		total += 1;
	}

	return total + totalIntegers(array);
}



function sumSquares(array){
    if(array.length === 0 )return 0;
    let total = 0;

    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            total += sumSquares(array[i]);
        }else {
            total += array[i] * array[i];
        }
    }
    return total;
}


sumSquares([[1,2],3]);

function replicate(times , number){
    if(times <= 0) return [];

    return [number].concat(replicate(times - 1, number));

}
replicate(3,5);