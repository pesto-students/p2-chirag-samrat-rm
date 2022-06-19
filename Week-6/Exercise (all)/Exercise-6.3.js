//TC - O(n^2) (insertion sort because it works best for alomost sorted array )
function sortArr(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let prev = i - 1;
    while (prev > -1 && curr < arr[prev]) {
      // to sort the array
      arr[prev + 1] = arr[prev];
      // sorting the array by moving the elements to right
      prev--;
    }
    arr[prev + 1] = curr;
    //inserting the new elem in sorted array
  }
  return arr;
}

console.log(sortArr([0, 0, 1, 1, 2]));

// [prev+1] on line 10 , because at the last iteration the condition fails but the
// prev variable is still reduced by 1...
