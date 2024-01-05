function arrayDiff(a, b) {
  
    let returnArray = [];
    
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < b.length; j++){
            if(a[i] !== b[j]){
                returnArray.push(a[i])
            }
        }
    }

    console.log(returnArray);
}

arrayDiff([1,2], [1]);

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// eg arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// eg arrayDiff([1,2,2,2,3],[2]) == [1,3]
// eg[oranges, apples, pears, pears], [pears] == [oranges, apples] 
