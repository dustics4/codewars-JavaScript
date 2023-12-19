function highAndLow(numbers){
  
  //split the string into the array
  let array = numbers.split(" ");
  
   
  let highest = Math.max(...array);
  let lowest = Math.min(...array);
    
  return `${highest} ${lowest}`;

  
}
