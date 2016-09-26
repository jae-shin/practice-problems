// ES5
var Stack = function() {
  var stack = {};

  // values are stored in an obj with numeric keys
  var storage = {};
  var index = 0;

  stack.push = function(val) {
    storage[index++] = val;

    return val;
  };

  stack.pop = function() {
    if (index > 0) {
      var val = storage[index - 1];
      delete storage[--index];
      return val;
    }

    return undefined;
  };

  stack.size = function() {
    return index;
  };

  return stack;
};

// Testing
var stack = Stack();
console.assert(stack.size() === 0);
console.assert(stack.pop() === undefined);
console.assert(stack.push(1) === 1);
console.assert(stack.size() === 1);
console.assert(stack.push(2) === 2);
console.assert(stack.pop() === 2);
console.assert(stack.size() === 1);
console.assert(stack.pop() === 1);

// ES6
class StackES6 {
  constructor() {
    this.storage = {};
    this.index = 0;
  }

  push(val) {
    this.storage[this.index++] = val;
    return val;
  }

  pop() {
    if (this.index > 0) {
      let val = this.storage[this.index - 1];
      delete this.storage[--this.index];
      return val;
    }

    return undefined;
  }

  size() {
    return this.index;
  }
}

// Testing
const stackES6 = new StackES6();
console.assert(stackES6.size() === 0);
console.assert(stackES6.pop() === undefined);
console.assert(stackES6.push(1) === 1);
console.assert(stackES6.size() === 1);
console.assert(stackES6.push(2) === 2);
console.assert(stackES6.pop() === 2);
console.assert(stackES6.size() === 1);
console.assert(stackES6.pop() === 1);








