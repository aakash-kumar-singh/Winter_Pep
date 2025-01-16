//Define a function sum that takes three numbers as parameters and returns their sum. Use the spread operator to call this function with an array of numbers. 
function sum(a, b, c) {
  return a + b + c;
}
const numbers = [4, 5, 6];
const result = sum(...numbers);

console.log(result); 
