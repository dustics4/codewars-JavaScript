function getSum(a, b)
{
  
   //Good luck!
  
  //returns the sum
  let count = 0;
  
  //If numbers are equal return the same number
  if(a == b) return a;
  
  //checking for negatives and adding them
  if( a < b) {
    for(; a <=b ; a++) {
      count += a;
    }
    //checking for positive and adding them
  }else if( a > b) {
    for(; b <= a; b++){
      count += b;
    }
  }
  return count
  
}
