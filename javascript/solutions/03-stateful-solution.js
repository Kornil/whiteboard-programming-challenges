// SyntaxError unexpected identifier. Should return increased value.

// "Unexpected Identifier" errors are tough.
// Often, the place the compiler complains about isn't the source of the problem.
// We can't run the code as part of this exercise. Trust that the error message isn't very helpful.

// Our next step is to check the syntax of the code. Maybe it's a misplaced parentheses, who knows?

// This function looks good, but what is that 'yield i++' thing in the while loop?
// function counter() {
//   let i = 0;
//   while (true) {
//     yield i++;
//   }
// }

// Now we know where to start asking Google (absolutely necessary if you've never seen 'yield' before.)

// The search 'yield js' (without quotes) will bring us to an MDN page: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield
// That page will say "The yield keyword is used to pause and resume a generator function"
// So! We're dealing with one of those funky Generators!
// If you look at the syntax on that page, or search for 'Generator JS,'
// (again, no quotes) you'll find that the syntax requires an asterisk immediately after the word function.

// Once we add the asterisk, everything works!
// Output is as below, the code returns increased value.

function* counter() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const gen = counter();

gen.next().value; // 0, No output
gen.next().value; // 1, No output
console.log(gen.next().value); // 2, console.logged
