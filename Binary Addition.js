//Implement a function that adds two numbers together and returns their sum in binary.
// The conversion can be done before, or after the addition.
//The binary number returned should be a string.

function addBinary(a,b) {
  
    let sum = a + b;
   return sum.toString(2);

}

addBinary(5, 9);

//    console.log((sum >>> 0).toString(2));
//right logical shift) coerces its arguments to unsigned integers, which is why you get the 32-bit two's complement representation of -3.

//e.g output would be 10

