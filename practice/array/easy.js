// Write a function that takes an array of numbers and returns the sum of all elements.

function sum(arr) {
  //approach 1 - using for loop
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  // approach 2 - using reduce method of array
  total = arr?.reduce((prev, curr) => {
    console.log(prev, curr);
    return prev + curr;
  }, 0);
  return total;
}

const nums = [4, 5, 7, 2, 6];
// console.log(sum(nums));

// Write a function to find the maximum value in an array of numbers.

function maxValue(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++){
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

// console.log(maxValue(nums));

// Write a function that checks if a given element exists in an array.

function checkIfExists(arr, ele) {
    return arr?.includes(ele)
}
// console.log(checkIfExists(nums, 9))

// Write a function that counts how many times a specific element appears in an array.

function countOccurance(arr,ele) {
    let occurance = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === ele) {
            occurance++;
        }
    }
    return occurance;
}

let num1 = [3, 5, 6, 7, 3, 8, 3];
// console.log(countOccurance(num1,5));

// Write a function to remove duplicate elements from an array.

function removeDuplicate(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
        if (!newArray.includes(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
// console.log(removeDuplicate(num1));

//Write a function to merge two arrays into a single array.

function mergeArray(arr1, arr2) {
    return [...arr1, ...arr2];
}
// console.log(mergeArray(nums, num1))

// Write a function to find the index of a specific element in an array.
function findIndex(arr,ele) {
    let index = -1;
    for (let i = 0; i < arr.length; i++){
        if (ele === arr[i]) {
            index = i;
            return index
        }
    }
    return index;
}

// console.log(findIndex(num1, 3))

// Write a function to filter out all even numbers from an array.
function filterEven(arr) {
    // return arr.filter(num=>num%2===0)
    //  return arr.reduce((acc, curr) => (curr % 2 === 0 ? [...acc, curr] : acc), []);
    const evenNums = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0) {
            evenNums.push(arr[i])
        }
    }
    return evenNums;
}
// console.log(filterEven(num1));

//Write a function that doubles each element in an array.
function doubleElement(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
        newArray.push(arr[i] * 2)
    }
    return newArray;
}
console.log(doubleElement(nums));
