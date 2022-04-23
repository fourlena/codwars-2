function mergeArrays(arr1, arr2) {
    let arr3 = [...arr1,...arr2];
    let set = [...new Set(arr3.sort((a,b) => a - b ))]
    return set;
  }