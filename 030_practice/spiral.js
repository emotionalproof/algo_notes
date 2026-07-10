function spiralTraverse(array) {
    if (!array.length) return [];
    let result = [];
    let left = 0;
    let right = array[0].length - 1;
    let top = 0;
    let bottom = array.length - 1;

    while (top <= bottom && left <= right) {
        // Traverse top row (left to right)
        for (let i = left; i <= right; i++) {
            result.push(array[top][i]);
        }
        top++;

        // Traverse right column (top to bottom)
        for (let j = top; j <= bottom; j++) {
            result.push(array[j][right]);
        }
        right--;

        // Traverse bottom row (right to left), if still in bounds
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(array[bottom][i]);
            }
            bottom--;
        }

        // Traverse left column (bottom to top), if still in bounds
        if (left <= right) {
            for (let j = bottom; j >= top; j--) {
                result.push(array[j][left]);
            }
            left++;
        }
    }
    return result;
}

function spiralTraverseRec(array) {
    result = [];
    function spiralFill(array, startRow, endRow, startCol, endCol, result) {
        if (startRow > endRow || startCol > endCol) return;
        // Traverse top row (startCol to endCol)
        for (let i = startCol; i <= endCol; i++) {
            result.push(array[startRow][i]);
        }
        startRow++;

        // Traverse endCol column (top to bottom)
        for (let j = startRow; j <= endRow; j++) {
            result.push(array[j][endCol]);
        }
        endCol--;

        // Traverse endRow row (endCol to startCol), if still in bounds
        if (startRow <= endRow) {
            for (let i = endCol; i >= startCol; i--) {
                result.push(array[endRow][i]);
            }
            endRow--;
        }

        // Traverse startCol column (endRow to startRow), if still in bounds
        if (startCol <= endCol) {
            for (let j = endRow; j >= startRow; j--) {
                result.push(array[j][startCol]);
            }
            startCol++;
        }
        spiralFill(array, startRow, endRow, startCol, endCol, result);
    }
    spiralFill(array, 0, array.length - 1, 0, array[0].length - 1, result)
    return result
}

const arr = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
];

console.log(spiralTraverseRec(arr)); // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
