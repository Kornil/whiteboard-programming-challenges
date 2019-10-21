const sleep = require("../helpers/sleep");

// output should be displayed after the timer

const func = (async () => {
  await sleep(5000);
  return console.log("hello");
})();