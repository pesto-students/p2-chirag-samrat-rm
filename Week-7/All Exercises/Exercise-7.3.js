function DetectLoop(head) {
  let set = new Set(); // in sets we can't have duplicate elements
  while (head) {
    // till null
    if (set.has(head)) {
      // means there wqas alerady this link and that means there is a loop
      return true;
    } else {
      set.add(head);
      head = head.next;
    }
  }
  return false;
}
