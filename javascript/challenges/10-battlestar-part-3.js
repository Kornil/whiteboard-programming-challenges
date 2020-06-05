// Technological advances have made ships increasingly affordable. Now tons of people are flying around and by God we need to track them. Make any changes that are necessary to return the position of multiple, rectangular ships.
 
// Input - Empty as 0, Present as 1
let scan3 = [
  [1, 0, 0, 0],
  [1, 0, 1, 1],
  [0, 0, 1, 1],
  [0, 0, 1, 1]
];
 
// Output - anything that clearly describes the location of the ship
 
// [
//   { x: 0, y: 0, width: 1, height: 2 }
//   { x: 2, y: 1, width: 2, height: 3 }
// ]
 
// or whatever format you prefer
 
 
 
 
let test3 = [
  [1, 1, 1, 0],
  [1, 1, 1, 0],
  [0, 0, 0, 0],
  [1, 1, 1, 1]
];
// [
//   { x: 0, y: 0, width: 3, height: 2 }
//   { x: 0, y: 3, width: 4, height: 1 }
// ]