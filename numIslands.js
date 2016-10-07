/**

Number of Islands

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

11110
11010
11000
00000
Answer: 1

Example 2:

11000
11000
00100
00011
Answer: 3

 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	// hash: keep track of non-appended places that are '1' land {'[0, 1]': true}
	// num = 0: number of islands found
	// iterate through all keys in hash
		// grid(key) is our currentLand, num++, delete that key from hash
		// DFS on all adjacent points that are in hash, delete that key from hash
	// return num

	let num = 0;
	let hash = {};

	grid.forEach((arr, row) => {
		arr.forEach((char, col) => {
			if (char === '1') {
				hash[JSON.stringify([row, col])] = true;
			}
		});
	});

	let currentRow, currentCol;

	for (let key in hash) {
		num++;
		currentRow = JSON.parse(key)[0];
		currentCol = JSON.parse(key)[1];
		appendLand(grid, hash, currentRow, currentCol);
	}

	return num;
};

var appendLand = function(grid, hash, row, col) {
	delete hash[JSON.stringify([row, col])];
	if (hash[JSON.stringify([row+1, col])]) {
		appendLand(grid, hash, row+1, col);
	}
	if (hash[JSON.stringify([row, col+1])]) {
		appendLand(grid, hash, row, col+1);
	}
	if (hash[JSON.stringify([row-1, col])]) {
		appendLand(grid, hash, row-1, col);
	}
	if (hash[JSON.stringify([row, col-1])]) {
		appendLand(grid, hash, row, col-1);
	}
};