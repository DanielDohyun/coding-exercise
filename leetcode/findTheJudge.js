// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.

// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

// Example 1:

// Input: n = 2, trust = [[1,2]]
// Output: 2
// Example 2:

// Input: n = 3, trust = [[1,3],[2,3]]
// Output: 3
// Example 3:

// Input: n = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */

var findJudge = function (n, trust) {
  let peeps = new Map(); // each person (up to N) is a key in a map
  for (let i = 1; i <= n; i++) {
    peeps.set(i, 0);
  }

  for (let i = 0; i < trust.length; i++) {
    peeps.delete(trust[i][0]); // if the person trusts someone, delete the person from map
  }

  if (peeps.size === 0) {
    return -1; // if map is empty, return -1
  } else {
    let judge = peeps.keys().next().value; // get the only key remaining in the map
    let count = 0; // used to count how many times the judge was trusted
    for (let i = 0; i < trust.length; i++) {
      if (trust[i][1] === judge) {
        // if judge is found in the array, increment the map value
        count += 1;
      }
    }
    if (count == n - 1) {
      return judge; // # of needed trusts for the judge must be N-1 (judge can't trust judge)
    } else {
      return -1;
    }
  }
};
