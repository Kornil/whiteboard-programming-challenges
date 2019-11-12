// both params are random numbers
// it never returns "hello"
//
// func(0,1) => "world"
// func(1,2) => "world"

const func = (num1, num2) => (num1 && num2 ? "hello" : "world");
