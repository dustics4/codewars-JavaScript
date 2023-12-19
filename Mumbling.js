function accum(s) {
	// your code
  const result = [];
  const strLower = s.toLowerCase();
  
  for(let i = 0; i < strLower.length; i++){
    let string = strLower[i].toUpperCase();
    for(let j = 0; j < i ; j++){
      string += strLower[i];
    }
    result.push(string);
  }
  return result.join("-");
}
