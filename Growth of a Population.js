function nbYear(p0, percent, aug, p) {
    // your code
  
  //percent is = 5 
  // people = 1500
  //people at the end of year 5000
  // people leaving each year or coming 100
  
  
  
  let year = 0;
  
  while (p0 < p){
    p0 += p0 * percent/100 + aug;
    year++
  }

  return year;  
  
}

nbYear(1500, 5, 100, 5000);
