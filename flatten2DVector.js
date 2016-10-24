/**
Flatten 2D Vector

Implement an iterator to flatten a 2d vector.

For example,
Given 2d vector =

[
  [1,2],
  [3],
  [4,5,6]
]
By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,2,3,4,5,6].

 */

/**
 * @constructor
 * @param {Integer[][]} vec2d
 */
var Vector2D = function(vec2d) {
  this.vec2d = vec2d;
  this.row = 0;
  while (this.row < this.vec2d.length - 1 && this.vec2d[this.row].length === 0){
      this.row += 1;
  }
  this.col = 0;

}

/**
 * @this Vector2D
 * @returns {boolean}
 */
Vector2D.prototype.hasNext = function() {
  return this.row < this.vec2d.length && this.vec2d[this.row].length > 0;
};

/**
 * @this Vector2D
 * @returns {integer}
 */
Vector2D.prototype.next = function() {
  if (this.row >= this.vec2d.length) {
    return null;
  }

  let val = this.vec2d[this.row][this.col];
  if (this.col < this.vec2d[this.row].length - 1) {
    this.col += 1;
  } else {
    this.row += 1;
    while (this.row < this.vec2d.length - 1 && this.vec2d[this.row].length === 0) {
      this.row += 1;
    }
    this.col = 0;
  }

  return val;
};

/**
 * Your Vector2D will be called like this:
 * var i = new Vector2D(vec2d), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
let vec2d = [
  [1,2],
  [3],
  [4,5,6]
];
var i = new Vector2D(vec2d), a = [];
while (i.hasNext()) a.push(i.next());
console.log(a);

