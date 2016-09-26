// ES5
var Queue = function() {
  var queue = {};

  // values are stored in an obj with numeric keys
  var storage = [];

  queue.enqueue = function(val) {
    storage.push(val);
    return val;
  };

  queue.dequeue = function() {
    return storage.shift();
  };

  queue.size = function() {
    return storage.length;
  };

  return queue;
};

// Testing
var queue = Queue();
console.assert(queue.enqueue(1) === 1);
console.assert(queue.enqueue(2) === 2);
console.assert(queue.size() === 2);
console.assert(queue.dequeue() === 1);
console.assert(queue.dequeue() === 2);
console.assert(queue.dequeue() === undefined);
console.assert(queue.size() === 0);

// ES6
class QueueES6 {
  constructor() {
    this.storage = [];
  }

  enqueue(val) {
    this.storage.push(val);
    return val;
  }

  dequeue() {
    return this.storage.shift();
  }

  size() {
    return this.storage.length;
  }
}

// Testing
const queueES6 = new QueueES6();
console.assert(queueES6.enqueue(1) === 1);
console.assert(queueES6.enqueue(2) === 2);
console.assert(queueES6.size() === 2);
console.assert(queueES6.dequeue() === 1);
console.assert(queueES6.dequeue() === 2);
console.assert(queueES6.dequeue() === undefined);
console.assert(queueES6.size() === 0);

