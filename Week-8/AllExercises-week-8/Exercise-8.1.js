function eachNodeDepth(node, depth) {
  // Helper function
  if (!node) {
    return depth - 1;
  }
  let leftDepth = eachNodeDepth(node.left, depth + 1);
  let rightDepth = eachNodeDepth(node.right, depth + 1);
  return Math.max(leftDepth, rightDepth);
}

var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  return eachNodeDepth(root, 1);
};

// TC -> O(n)
// if there is a left or right node
// then it increments the depth by 1
// else if its null it decreements by 1
// we do this for left and right side and
// the max of left and right is returned to parent

// var maxDepth = root => root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0
