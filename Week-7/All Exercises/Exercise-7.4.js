function parenthesisChecker(str) {
  class Stack {
    constructor() {
      this.size = 0;
      this.data = [];
    }
    push(val) {
      this.data.push(val);
      this.size++;
      return this.size;
    }
    pop() {
      if (this.size == 0) return null;
      this.size--;
      return this.data.pop();
    }
    peek() {
      if (this.size == 0) return "0";
      return this.data[this.size - 1];
    }
  }
  let stack = new Stack();

  // 40-(   41-) 91-[  93-[   123-{  125-}
  stack.push(str[0]);
  for (let a = 1; a < str.length; a++) {
    if (
      // checking if the brackets are open and clse
      str[a].charCodeAt() === stack.peek().charCodeAt() + 1 ||
      str[a].charCodeAt() === stack.peek().charCodeAt() + 2
    ) {
      stack.pop();
    } else {
      stack.push(str[a]);
    }
  }
  if (stack.size == 0) return true;
  return false;
}

console.log(parenthesisChecker("{}[{([)}]()"));
