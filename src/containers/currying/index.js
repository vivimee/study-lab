function currying(fn) {
  return function(nextArg, ...args) {
    
  }
}

const add = (a, b) => a + b;

const curryingAdd = currying(add);

console.log(
  curryingAdd(1)(2),
  curryingAdd(1)(2)(3),
)

