function rotateLinkedList(head, k) {
  while (k > 0) {
    let node = head;
    head = head.next;
    //Push to last
    function giveLastNode(node) {
      let start = head;
      while (start.next !== null) {
        start = start.next;
      }
      return start;
    }
    let last = giveLastNode(node);
    last.next = node;
    node.next = null;
    k--;
  }
}

// TC -> O(n^2)
