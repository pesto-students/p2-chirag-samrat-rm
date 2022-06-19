// TC O(n * (4n)) -> O(n^2)
function spiralArrFn(arr) {
  let spiralArr = [];
  let colLen = arr.length - 1;
  let rowLen = arr[0].length - 1;
  let colStart = 0;
  let rowStart = 0;
  let colEnd = colLen;
  let rowEnd = rowLen;
  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let a = rowStart; a <= rowEnd; a++) {
      spiralArr.push(arr[colStart][a]);
    }
    colStart++;
    // left -right (top)
    for (let a = colStart; a <= colEnd; a++) {
      spiralArr.push(arr[a][rowEnd]);
    }
    rowEnd--;
    // top - bottom (right)
    for (let a = rowEnd; a >= rowStart; a--) {
      spiralArr.push(arr[colEnd][a]);
    }
    colEnd--;
    // right - left (bottom)
    for (let a = colEnd; a >= colStart; a--) {
      spiralArr.push(arr[a][rowStart]);
    }
    rowStart++;
    // bottom - top (left)
  }
  console.log(spiralArr);
  return spiralArr;
}

console.log(
  spiralArrFn([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
