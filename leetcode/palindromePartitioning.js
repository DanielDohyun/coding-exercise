// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// A palindrome string is a string that reads the same backward as forward.

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  //check whether first half equals last half
  const palindrome = (portion) => {
    const mid = Math.ceil(portion.length / 2);
    for (let i = 0; i <= mid; i++) {
      if (portion[i] !== portion[portion.length - 1 - i]) {
        return false;
      }
    }

    return true;
  };

  const result = [];

  //if its palindrome, push the incoming arr to result arr
  if (palindrome(s)) {
    result.push([s]);
  }

  const dfs = (portion, prevPalindromes = []) => {
    for (let i = 1; i < portion.length; i++) {
      const left = portion.slice(0, i);
      const right = portion.slice(i, portion.length);

      const isLeftPalindrome = palindrome(left);
      const isRightPalindrome = palindrome(right);

      if (isRightPalindrome && isLeftPalindrome) {
        res.push([left, right, ...prevPalindromes]);
      }

      if (isRightPalindrome) {
        dfs(left, [right, ...prevPalindromes]);
      }
    }
  };

  dfs(s);
  return result;
};
