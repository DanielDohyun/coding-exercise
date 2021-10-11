//Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

var countBits = function(n) {
    // Program Me
    n = n.toString(2).replace(/0/g, '').split('')
    let count = 0
    for (let i = 0; i < n.length; i++) {
      count += parseInt(n[i])
    }
    return count
};
  
//or n.toString(2).split('0').join('').length;