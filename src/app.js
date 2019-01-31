import Stack from "./algorithms/stacks";

const myStack = new Stack();
console.log(myStack.isPalindrome("racecar"));
myStack.push(1);
myStack.push(2);
console.log(myStack.end());
console.log(myStack.pop());
console.log(myStack.end());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.end());
console.log(myStack.pop());
console.log(myStack.end());
