function removeSmallest(numbers){
    if(numbers.length === 0){
        return [];
    }

    let min = Math.min(...numbers);
    let index = numbers.indexOf(min);
    //creates a new array that excludes the smallest number by taking the elements before it and the elements after it, and putting them together in a new array.
    return numbers.slice(0, index).concat(numbers.slice(index + 1));
}

removeSmallest([1,2,3,4,5])

/* 
Given an array of integers, remove the smallest value. Do not mutate the original array/list.
If there are multiple elements with the same value, remove the one with the lowest index.
If you get an empty array/list, return an empty array/list.
*/