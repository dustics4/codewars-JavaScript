function digitize(n) {
  //code here
  
  let string = String(n);
  return string.split('').map(Number).reverse();
}
