/**
LRU Cache

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and set.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
set(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

 */

/**
 * @constructor
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.order = new List();
    this.items = {};
};

var LRUCacheItem = function(key, val) {
    this.key = key;
    this.val = val;
    this.node = null;
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
    if (key in this.items) {
        this.order.moveToEnd(this.items[key].node);
        return this.items[key].val;
    }

    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
    let item = this.items[key];
    if (item) {
        item.val = value;
        this.order.moveToEnd(item.node);
    } else {
        if (this.size >= this.capacity) {
            let oldestItem = this.order.shift();
            delete this.items[oldestItem.key];
            this.size = Math.max(this.size - 1, 0);
        }
        item = new LRUCacheItem(key, value);
        this.items[key] = item;
        item.node = this.order.push(item);
        this.size += 1;
    }
};

// doubly-linked list
var List = function() {
    this.head = null;
    this.tail = null;
};

List.prototype.push = function(val) {
    if (this.head === null && this.tail === null) {
        this.head = this.tail = new ListNode(val);
    } else {
        let newTail = new ListNode(val);
        newTail.prev = this.tail;
        this.tail.next = newTail;
        this.tail = newTail;
    }

    return this.tail;
};

List.prototype.shift = function() {
    if (this.head === null) {
        return null;
    } else if (this.head === this.tail) {

    }

    let oldHead = this.head;
    if (this.head.next) {
        this.head.next.prev = null;
        this.head = this.head.next;
    } else {
        this.head = this.tail = null;
    }

    return oldHead.val;
};

List.prototype.moveToEnd = function(node) {
    if (node === this.tail) {
        return;
    } else if (node === this.head) {
      this.shift();
    }

    if (node.prev) {
        node.prev.next = node.next;
    }
    if (node.next) {
        node.next.prev = node.prev;
    }

    this.tail.next = node;
    node.prev = this.tail;
    node.next = null;
    this.tail = node;
};

var ListNode = function(val, prev = null, next = null) {
    this.prev = prev;
    this.val = val;
    this.next = next;
};


// Testing
var lruCache = new LRUCache(2);
lruCache.set(2, 1);
lruCache.set(1, 1);
console.log(lruCache.get(2));
// console.log(lruCache.order.head);
// console.log(lruCache.order.tail);
lruCache.set(4, 1);
console.log(lruCache.get(1));
console.log(lruCache.get(2));

