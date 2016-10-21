/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const copy = board.map(row => row.map(cell => cell));

    const numRows = board.length;
    const numCols = board[0].length;

    let numNeighbors;

    // iterate through all cells
    for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
            numNeighbors = numOfLiveNeighbors(copy, r, c);
            if (copy[r][c] === 1) {
                if (numNeighbors < 2 || numNeighbors > 3) {
                    board[r][c] = 0;
                }
            } else {
                if (numNeighbors === 3) {
                    board[r][c] = 1;
                }
            }
        }
    }
    // calculate the number of neighbors that are live(1) -> function numOfLiveNeighbors(copy, r, c)
    // update the cell of the original board according to the rule
};

const numOfLiveNeighbors = function(board, r, c) {
    console.log(board);
    const numRows = board.length;
    const numCols = board[0].length;

    let numNeighbors = 0;

    if (r-1 >= 0) {
        if (c-1 >= 0 && board[r-1][c-1] === 1) {
            numNeighbors++;
        }
        if (board[r-1][c] === 1) {
            numNeighbors++;
        }
        if (c+1 < numCols && board[r-1][c+1] === 1) {
            numNeighbors++;
        }
    }

    if (c-1 >= 0 && board[r][c-1] === 1) {
        numNeighbors++;
    }
    if (c+1 < numCols && board[r][c+1] === 1) {
        numNeighbors++;
    }

    if (r+1 < numRows) {
        if (c-1 >= 0 && board[r+1][c-1] === 1) {
            numNeighbors++;
        }
        if (board[r+1][c] === 1) {
            numNeighbors++;
        }
        if (c+1 < numCols && board[r+1][c+1] === 1) {
            numNeighbors++;
        }
    }

    console.log('testing for numOfLiveNeighbors', 'r', r, 'c', c, 'numNeighbors', numNeighbors);

    return numNeighbors;
}

const board = [[1, 0], [0, 0]];
gameOfLife(board);
console.log('the next state of the board is', board);


// Using promises

var gameOfLife = function(board) {
  const numRows = board.length;
  const numCols = board[0].length;

}


