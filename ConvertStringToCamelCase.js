function toCamelCase(str){

    //split the string first
    str = str.split('');
    //use the map function to iterate over the characters
    console.log(str.map(function(el, i){
    //Check if character is the same as - or _
      if(el == '-' || el == '_'){
        //If it is, the character in from of the elemnt is changed to uppercase
        el = str[i+1].toUpperCase();
        //once that is done, we remove the character
        str.splice(i+1, 1);
      }
      //return the element
      return el;
    //lastly join the string.
    }).join(''));
}

toCamelCase("the-stealth-warrior")