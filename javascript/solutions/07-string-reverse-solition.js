// .reverse() is an Array built in method, String does not have it.
// to use it, we have to turn our string in an array, reverse and then join it again.

const revertString = (str) => str.split("").reverse().join("");