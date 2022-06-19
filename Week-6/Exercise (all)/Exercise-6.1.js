// Time Complexity - O(n^3)
function maxSubArr(arr) {
  let subArrLength = arr.length - 1;
  let total = arr.reduce((p, c) => p + c, 0);
  let max = arr[0];
  let count = 0;
  for (let a = subArrLength; a >= 1; a--) {
    for (let b = 0; b < arr.length - a; b++) {
      let subTotal = arr.slice(b, b + a).reduce((p, c) => p + c, 0);
      count++;
      if (max < subTotal) {
        max = subTotal;
      }
    }
  }
  console.log(count);
  return max;
}

console.log(maxSubArr([1, 2, 3, 4, 5, 6, 6]));

// function maxSubArr(arr) {
//   if (arr.length == 1) return arr[1];
//   arr.sort((x, y) => x - y);
//   let count = 0;
//   let max = arr[arr.length - 1];
//   for (let a = 1; a <= arr.length - 1; a++) {
//     let subArr = arr.slice(a).reduce((p, c) => p + c, 0);
//     count++;
//     if (max < subArr) {
//       max = subArr;
//     }
//   }
//   console.log(count);
//   return max;
// }
// // Can't sort !!!!!!!
// // Time Complexity - O(n^2)

// // Time Complexity - O(n)
