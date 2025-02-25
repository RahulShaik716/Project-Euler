/*
Q2. Each new term in the fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
1,2,3,5,8,13,21,34,55,89,..
By considering the terms in the fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/
function sumOfEvenFibonacciNumbers(limit) {
  let sum = 0;
  let a = 1;
  let b = 2;
  let c = a + b;
  while (b <= limit) {
    sum += b;
    a = b + c;
    b = c + a;
    c = a + b;
  }
  return sum;
}

console.log(sumOfEvenFibonacciNumbers(4000000));

/*
Time Complexity : O(n) , Space Complexity : O(1)
*/
