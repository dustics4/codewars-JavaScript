function basicOp(operation, value1, value2)
{
  let operator = operation;
  let num1 = value1;
  let num2 = value2;
  
  if (operator === "+"){
    return num1 + num2;
  }else if(operator === "-"){
    return num1 - num2;
  }else if(operator === "*"){
    return num1 * num2;
  }else if(operator === "/"){
    return num1 / num2;
  }
  
  // Code
}
