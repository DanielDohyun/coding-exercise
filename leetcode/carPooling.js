// There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).

// You are given the integer capacity and an array trips where trip[i] = [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively. The locations are given as the number of kilometers due east from the car's initial location.

// Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.

// Example 1:

// Input: trips = [[2,1,5],[3,3,7]], capacity = 4
// Output: false
// Example 2:

// Input: trips = [[2,1,5],[3,3,7]], capacity = 5
// Output: true

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */

var carPooling = function (trips, capacity) {
  const n = trips.length;

  const trip = new Array(1001).fill(0);

  for (const [passengers, start, end] of trips) {
    trip[start] += passengers;
    trip[end] -= passengers;
  }

  let passengers = 0;

  for (let i = 0; i < 1001; i++) {
    passengers += trip[i];

    if (passengers > capacity) return false;
  }

  return true;
};
