function squareDigits(num){
  
  let res = ""; //empty string for total
  num = num.toString(); //convert number to string
  
  // loop through each number is string
  for(let i = 0; i < num.length; i++){
    // total = total + number [i] stands for each number within the string * the same number - then convert to string
    res = res + (num[i] * num[i]).toString();
  }
  //return resultion
  return Number(res);
  
}
