function allPathsSourceTarget(graph) {
  const path = [];
  const result = [];
  const traverse = (garph, node, path) => {
    path.push(node);
    if (node === graph.length - 1) {
      // we have reached all the nodes so, we copy the path in result and return
      result.push([...path]);
      path.pop();
      return;
    }
    for (const child of graph[node]) {
      traverse(graph, child, path);
    }
    path.pop();
  };
  traverse(graph, 0, path);
  return result;
}
