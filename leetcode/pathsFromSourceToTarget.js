// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i(i.e., there is a directed edge from node i to node graph[i][j]).
// ex.Input: graph = [[1,2],[3],[3],[]]
// Output: [[0,1,3],[0,2,3]]
// Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  var result = []; /* collection of paths that will be returned */
  var path = []; /* current path */
  path.push(0); /* add start index to current path */
  function helper(node) {
    if (node == graph.length - 1) {
      result.push(path.slice(0));
      /*
				if we are at the last node, we add the current path to the result, for
				some reason, if we just try to push the array it only adds the first
				element, so we need to do a slice from 0 (so it contains everything) and
				then push it into the result array
			*/
    } else {
      for (var i = 0; i < graph[node].length; i++) {
        /*go through all of the connections*/
        path.push(graph[node][i]); /* add to the current path */
        helper(graph[node][i]);
        path.pop();
        /* remove the added node so that the next iteration is not affected by
				it */
      }
    }
  }
  helper(0);
  return result;
};
