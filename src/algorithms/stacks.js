// ***** Stacks *****
const Stack = function() {
    this.count = 0;
    this.storage = {};
};

// Adds a value onto end of stack
Stack.prototype.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
};

// Removes and returns value at the end of the stack
Stack.prototype.pop = function() {
    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
};

Stack.prototype.size = function() {
    return this.count;
};

// Returns the value at the end of the stack
Stack.prototype.end = function() {
    return this.storage[this.count - 1];
};

Stack.prototype.isPalindrome = function(word) {
    const lettersStack = [];
    let reversedWord = "";

    // place letters of word in stack
    for (let i = 0; i < word.length; i++) {
        lettersStack.push(word[i]);
    }

    // pop off stack in reverse order
    for (let i = 0; i < word.length; i++) {
        reversedWord += lettersStack.pop();
    }

    return reversedWord === word;
};

export default Stack;
