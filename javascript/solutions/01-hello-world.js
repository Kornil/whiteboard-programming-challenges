
const sleep = require("../helpers/sleep");

// output should be displayed after the timer

const func = (() => {
  sleep(5000);
  console.log("hello world");
})();
