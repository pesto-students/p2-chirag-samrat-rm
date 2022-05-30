function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  message = `count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();

increment();
increment();
increment();
log(); // output -> 0

//   The message variable stores the 'count' value
//   inside the 'message' string literal (`count is ${count}`)
//   before the 'increment' and 'log' functions are called.
//   So, even when count's value is changed when the
//   "increment ()" is called the 'message' variable dosen't change its value.
//   That's why the 'message' value is not incremented along with the 'count'.
