let duplicateFn = (arr) => {
  console.log("I has duplicate elements");
  return arr.length !== new Set(arr).length;
};

console.log(duplicateFn([1, 2, 3, 4, 5, 3, 2, 1]));
