function validBT(root) {
  if (!root) return true;
  while (root.left || root.right) {
    if (root.left !== null && root.left.value > root.value) {
      return false;
    } else if (root.right !== null && root.right.value < root.value) {
      return false;
    } else {
      return true;
    }
  }
  return validBT(root.left) && validBT(root.right);
}

//console.log(validBT(tree.root))
// TC -> O(n)
// the program checks for child node's value that doesnt satisfy the condition of BT
// At the return we use *&&* operator in which both conditions has to be true else we wil get a false
