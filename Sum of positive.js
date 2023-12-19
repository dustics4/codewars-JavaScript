function positiveSum(arr) {
  
  let positive =  arr.filter((num) => num > 0);
  let sum = 0;
  console.log(positive);
  
  positive.forEach(num => {
    sum += num;
  })
  
  return sum;
}
