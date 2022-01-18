Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false


/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    //gives arr of words 
    let words = s.split(' ');

    if(pattern.legnth !== words.length) return false 
    
    let word_map = new Map();
    let pat_map = new Map();
    
    
    for (let i =0; i<words.length; i++) {
        if (word_map.has(pat) && word_map.get(pat) !== words[i]) return false 
                if (pat_map.has(word) && pat_map.get(word) !== pattern.chartAt(i)) return false 
        
        word_map.set(word, pat)
        pat_map.set(pat, word)
    
    
    } 
    
    return true
    
};

function wordPattern(pattern, s) {
    const splitStr = s.split(' ');
    if (splitStr.length !== pattern.length) return false;
    const hash = {};
  
    for (let i = 0; i < pattern.length; i++) {
      if (pattern[i] in hash) {
        if (hash[pattern[i]] !== splitStr[i]) {
          return false;
        }
      } else if (Object.values(hash).indexOf(splitStr[i]) > -1) {
        return false;
      } else {
        hash[pattern[i]] = splitStr[i];
      }
    }
    
    return true;
  };