// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.

//  ex. Input: n = 5
//  Output: 2
//  Explanation: Because the 3rd row is incomplete, we return 2.

/**
 * @param {number} n
 * @return {number}
 */

var arrangeCoins = function (n) {
  //1st row always begins as 1
  let num = 1;
  //to keep track of num of rows
  let numOfRow = 0;

  for (num = 1; n - num >= 0; num++) {
    n = n - num;
    numOfRow++;
  }
  return numOfRow;
};
