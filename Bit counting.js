var countBits = function(n) {

//We used the Brian kernighan's algorithm
//Subtracting 1 from a decimal number flips all the bits after the rightmost set bit(which is 1) including the rightmost set bit. 
//for example : 
//10 in binary is 00001010 

    let count = 0;

    while(n > 0){
        n  &= (n-1);
        count++;
    }
    console.log(count);
  //correct answer for codewars below
  let binary = n.toString(2);

  for(let i = 0; i < binary.length; i++){
    if(binary.charAt(i) === "1"){
        count++
    }
    return count;

  };


  }

countBits(4);

/*
Write a function that takes an integer as input, 
returns the number of bits that are equal to one in the binary representation 
of that number. 
You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/
