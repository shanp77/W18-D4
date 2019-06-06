function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;

  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimumIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minimumIdx] > arr[j]) {
        minimumIdx = j;
      }
    }
    swap(arr, i, minimumIdx);
  }
  return arr;
}

module.exports = {
  selectionSort,
  swap
};
