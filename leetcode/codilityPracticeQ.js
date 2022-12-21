// function solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
// Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


//airplane 
function solution(N, S) {
    // Implement your solution here
    let dictionary = {};
    let reservedSeats = S.split(" ");
    reservedSeats.forEach(reserved => {
        let row = reserved.slice(0, reserved.length-1);
        let col = reserved.slice(reserved.length-1);
        dictionary[row] || (dictionary[row] = new Set());
        dictionary[row].add(col);
    });

    let res = 0;
    let keys = Object.keys(dictionary);
    let length = keys.length;

    keys.forEach(row => {
        let taken = dictionary[row];
        let has = false;

        //left+mid
        if(taken.has('B') || taken.has('C') || taken.has('D') || taken.has('E')) {

        } else {
            has = true;
            res++;
        }

        //mid+right
            if(taken.has('F') || taken.has('G') || taken.has('H') || taken.has('J')) {

        } else {
            has = true;
            res++;
        }

        //mid
                if(taken.has('D') || taken.has('E') || taken.has('F') || taken.has('G')) {

        } else {
            //only if prior 2 conditions are not met 
            if(!has) res++;
        }
    });

    res += (N-length) * 2;

    return res;
}


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

//tile
function solution(A) {
    // Implement your solution here
    //use set to store regular tiles and reveresed tiles 
    //use for loop to go through the set and check whether possible combination of tile is present in the set. 

    let set = new Set();
    let answer = '';

    for(let tile of A) {
        const reversedTile = tile.charAt(2) + '-' + tile.charAt(0);
        set.add(tile);
        set.add(reversedTile);

        //range: 0-6
        for(let i =0; i<=6; i++) {
            for(let j =0; j<=6; j++) {
                let possibleTile = i + '-' + j;

                if(!set.has(possibleTile)) {
                    answer = possibleTile;
                }
            }
        }
    }

    return answer
}
