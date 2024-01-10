function oddOrEven(array) {
    //enter code here
   
   let sum = 0;
   
   for(let i = 0; i < array.length; i++){
     sum += array[i];
   }

   if(sum % 2 !== 0 ){
    console.log("odd");
   }else{
    console.log("even");
   }

 }

 oddOrEven([0, 2, 5]);