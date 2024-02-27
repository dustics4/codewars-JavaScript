function removeSmallest(numbers){
    let min = numbers[0];

    for(let i = 0 ; i < numbers.length; i++){
        if(min > numbers[i]){
            min = numbers[i];
        }
    }

    console.log(min)
}

removeSmallest([1,2,3,4,5])

/* 
Given an array of integers, remove the smallest value. Do not mutate the original array/list.
If there are multiple elements with the same value, remove the one with the lowest index.
If you get an empty array/list, return an empty array/list.
*/