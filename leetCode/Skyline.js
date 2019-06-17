var maxIncreaseKeepingSkyline = function (grid) {
    let row_maxes = new Array(grid.length).fill(0);
    let column_maxes = new Array(grid.length).fill(0);

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            row_maxes[i] = Math.max(row_maxes[i], grid[j][i]);
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

maxIncreaseKeepingSkyline([[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]]);