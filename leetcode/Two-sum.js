const twoSum = (arr, goal) => {
    let mapOfNumbers = {};
    let indices = [];

    for (let i = 0; i < arr.length; i++) {
        //saving the value and its index
        mapOfNumbers[arr[i]] = i;
    }

    for (let i = 0; i < arr.length; i++) {
        let target = goal - arr[i];

        if (mapOfNumbers[target] !== null && mapOfNumbers[target] !== i) {
            //save index when map[target] is not null and not equal to i 
            indices.push(i);
            indices.push(mapOfNumbers[target]);
        }
    }
    return indices;
}