module.exports =
function solveSudoku(matrix) {


  const makeRange = length => {
    return [...Array(length).keys()];
  }

  const findEmptyLocation = (matrix, location) => {
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 0) {
          location[0] = i;
          location[1] = j;
          return true;
        }
      }
    }
    return false;
  }

  const usedInRow = (matrix, row, num) => {
    for (let i = 0; i < 10; i++) {
      if (matrix[row][i] === num) {
        return true;
      }
    }
    return false;
  }

  const usedInColumn = (matrix, column, num) => {
    for (let i = 0; i < 9; i++) {
      if (matrix[i][column] === num) {
        return true;
      }
    }
    return false;
  }

  const usedInBox = (matrix, row, column, num) => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (matrix[row + i][column + j] === num) {
          return true;
        }
      }
    }
    return false;
  }

  const checkLocationIsSafe = (matrix, row, column, num) => {
    let safe =  !usedInRow(matrix, row, num) &&
                    !usedInColumn(matrix, column, num) &&
                    !usedInBox(matrix, row - row % 3, column - column % 3, num);
    return safe;
  }

  const solve = matrix => {
    let location = [0, 0];
    if (!findEmptyLocation(matrix, location)) {
      return true;
    }
    let row = location[0];
    let column = location[1];
    for (let num = 0; num < 10; num++) {
      if (checkLocationIsSafe(matrix, row, column, num)) {
        matrix[row][column] = num;
        if (solve(matrix)) {
          return true;
        }
        matrix[row][column] = 0;
      }
    }
    return false;
  }
  solve(matrix);
  return matrix;
}

//
//   const matrix1 = [
//     [5, 3, 4, 6, 7, 8, 9, 0, 0],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 0],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]
//   ];

// const matrix2 = [
//   [6, 5, 0, 7, 3, 0, 0, 8, 0],
//   [0, 0, 0, 4, 8, 0, 5, 3, 0],
//   [8, 4, 0, 9, 2, 5, 0, 0, 0],
//   [0, 9, 0, 8, 0, 0, 0, 0, 0],
//   [5, 3, 0, 2, 0, 9, 6, 0, 0],
//   [0, 0, 6, 0, 0, 0, 8, 0, 0],
//   [0, 0, 9, 0, 0, 0, 0, 0, 6],
//   [0, 0, 7, 0, 0, 0, 0, 5, 0],
//   [1, 6, 5, 3, 9, 0, 4, 7, 0]
// ];
//
//
// let res = solveSudoku(matrix2);
// res
