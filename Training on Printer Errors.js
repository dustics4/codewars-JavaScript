function printerError(s) {
    // your code
    // letters a - m
    // if not a - m , check how many letters there are.
    //check which letters are not from a-m and how many count.
    //return in a fraction expression
    let countTotal = "0";
    let countError = 0 ;

    countTotal = s.length;
    const s2 = s.split('');

    const letters =  /^[a-mA-M]+$/;

    
    for(let i = 0; i < s2.length; i++){
      if(s2[i].match(letters)){
      }else{
        countError += 1;
      }
    }

    return `${countError}/${countTotal}`;
    
  }
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz");

  //Better solution
  function printerError(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}