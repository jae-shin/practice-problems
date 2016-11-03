/**
Design Hit Counter

Design a hit counter which counts the number of hits received in the past 5 minutes.

Each function accepts a timestamp parameter (in seconds granularity) and you may assume that calls are being made to the system in chronological order (ie, the timestamp is monotonically increasing). You may assume that the earliest timestamp starts at 1.

It is possible that several hits arrive roughly at the same time.

Follow up:
What if the number of hits per second could be very large? Does your design scale?
 */

function HitCounter() {
  this.storage = [];
}

HitCounter.prototype = {
  hit: function(timestamp) {
    this.storage[timestamp] = this.storage[timestamp] ? this.storage[timestamp] + 1 : 1;
  },

  getHits: function(timestamp) {
    let lowerbound = Math.max(1, timestamp - 300 + 1);
    return this.storage.slice(lowerbound, timestamp+1).reduce((memo, item) => {
      return memo + item;
    }, 0);
  }
}

const counter = new HitCounter();
counter.hit(1);
counter.hit(2);
counter.hit(3);
console.assert(counter.getHits(4) === 3);
counter.hit(300);
console.assert(counter.getHits(300) === 4);
console.assert(counter.getHits(301) === 3);