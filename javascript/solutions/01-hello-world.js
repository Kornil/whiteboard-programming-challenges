const sleep = require("../helpers/sleep");

// output should be displayed after the timer

// So, we have a function that should say hello after 5 seconds.
// What will it actually do if it's run?

// To figure that out, we need to know what sleep(5000) does.
// Take a gander at the helpers/sleep file:

// module.exports = function (ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// };

// We're looking at a Promise that will resolve after a specified time.

// This is asynchronous code. The function will actually start `sleep()`
// then immediately console.log "hello" without waiting.

// We need it to wait for `sleep()` to finish it's work before we proceed to say "hello."

// Because we're dealing with a Promise, async/await is perfect:

// "The await expression causes async function execution to pause until a Promise
// is settled, that is fulfilled or rejected, and to resume execution of the async
// function after fulfillment."
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

// So, we can make our function `async`, make it `await` the promise in `sleep()`
// & we have output displayed after the timer!

const func = (async () => {
  await sleep(5000);
  console.log("hello");
})();
