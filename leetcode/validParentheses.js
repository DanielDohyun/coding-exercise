// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  //base condition
  if (s.length === 0 || s.length === undefined || s.length === null)
    return false;

  //declare variables to keep track of the brackets
  const placeholder = [];
  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    //push s[i] when its either (, {, or [
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      placeholder.push(s[i]);
      //get correct pair from brackets object and check whether it equals s[i]
    } else if (brackets[placeholder.pop()] !== s[i]) {
      return false;
    }
  }
  //placeholder arr will be empty when s has all correct pairs
  return placeholder.length ? false : true;
}
