// .reverse() is an Array built in method, String does not have it.
// to use it, we have to turn our string in an array, reverse and then join it again.

const revertString = (str) => str.split("").reverse().join("");

// Alternative less elegant solution: Take the input string, iterate backwards through the string & build the reversed string with concat.

const reverseString = str => {
  
  let reversed = "";
  let i = str.length - 1; // Do this work here so the for loop won't recalculate it on every iteration.

  for (i; i > -1; i--) {
    reversed += str[i]; // Add the characters to the string. str[i] starts at the last character, so reversed ends up with a reversed string.
  }
};