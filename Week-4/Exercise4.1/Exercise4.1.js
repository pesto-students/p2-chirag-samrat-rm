function getNumber() {
  let random = Math.floor(Math.random() * 100);
  return random;
}

function myPromise(func) {
  let num = func();

  var status = "Pending";
  if (num) {
    status = "fulfilled";
  }
  if (num % 5 == 0) {
    return new Error(`Divisible by 5`);
  }
  return num;
}

console.log(myPromise(getNumber));
