function divisors(integer) {
  
  //declare empty array
  let empty = [];
  
  //loop through integer, starting from 2
  //if the integer is divided i and == 0 , push this into the empty array
  for(let i = 2; i < integer; i++){
      if(integer % i == 0) empty.push(i)
      console.log(integer);
  }
  //Check if the number is a prime
  // if string.length is not equal to 0 , show empty or number is prime
  let res = empty.length !== 0 ? empty : `${integer} is prime`
  return res;
};
