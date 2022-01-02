// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function (strs) {
  //base condition
  if (!strs.length) {
    return "";
  }

  //loop thr the strs arr
  for (let i = 0; i < strs[0].length; i++) {
    for (let s of strs) {
      //find a point where s[i] does not equal strs[0][i]
      if (s[i] !== strs[0][i]) {
        return s.slice(0, i);
      }
    }
  }
  return strs[0];
};

var longestCommonPrefix = function (strs) {
  const emptyIndex = strs.findIndex((item) => item === "");
  if (strs.length === 0 || emptyIndex !== -1) {
    return "";
  }
  let commonFirstChar = "";
  for (i = 0; i < strs.length; i++) {
    const firstChar = strs[i].substring(0, 1);
    if (commonFirstChar === "") {
      commonFirstChar = firstChar;
    } else {
      if (firstChar !== commonFirstChar) {
        return "";
      }
    }
  }
  const newStrs = strs.map((item) => item.substring(1));
  return commonFirstChar + longestCommonPrefix(newStrs);
};
