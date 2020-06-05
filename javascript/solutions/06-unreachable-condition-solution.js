// both params are random numbers
// it never returns "hello"
//
// func(0,1) => "world"
// func(1,2) => "world"

/* Explanation: num1 && num2 === false is always false, so removing this condition 
we have a true or false result depending on the two numbers */
const func = (num1, num2) => (num1 && num2 ? "hello" : "world");
