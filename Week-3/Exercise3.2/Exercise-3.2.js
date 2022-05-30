// Bind , Call and Apply

function maxFn(...args) {
  return Math.max(this.a, this.b, ...args);
}

let objA = { a: 20, b: 80, c: 40 };
let arr = [50, 60, 70];

console.log(maxFn.apply(objA, arr));
//It is used to pass a object and array in a function and the
//difference between the call and apply is that apply is used whent he
// arguments or object passed inside the function is unknown before compiling

let objB = { a: 1000, b: 1020 };
let maxB = maxFn.bind(objB, 4000, 3000);

console.log(maxB());
// It is used to pass the object and arguments to the function and the bind returns a new modified
// function based on the context of the previous function and a bind function cant be overwritten or binded again

objC = { a: 800, b: 300 };

console.log(maxFn.call(objC, 600, 400, 700));
// This is used to pass object and arguments to the function and its is used when the parameters to be passed are
// know before compilation.
