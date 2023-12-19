function closeCompare(a, b, margin=0){
  // ...
  //When a is lower than b, return -1.

  //When a is higher than b, return 1.

  //When a is close to b, return 0.

  //If margin is not given, treat it as zero.

  //Example: if a = 3, b = 5 and the margin = 3, since a and b are no more than 3 apart, close_compare should return 0. Otherwise, if instead margin = 0, a is lower than b and close_compare should return -1.

  //Assume: margin >= 0

  if(Math.abs(a-b) <= margin) return 0
  if (a < b) return -1
  return 1
  
  
  
}
