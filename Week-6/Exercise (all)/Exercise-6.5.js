// TC  ->  O(n^2)
function diffTwoPairs(nums, k) {
  for (let a = 0; a < nums.length; a++) {
    for (let b = a + 1; b < nums.length; b++) {
      //console.log(nums[a],nums[b])
      if (nums[a] - nums[b] == k || nums[b] - nums[a] == k) {
        return 1;
      }
    }
  }
  return 0;
}

console.log(diffTwoPairs([5, 10, 3, 2, 50, 80]));
