// Given the line of code below, write a function “sum” that performs the desired functionality.
const a = 4;
const b = 5;
console.log(sum(a)(b));		// Will add a and b together and return the result, prints 9 	to the console

const sum = (a) => {
    return (b) => {
        return a + b;
    }
}

/* Write a middleware function used by endpoints in an Express server that will extract the “user” object from the request object and verify that the user is old enough to access the resource. Should respond with an error 401 if the user is less than the minimum age or continue otherwise. */
 
const MINIMUM_AGE = 60;
 
function verifyMinimumAge(req, res, next){
// Your code here
    if (req.body.user.age < MINIMUM_AGE) {
        return res.status(401).send()
    } else {
        next()
    }
}

/* Provide a Mongoose schema definition for a CPU and a Computer, The CPU should have the following fields:
   name
   core_count
   thread_count
   launch_date
   4k_support
Computer should have the following fields:
   name
   cpu
   battery_capacity
*/
 
import mongoose, { Schema } from ‘mongoose’;
 
const CPUSchema = new Schema({
// define here
    //for each field define its type here
    name: {
        DataType: String,
    },
    core_count: {
        DataType: Number,
    },
    thread_count: {
        DataType: Number,
    },
    launch_date: {
        DataType: Date,
    },
    4k_support: {
        DataType: Boolean,
},
  

});
 
const CPUModel = mongoose.model(‘CPU’, CPUSchema);
 
const ComputerSchema = new Schema({
// define here
    name: {
        DataType: String,
    },
    cpu: {
        DataType: String,
    },
    battery_capacity: {
        DataType: String,
    },
    fields: [
        CPUModel
    ]
});
 
const ComputerModel = mongoose.model(‘Computer’, ComputerSchema);



/* Looking for duplicates: Given an array “arr” create a function “findDuplicateIndexes” that searches through the array and returns a list of the indexes in the array that contain duplicate values. */
 
function findDuplicateIndexes(arr) {
    // define here
    let duplicateArr = [];
    let duplicateWord = [];

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        for (let j = i+1; j < arr.length; j++) {
            if (item == arr[j]) {
                duplicateWord.push(item)
            }
        }
    }

    //there is duplicate
    if (duplicateWord.length > 1) {
        //find index of duplicate
        for (let i = 0; i < duplicateWord.length; i++) {
            const index = arr.indexOf(duplicateWord[i]);
            duplicateArr.push(index)
        }
    }

    return duplicateArr

  }
   
  // Eg: [“banana”, “apple”, “blueberry”, “apple”, “orange”] should return [1, 3]