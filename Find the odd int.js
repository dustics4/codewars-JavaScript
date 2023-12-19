function findOdd(A) {
  //happy coding!
  let counts = {};
    //counts the numbers
       A.forEach(num => {
         counts[num] = (counts[num] || 0) + 1;
       });
    
  // for each number in numbers, if the number is odd, return the number
        for(let prop in counts){
            if(counts[prop] % 2 !== 0){
                 return parseInt(prop);
            }
          }
            
}
