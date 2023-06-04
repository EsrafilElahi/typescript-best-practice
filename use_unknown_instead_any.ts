
// bad
function myFunction(fn: any) {
  fn();
}


// good but error
function myFunction2(fn: unknown) {
  fn(); // triggers a type error
}


// good
function myFunction3(fn: unknown) {
  if (typeof fn === 'function') {
    fn(); // no type error
  }
}
