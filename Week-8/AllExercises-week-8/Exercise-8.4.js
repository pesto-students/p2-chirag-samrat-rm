function pathExists(n, edge, source, destination) {
  let map = {}; // creating a bi-directional graph
  for (let [a, b] of edges) {
    // deconstructors
    if (map[a] == null) map[a] = [];
    if (map[b] == null) map[b] = [];
    map[a].push(b);
    map[b].push(a);
  }
  let unvisited = [source];
  let visited = new Set();
  while (unvisited.length > 0) {
    //   DFS
    let vertex = unvisited.pop();
    if (vertex == destination) return true; // since we are starting from source if we find destination simply return true
    visited.add(vertex);
    for (let elem of map[vertex]) {
      if (!visited.has(elem)) unvisited.push(elem);
    }
  }
  return false;
}
// we visit all the nodes from source using DFS
// If we find the vertex == destination we return true
//  if all the nodes of source are visited
// and destination is not found then return false after the while loop ends
