String.prototype.toJadenCase = function () {
  //...
  let words = this.split(' ');
  
  for(let i = 0 , wordsLen = words.length; i < wordsLen; i++){
    //first part is to make the letter uppercase
    // when we use slice, we make sure that the whole word appears
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  let words2 = words.join(' ');
  return words2
  
};
