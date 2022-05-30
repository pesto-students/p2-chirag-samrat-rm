function memoize(fn) {
  const cache = new Map();
  return function (...argsArr) {
    //console.log(argsArr);
    if (cache.has(argsArr.toString())) {
      return cache.get(argsArr.toString());
    }
    cache.set(argsArr.toString(), fn(...argsArr));
    return cache.get(argsArr.toString());
  };
}

function sum(a, b) {
  return a + b;
}

function time(fn) {
  console.time();
  console.log(fn());
  console.timeEnd();
}

const cacheSum = memoize(sum);

time(() => cacheSum(1000, 2000));
time(() => cacheSum(2000, 3000));
time(() => cacheSum(1000, 2000));
time(() => cacheSum(2000, 3000));

// we have a simple sum and time function
// we create a memoize function and declare a variable 'cache'
// 'cache' is assigned the value as - new Map() -- A Map holds key-value pairs where the keys can be any datatype
// now memoize function returns a function that is the updated sum() function
// the function is capable of remembering the previous arguments in sum and if not the it will store and then return the stored value
// the argsArr is the arguments of the sum() that is passed in the return function of memoize
// time(() => cacheSum(2000, 3000));   --  here we are using a function that returns sum() because we cant directly use sum()
