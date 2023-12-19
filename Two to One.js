function longest(s1, s2) {
  // your code
  
  // we need to sort each string from a-z
  // the output is each letter from each string sorted from a-z
  
  return [...new Set(s1 + s2)].sort().join('');
  
}
