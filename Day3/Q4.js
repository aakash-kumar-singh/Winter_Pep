//Create a function createMessage that takes a default message and an indefinite number of names. The function should return an array of personalized messages for each name. 
function createMessage(Message, ...names) {
  return names.map(name => `${Message}, ${name}!`);
}
const Message = "Hello";
const messages = createMessage(Message, "Alice", "Bob", "Charlie");

console.log(messages); 

