// Given n non - negative integers a1, a2, ..., an, where each represents a point at coordinate(i, ai).
// n vertical lines are drawn such that the two endpoints of the line i is at(i, ai) and(i, 0).
// Find two lines, which, together with the x - axis forms a container, such that the container contains the most water.

var maxArea = function (height) {
    let i = 0;
    let j = height.length - 1;
    let max = 0
    let area

    while (i < j) {
        area = (j - 1) * Math.min(height[i], height[j]);

        //return highest value that I pass in to it
        max = Math.max(area, max);

        height[i] < height[j] ? i++ : j--;

    }
    return max
};