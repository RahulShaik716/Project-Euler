/*
Q3. The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143 ?
*/
function largestPrimeFactor(number) {
  let i = 2;
  while (i <= number) {
    if (number % i === 0) {
      number /= i;
    } else {
      i++;
    }
  }
  return i;
}

console.log(largestPrimeFactor(600851475143));

/*
Time Complexity : O(n) , Space Complexity : O(1)
*/
