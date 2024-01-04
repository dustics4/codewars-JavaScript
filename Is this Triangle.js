function isTriangle(a,b,c)
{
   let max = Math.max(a,b,c);
   console.log(max < (a + b + c) / 2);
}

isTriangle(1,2,2);

//Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

//(In this case, all triangles must have surface greater than 0 to be accepted).