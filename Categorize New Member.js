function openOrSenior(data){
  // ...
  //checking if senior is at least 55 years old 
  //handicap greater than 7
  
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');

  
}
