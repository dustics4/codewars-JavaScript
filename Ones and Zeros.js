//Given an array of ones and zeroes, convert the equivalent binary value to an integer.
//Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.


const binaryArrayToNumber = arr => {
    // your code
    //joining the array
    let joinedArr = arr.join('');
    console.log(joinedArr);

    //converting into binary
    console.log(parseInt(joinedArr, 2));
  };

  binaryArrayToNumber([0, 0, 1, 0]);

  //output Testing: [0, 0, 1, 0] ==> 2