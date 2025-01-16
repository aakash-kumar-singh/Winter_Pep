//Create a function mergeArrays that takes two arrays as parameters and returns a new array that combines both arrays using the spread operator. 
function mergeArrays(arr1,arr2){
  return [...arr1, ...arr2];
}
const arr1=[1,2,3,4];
const arr2=[5,6,7,8];
console.log(mergeArrays(arr1,arr2));