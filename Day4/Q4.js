//Given an array of numbers, use an arrow function to create a new array that contains the squares of those numbers. For example, if the input is [1, 2, 3], the output should be [1, 4, 9]. 
const arr=[1,2,3,4];
const ans=arr.map((a)=>{
  return a*a;
})
console.log(ans);