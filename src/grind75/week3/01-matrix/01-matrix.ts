/*
    Credit to linyejoe2, modified version of his solution here:
    https://leetcode.com/problems/01-matrix/solutions/2543654/type-script-dp-solution/
*/
function updateMatrix(mat: number[][]): number[][] {
    const rows = mat.length;
    const cols = mat[0].length;
    // Longest possible path is from mat[0][0] to mat[rows - 1][cols - 1]
    const longestPath = rows + cols - 2;
    
    // Go top left to bottom right
    for (let row = 0; row < rows; ++row) {
        for (let col = 0; col < cols; ++col) {
            if (mat[row][col] === 0) {
                continue;
            }
            // We've found a 1.
            mat[row][col] = Math.min(
                mat[row - 1]
                    // Go up one cell
                    ? mat[row - 1][col] + 1
                    : longestPath,
                mat[row][col - 1] === undefined
                    // Go left one cell
                    ? longestPath
                    : mat[row][col - 1] + 1
            );
        }
    }

    // Make a second pass going bottom right to top left
    for (let row = rows - 1; row >= 0; --row) {
        for (let col = cols - 1; col >= 0; --col) {
            if (mat[row][col] === 0) {
                continue;
            }
            // We've found a 1.
            const cellValue = mat[row][col];
            mat[row][col] = Math.min(
                cellValue,
                mat[row + 1]
                    // Go down one cell
                    ? mat[row + 1][col] + 1
                    : longestPath,
                mat[row][col + 1] === undefined
                    // Go right one cell
                    ? longestPath
                    : mat[row][col + 1] + 1
            );
        }
    }

    return mat;
};

