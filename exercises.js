// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

function myFunction(str,taylorInt) {
  let newArray = [];
  for(let i = 0; i < taylorInt; i++) {
    newArray.push(str);
  }
  console.log("#1 newArray",newArray)
}
myFunction("funny", 3);




// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

function reverseArray(arr) {
  const reversed = [...arr].reverse();
  console.log("#2 reversed",reversed, "originalArr", originalArr)
  return reversed;
}
const originalArr = ["cat","dog","mouse"]
reverseArray(originalArr)








// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

function removeFalse(anArray) {
  var myFilterArray = anArray.filter(Boolean);
// let myFilterArray = anArray.map(function(element){
//   return element != 0;
// });
  console.log("#3 myFilterArray", myFilterArray)
  return myFilterArray
}
let coolArray = ["aleena", 0, null, "bird", 12, false ]
removeFalse(coolArray)






// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]]

function toObj(mas){
    let obj = {}
    mas.forEach((item) => {
        obj[item[0]] = item[1]
    })
    return obj
}

console.log(toObj(myArray))








// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------

var arr = ["banana", "apple", "orange", "lemon", "apple", "lemon"];

function removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
}

console.log(removeDuplicates(arr))








// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------

let masOne = [1, 2, 3, 4],
    masTwo = [1, 3, 2, 4];

function isSame(mas1, mas2){
    mas1.sort()
    mas2.sort()
    if (mas1.length !== mas2.length){
        return false
    }
    else {
        mas1.forEach((item, i) =>{
            if (item !== mas2[i]){
                return false
            }
        })
        return true
    }
}


console.log(isSame(masOne, masTwo))







// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------
