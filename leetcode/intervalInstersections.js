// You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

// Return the intersection of these two interval lists.

// A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.

// The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].

// ex.Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
// Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */

//first find which arr is longer/shorter
//compare start and end point of each arr
//if start num is greater than end num of other arr => skip

var intervalIntersection = function (A, B) {
  let output = [];
  let longer = A.length >= B.length ? A : B;
  let shorter = A.length >= B.length ? B : A;

  for (let i = 0; i < longer.length; i++) {
    for (let j = 0; j < shorter.length; j++) {
      let [aStart, aEnd] = longer[i];
      let [bStart, bEnd] = shorter[j];
      let start = -1;
      let end = -1;

      if (aStart <= bStart) {
        start = bStart;

        if (bEnd < aEnd) {
          end = bEnd;
        } else if (aEnd < bStart) {
          break;
        } else if (aEnd <= bEnd) {
          end = aEnd;
        }
      }

      if (bStart <= aStart) {
        start = aStart;

        if (aEnd < bEnd) {
          end = aEnd;
        } else if (bEnd < aStart) {
          continue;
        } else if (bEnd <= aEnd) {
          end = bEnd;
        }
      }

      if (start != -1 && end != -1) {
        output.push([start, end]);
      }
    }
  }

  return output;
};

var intervalIntersection = function (A, B) {
  // compare the elements from left to right
  // compare each interval, grab the intersection
  // and move on

  const ans = [];
  let i = 0,
    j = 0;
  while (i < A.length && j < B.length) {
    let [as, ae] = A[i];
    let [bs, be] = B[j];

    if (ae < bs) {
      i++;
    } else if (be < as) {
      j++;
    } else if (ae <= be) {
      ans.push([Math.max(as, bs), ae]);
      i++;
    } else if (be <= ae) {
      ans.push([Math.max(as, bs), be]);
      j++;
    }
  }

  return ans;
};
