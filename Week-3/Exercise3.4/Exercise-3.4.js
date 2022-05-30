function createStack() {
  let items = [];
  //This is called a 'privileged method'
  //because it has access to the private data inside function.(also known as lexical environment)
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
  };
}

let stack = createStack();
stack.push(100);
stack.push(50);
console.log(stack.pop()); //50
console.log(stack.items); //undefined
