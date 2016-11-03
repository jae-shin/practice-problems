/**
Design Hit Counter

Design a hit counter which counts the number of hits received in the past 5 minutes.

Each function accepts a timestamp parameter (in seconds granularity) and you may assume that calls are being made to the system in chronological order (ie, the timestamp is monotonically increasing). You may assume that the earliest timestamp starts at 1.

It is possible that several hits arrive roughly at the same time.

Follow up:
What if the number of hits per second could be very large? Does your design scale?
 */

function HitCounter() {
  this.hitList = new LinkedList();
}

HitCounter.prototype = {
  cleanup: function(timestamp) {
    while (this.hitList.size > 0 && timestamp - 300 + 1 > this.hitList.head.timestamp) {
      this.hitList.removeHead();
    }
  },

  hit: function(timestamp) {
    let bucket = this.hitList.size > 0 ? this.hitList.tail : null;
    if (bucket === null || timestamp > bucket.timestamp) {
      bucket = new LinkedListBucket(timestamp);
      this.hitList.addToTail(bucket);
    }
    bucket.cnt++;
    this.cleanup(timestamp);
  },

  getHits: function(timestamp) {
    this.cleanup(timestamp);
    let totalHits = 0;
    let bucket = this.hitList.head;
    while (bucket !== null) {
      totalHits += bucket.cnt;
      bucket = bucket.next;
    }
    return totalHits;
  }
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

LinkedList.prototype.removeHead = function() {
  if (this.size <= 0) {
    return;
  }

  this.head = this.head.next;
  this.size--;
}

LinkedList.prototype.addToTail = function(node) {
  if (this.tail === null) {
    this.head = this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  this.size++;
}

function LinkedListBucket(timestamp) {
  this.timestamp = timestamp;
  this.cnt = 0;
  this.next = null;
}


// Testing
const counter = new HitCounter();
counter.hit(1);
counter.hit(1);
counter.hit(1);
counter.hit(2);
counter.hit(3);
// console.assert(counter.getHits(4) === 3);
console.log(counter.getHits(4));
counter.hit(300);
// console.assert(counter.getHits(300) === 4);
console.log(counter.getHits(300));
// console.assert(counter.getHits(301) === 3);
console.log(counter.getHits(301));
counter.hit(700);
console.log(counter.getHits(800));