function SeriesSum(n)
{
  let result = 0;

  // loop through number.
  // its 1 divided by 1 + index * 3
  // 1/4 is 3 -- 1/7 is 6 etc
  //goes up in three's
  // 1 is times by three
  // reversing this

  for(let i = 0; i < n; i++){
    result += 1 / (1 + i * 3);
  }

  console.log(result.toFixed(2)); 
  //add 1 divided by 1 + index * 3
  
}

SeriesSum(2);

/* Examples of outputs:
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/