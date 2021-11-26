// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string.This is consistent to C's strstr() and Java's indexOf().

// ex.Input: haystack = "hello", needle = "ll"
// Output: 2

var strStr = function (haystack, needle) {
  //base condition: where needle is not part of haystack => return -1
  let index = -1;

  //when haystack and needle are not empty
  if (haystack.length && needle) {
    for (let i = 0; i < haystack.length; ++i) {
      //finding i where first char of needle appear in the haystack
      if (haystack[i] == needle[0]) {
        //comparing whether subset of haystack == needle
        if (haystack.substring(i, i + needle.length) == needle) {
          return i;
        }
      }
    }

    //if needle is empty
  } else if (!needle) return 0;
  return index;
};
