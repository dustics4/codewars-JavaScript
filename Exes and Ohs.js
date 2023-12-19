function XO(str) {
    //code here
  let xLetter = '';
  let oLetter = '';
  
  for(let i = 0; i < str.length; i++){
    if(str[i].toLowerCase() === 'x') {
      xLetter += str[i];
    }else if(str[i].toLowerCase() === 'o'){
      oLetter += str[i];
    }
  }
  
  return xLetter.length === oLetter.length;
  
  //need to loop through each character
  // iterate first then ++i
  // if a string has x amount of x's and x amount of o's
  // must return true if it does
  // else return false
}

//example : XO("ooxx") => true
