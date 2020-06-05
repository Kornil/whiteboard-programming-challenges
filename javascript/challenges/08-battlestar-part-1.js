// Battlestar-ship Radar
 
// There's a ship in the vast ocean of space! Currently, the fashion of the day is to have spherical spaceships - due to limited  data point resolution, these are represented as squares.
 
// Your task is to process low granularity radar data to return the coordinates of the ship.
 
// Given a matrix of 0s (empty) and 1s (present), write a function that returns the position.
 
 
// Input - Empty as 0, Present as 1
let scan = [
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0]
];
 
// Output - anything that clearly describes the location of the ship
 
// { x: 1, y: 1, size: 2 }
 
// * or *
// { x1: 1, y1: 1, x2: 2, y2: 2 }
// or whatever format you prefer
 
 
 
 
let test = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 1],
  [0, 0, 1, 1]
];
 
// { x: 2, y: 2, size: 2 }
