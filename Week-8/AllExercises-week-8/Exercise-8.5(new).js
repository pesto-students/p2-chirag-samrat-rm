function findJudge(n, edges) {
  if (edges.length == 0 && n == 1) return 1;
  if (edges.length == 0) return -1;
  let map = {};
  edges.map((elem) => {
    let [a, b] = elem;
    if (!map[a]) map[a] = [0, 0];
    if (!map[b]) map[b] = [0, 0];
    // trusted on | trusted by
    map[b][1]++;
    map[a][0]++;
  });
  // console.log(map);
  for (let key in map) {
    if (map[key][0] == 0 && map[key][1] == n - 1) return key;
  }
  return -1;
}
