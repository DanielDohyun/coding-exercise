// Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

// exInput: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// Explanation: Surrounded regions should not be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

//Converts 'O' present near by the boundary into '@'
const DFS = (board, i, j) => {
    //base condition 
    if(i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] != 'O'){
        return;
     }
     
     board[i][j] = '@';
     //calling DFS function to check it's 4 directions (top, bot, right, left)
     DFS(board, i + 1, j);
     DFS(board, i - 1, j);
     DFS(board, i, j + 1);
     DFS(board, i, j - 1);
}
 
var solve = function(board) {
     if (board.length == 0) return;

     //looping through top & bot columns to find any 'O' present by the boundary
     for (let i = 0; i < board[0].length; i++) {
         if (board[0][i] == 'O') {
             DFS(board, 0, i);
         }
         //right column 
         if (board[board.length-1][i] == 'O') {
             DFS(board, board.length-1, i);
         }
     }

     //looping thr left and right rows to find any 'O' present by the boundary
     for (let i = 0; i < board.length; i++) {
         //first row 
         if (board[i][0] == 'O') {
             DFS(board, 0, i);
         }

         //last row 
         if (board[i][board[0].length - 1] == 'O') {
             DFS(board, board.length-1, i);
         }
     }

     //going over every nodes and check if they are 'O' convert into 'X', if they are '@' convert into 'O'
     for (let i = 0; i < board.length; i++) {
         for (let j = 0; j < board.length; j++) {
             if (board[i][j] == 'O') {
                 board[i][j] == 'X'
             } else if (board[i][j] == '@') {
                 board[i][j] = 'O'
             }
         }
     }
    return;
};