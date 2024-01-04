function alphanumeric(string){
    //your code here
    return /^[a-zA-Z0-9]+$/.test(string);
      //^ - It represents the start of the string.
  
  //[a-z0-9]+ - It represents only characters between the a to z or 0 to 9.
  //$ - It represents the end of the string.
  }

  alphanumeric("ska2k");