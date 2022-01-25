// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  //use chartCodeAT
  // less than 97 = capital letter, greater than 97 = lowercase

  const lastCapital = word.chartCodeAT(word.length - 1) < 97;

  //case: first letter = lowercase, and last = capital
  if (word.chartCodeAT(0) > 97 && lastCapital) return false;
  for (let i = 1; i < word.length - 1; i++) {
    const currCapital = word.chartCodeAT(i) < 97;
    //if last is capital, all other letters have to be capital else return false
    if (lastCapital && !currCapital) return false;
    else if (!lastCapital && currCapital) return false;
  }

  return true;
};
