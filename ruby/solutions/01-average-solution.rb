# With the current setup the result provided by an odd number would have not been precise, see
# average(10, 5) => 7
# to have a more precise result we need to allow decimal numbers.

def average(num1, num2)
  (num1 + num2) / 2.0
end