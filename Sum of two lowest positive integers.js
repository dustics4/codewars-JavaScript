function sumTwoSmallestNumbers(numbers) {  
  //Code here
  // we need to loop through the array
  // sort the numbers from the lowest to highest
  // pick the first 2 numbers and add them
  
  numbers.sort(function(a,b) {
        if( a > b) return 1;
        if(a < b)  return -1;
        return 0;
    }
    );
    
    for( let i = 0; i < numbers.length; i++){
        let sum = numbers[0] + numbers[1];
        return sum;
    }  
  
}
