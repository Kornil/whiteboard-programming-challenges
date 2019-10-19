
// explain the below function.

const mysteryFunc = (...string) => [...new Set([...string].join(' ').split(' '))].join(' ');
