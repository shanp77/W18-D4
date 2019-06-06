function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentel = arr[i];
    for (var j = i - 1; j >= 0 && currentel < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentel;
  }
  return arr;
}

module.exports = {
  insertionSort
};
