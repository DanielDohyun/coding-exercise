// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
// Find all the elements that appear twice in this array.
// Could you do it without extra space and in O(n) runtime?


//its O(1)
const findDuplicates = (n) => {
    const result = [];
  
    //nested loops: looping through the arr and push the value of the  duplicates 
    for (let i = 0; i < n.length; i += 1) {
      for (let j = 0; j < n.length, i !== j; j += 1) {
        if (n[i] === n[j]) result.push(n[i]);
      }
    }
  
    return result;
};
  

const findDuplicates = (n) => {
    const result = [];
  
    for (let i = 0; i < n.length; i += 1) {
        //setting first value of the arr as index 
        const index = Math.abs(n[i]);
  
        
        if (n[index - 1] < 0) {
            result.push(index);
        }
  
        n[index - 1] = -n[index - 1];
    }
  
    return result;
  };