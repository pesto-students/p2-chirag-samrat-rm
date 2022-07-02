function reverseLinkedList(head) {
  let prev = null; // because we have to assign it to tail.next
  let node = head;
  if (head == null) return undefined;
  while (node) {
    // till we reach null
    let currNode = node.next; // this is the next node in our Iteration
    node.next = prev;
    prev = node;
    node = currNode;
  }
  return prev; // because currNode and Node are *null*
}
// TC -> O(n)

// A -> B -> C -> D -> NULL

// NULL <- A -< B <- C <- D
