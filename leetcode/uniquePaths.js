// You are given an m x n integer array grid where grid[i][j] could be:

// 1 representing the starting square. There is exactly one starting square.
// 2 representing the ending square. There is exactly one ending square.
// 0 representing empty squares we can walk over.
// -1 representing obstacles that we cannot walk over.
// Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.

/**
 * @param {number[][]} grid
 * @return {number}
 */

 var uniquePathsIII = function(grid) {
    let blank = 0;
    let sx= 0;
    let sy=0;
    
    for(let a = 0; a <grid.length; a++) {
        for(let b = 0; b<grid[0].length; b++) {
            if(grid[a][b] == 0) {
                blank++;                
            }
            //start coordinate
            else if(grid[a][b] == 1) {
                sx= a;
                sy= b;
            }
        }
    }
    
     const dfs = (grid, x, y, zero) => {
    //base condition
    if(x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] == -1) return 0;
    
    //not sure what this line of code is for      
    if (grid[x][y] == 2) return blank == -1 ? 1 : 0
        
        grid[x][y] = -1;
        blank--;
        
        //checking 4 directions
        const paths = dfs(grid, x+1, y, zero) +
            dfs(grid, x-1, y, zero) +
            dfs(grid, x, y+1, zero) +
            dfs(grid, x, y-1, zero);
        
        grid[x][y] = 0;
        blank++;
        
        return paths;
}
   
    return dfs(grid, sx, sy, blank);
    
};