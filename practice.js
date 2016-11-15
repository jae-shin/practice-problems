function mergeSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);
  }
}

function merge(arr, start, mid, end) {
  let buf = [];
  for (let i = start; i <= end; i++) {
    buf[i] = arr[i];
  }

  let left = start;
  let right = mid + 1;
  let curr = start;

  while (left <= mid && right <= end) {
    if (buf[left] <= buf[right]) {
      arr[curr] = buf[left];
      left++;
    } else {
      arr[curr] = buf[right];
      right++;
    }
    curr++;
  }

  while (left <= mid) {
    arr[curr] = buf[left];
    left++;
    curr++;
  }
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    let piv = partition(arr, start, mid, end);
    quickSort(arr, start, piv - 1);
    quickSort(arr, piv + 1, end);
  }
}

function partition(arr, start, mid, end) {
  // let pivotIx = mid;
  let pivotVal = arr[mid];
  let left = start;
  let right = end;

  while (left < mid || right > mid) {
    while (left < mid && arr[left] <= pivotVal) {
      left++;
    }
    while (right > mid && arr[right] >= pivotVal) {
      right--;
    }

    if (left < right) {
      if (left === mid) {
        mid = right;
      } else if (right === mid) {
        mid = left;
      }
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }

  return mid;
}

let arr;
// arr = [8, 5, 9, 11, 6];
// arr = [4, 1, 6, 7, 3];
// arr = [];
// arr = [3];
// arr = [1, 2];
// arr = [5, 4, 3, 2, 1];
// arr = [1, 2, 3, 4, 5];
// arr = [3, 1];
// mergeSort(arr);
quickSort(arr);
console.log(arr);

/*
function removeDups(list) {
  const vals = new Set();
  let curr = list.head;
  if (curr === null) {
    return;
  }
  vals.add(curr.val);
  while (curr.next !== null) {
    if (vals.has(curr.next.val)) {
      curr.next = curr.next.next;
    } else {
      vals.add(curr.next.val);
      curr = curr.next;
    }
  }
}

let { linkedlist } = require('./dataStructures/LinkedList');
console.log(linkedlist.toArray());
removeDups(linkedlist);
console.log(linkedlist.toArray());
removeDups(linkedlist);
console.log(linkedlist.toArray());
*/



/*
const EventEmitter = require('events');

function Queue() {
  EventEmitter.call(this);
}
Queue.prototype = Object.create(EventEmitter.prototype);
Queue.prototype.constructor = Queue;

let q = new Queue();

q.on('test', console.log.bind(null, 3));
q.emit('wrongname');
 */