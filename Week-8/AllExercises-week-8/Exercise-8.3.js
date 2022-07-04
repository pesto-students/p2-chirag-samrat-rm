function EachSiblingNode(root) {
  let queue = []; // this is a array but used like a queue
  let siblingNodes = [];
  queue.push(root);
  siblingNodes.push([root.value]);
  while (queue.length) {
    let sibling = [];
    let node = queue.shift();
    if (node.left) {
      queue.push(node.left);
      sibling.push(node.left.value);
    }
    if (node.right) {
      queue.push(node.right);
      sibling.push(node.right.value);
    }
    sibling.length && siblingNodes.push(sibling);
  }
  console.log(siblingNodes);
  return siblingNodes;
}
// TC -> O(n)
// BFS concept is used because it works on similar principle
// in one while loop iteratin we get all the sibling nodes of one parent
// and we store all the sibling in a queue which we iterate each one (one by one)
//till we get all the siblings of that
