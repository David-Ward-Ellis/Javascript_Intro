function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false

  for (i = 0; i <= arr1.length; i +=1)
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    // return true
    return arr1
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3])); 
console.log(arraysEqual([1, 2, 3], [4, 5, 6])); 
console.log(arraysEqual([1, 2, 3], [1, 2, 3, 4]))

// Works best with primitive values