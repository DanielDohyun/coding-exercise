// An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

// Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

// Example 1:

// Input: low = 100, high = 300
// Output: [123,234]
// Example 2:

// Input: low = 1000, high = 13000
// Output: [1234,2345,3456,4567,5678,6789,12345]

//condition: num has to between low and high
//change low/high numbers to string and get length
//use that length to make a loop where numbers can be generated

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  const lowLength: number = low.toString().length;
  const highLength: number = high.toString().length;
  const str = "123456789";
  const result: number[] = [];

  for (let i = lowLength; i <= highLength; i++) {
    //10-lowLength since as length of number increases, rounds of loop have to decrease
    for (let j = 0; j < 10 - lowLength; j++) {
      //substring function cuts from/including start index until/excluding end index
      let number = Number(str.substring(j, j + i));
      if (number > low && number < high) {
        result.push(number);
      }
    }
  }

  return result;
};
