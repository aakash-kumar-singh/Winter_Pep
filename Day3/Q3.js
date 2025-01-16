//Write a function logArguments that takes any number of arguments and logs them to the console. Use rest parameters to collect the arguments. 
function restOp(a,...b){
  console.log({a,b});
}
restOp(1,2,3,4,5,56)