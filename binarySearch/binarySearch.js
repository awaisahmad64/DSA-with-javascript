var binarySearch = function (array, value) {
  var middleIndex,
    startLeftIndex = 0,
    endLastIndex = array.length - 1;

  while (startLeftIndex <= endLastIndex) {
    middleIndex = Math.floor((startLeftIndex + endLastIndex) / 2);
    if (array[middleIndex] === value) return middleIndex;
    else if (array[middleIndex] < value) startLeftIndex = middleIndex + 1;
    else endLastIndex = middleIndex - 1;
  }
  return -1;
};
console.log(
  binarySearch([1, 3, 4, 5, 6, 7, 11, 12, 13, 14, 15, 16, 17, 18, 19], 4)
);
