let contents = ['Hello', 'world', '!'];

// Original code question
for (let i in contents) {
  console.log(i);
}
// Output -> 0, 1, 2

// ------------------------
// Possible solutions
// Solution No.1
for (let i in contents) {
  console.log(contents[i]);
}
// While you do arrive at the correct output in this case, there are some potential pitfalls of using 'for in' on an array.
// When 'for in' is used on an array elements within the array can move around unexpectedly.
// If you add in an array element at a specific position, and other elements between
// are undefined the returned data is sometimes not what you would expect.
// eg. contents[5] = 'unicorn'
// Expected -> Hello, world, !, undefined,undefined, unicorn
// Result -> Hello, world, !, unicorn

// Solution No.2
contents.forEach(i => console.log(i));
// Very compact ES6 solution, and in the majority of cases it works very well.
// Do keep an eye on the size of the potential array that it will be working with
// as forEach is not the most performant 'for' loop.

// Solution No.3 - BEST SOLUTION
for (let i of contents) {
  console.log(i);
}
// Unlike 'for in' which work best with Object, 'for of' works brilliantly for Arrays.
// Doesn't suffer from dropping elements like 'for in' does, and is also very performant.
// eg. contents[5] = 'unicorn'
// Expected -> Hello, world, !, undefined,undefined, unicorn
// Result -> Hello, world, !, undefined, undefined, unicorn
