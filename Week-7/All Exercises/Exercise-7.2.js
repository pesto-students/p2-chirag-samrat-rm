function rotateLinkedList(head, k) {
  // create a loop
  if (head === null) return undefined;
  let tempHead = head;
  let length = 1;
  while (tempHead.next) {
    tempHead = tempHead.next;
    length++;
  }
  let shift = k % length;
  let tail = tempHead;
  while (shift > 0) {
    let temp = head;
    head = head.next;
    tail.next = temp;
    tail = temp;
    shift--;
  }
  tail.next = null;
  return head;
}
// TC -> O(n)
