function isIsogram(str){
  //...
  let toLower = str.toLowerCase();
  
  for(let i = 0 ; i < toLower.length; ++i) {
    for(let j = i +1; j < toLower.length; ++j){
      if (toLower[i] === toLower[j]){
        return false;
      }
    }
  }
    return true;

}
