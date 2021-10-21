// Reverse Words in a String

//Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// ex Input: s = "the sky is blue"
// Output: "blue is sky the"

/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    return s.split(' ').reverse().join(' ')
    
};