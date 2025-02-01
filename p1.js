/*
Q1. If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5,6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
*/
//Approach 1
function sumOfMultiples() {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumOfMultiples(1000));

/* time Complexity : O(n) , space Complexity : O(1) */

//Approach 2. we can use AP series to solve the problem.
/*
The multiples of 3 below 1000 are 3,6,9... , 999 
no of terms = 999/3 = 333
sum of arithmetic series is given by S = n/2 * (first term + last term) 
S = 333/2 * (3 + 999) = 166833

The multiples of 5 below 1000 are 5,10,15... , 995
no of terms = 995/5 = 199
sum of arithmetic series is given by S = n/2 * (first term + last term)
S = 199/2 * (5 + 995) = 99500

The multiples of 15 below 1000 are 15,30,45... , 990
no of terms = 990/15 = 66
sum of arithmetic series is given by S = n/2 * (first term + last term)
S = 66/2 * (15 + 990) = 33165

The sum of all the multiples of 3 or 5 below 1000 = sum of multiples of 3 + sum of multiples of 5 - sum of multiples of 15
= 166833 + 99500 - 33165 = 233168
*/
function sumOfMultiplesUsingAP() {
  let n3 = Math.floor(999 / 3);
  let s3 = (n3 / 2) * (3 + 999);
  let n5 = Math.floor(995 / 5);
  let s5 = (n5 / 2) * (5 + 995);
  let n15 = Math.floor(990 / 15);
  let s15 = (n15 / 2) * (15 + 990);
  return s3 + s5 - s15;
}

console.log(sumOfMultiplesUsingAP(1000));
