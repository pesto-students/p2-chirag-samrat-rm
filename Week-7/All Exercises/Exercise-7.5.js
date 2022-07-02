function nextGreaterNumber(nums) {
  let stack = [];
  let result = new Array(nums.length).fill(-1);
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      result[stack[stack.length - 1]] = nums[i];
      stack.pop();
    }
    stack.push(i);
  }
  // console.log(result);
  return result;
}

//TC -> O(n)

// using stack till i find the next greatest element
