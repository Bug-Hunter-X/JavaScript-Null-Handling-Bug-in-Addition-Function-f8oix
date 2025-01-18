function foo(a, b) {
  // Approach 1: Treat null as zero
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;
  return a + b; 
}

// Approach 2: Throw an error for null values
function foo2(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.');
  }
  return a + b;
}
console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0

console.log(foo2(1, 2)); // Output: 3
//console.log(foo2(null, 2)); // throws an error
//console.log(foo2(1, null)); // throws an error
//console.log(foo2(null, null)); // throws an error