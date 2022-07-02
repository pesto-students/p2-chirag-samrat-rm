function QueueUsing2Stack(arr) {
  let stackA = [];
  let result = [];
  function peek(stack) {
    return stack[stack.length - 1];
  }
  function dequeue() {
    // Here two stack is used for queue like behaviour
    let stB = [];
    if (stackA.length == 0) return -1;
    while (stackA.length) {
      stB.unshift(stackA.pop());
    }
    let result = stB.shift();
    stackA = [];
    while (stB.length) {
      stackA.unshift(stB.pop());
    }
    return result;
  }
  function enqueue(val) {
    stackA.push(val);
  }
  let pointer = 0;
  let len = arr.length;
  while (pointer < len) {
    console.log(stackA);
    if (arr[pointer] === 1) {
      enqueue(arr[pointer + 1]);
      pointer += 2;
    } else if (arr[pointer] == 2) {
      let val = dequeue();
      result.push(val);
      pointer++;
    }
  }
  console.log(result);
  return result;
}

// dequeue() TC is O(n)
// enqueue() TC is O(1)
