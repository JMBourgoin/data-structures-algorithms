var maxIncreaseKeepingSkyline = function (grid) {
    let row_maxes = new Array(grid.length).fill(0);
    let column_maxes = new Array(grid.length).fill(0);

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            row_maxes[i] = Math.max(row_maxes[i], grid[i][j]);
            column_maxes[j] = Math.max(column_maxes[j], grid[j][i]);
        }
    }

    let ans = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            ans += Math.min(row_maxes[i], column_maxes[j]) - grid[i][j];
        }
    }

    return ans;

};