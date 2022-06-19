// TC->  O(n)
var maxProfit = function (prices) {
  let profitsArr = [];
  for (let a = 0; a < prices.length - 1; a++) {
    // we dont loop the last element
    let buyDay = prices[a];
    let sellDay = Math.max(...prices.slice(a));
    if (sellDay - buyDay > 0) {
      profitsArr.push(sellDay - buyDay);
    }
  }
  if (profitsArr.length > 0) {
    let ans = Math.max(...profitsArr);
    return ans;
  }
  return 0;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
