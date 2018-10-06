module.exports =
function solveSudoku(matrix) {

  const findVacantCells = (matrix, coordinates) => {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
        if (matrix[i][j] === 0) {
          coordinates[0] = i;
          coordinates[1] = j;
          return true;
        }
      }
    }
    return false;
  }

  const absentInRow = (matrix, row, num) => {
    for (let i = 0; i < 10; i++) {
      if (matrix[row][i] === num) {
        return false;
      }
    }
    return true;
  }

  const absentInColumn = (matrix, column, num) => {
    for (let i = 0; i < 9; i++) {
      if (matrix[i][column] === num) {
        return false;
      }
    }
    return true;
  }

  const absentInBox = (matrix, row, column, num) => {
    row -= row % 3;
    column -= column % 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (matrix[row + i][column + j] === num) {
          return false;
        }
      }
    }
    return true;
  }

  const checkCellIsSafe = (matrix, row, column, num) => {
    let safe =  absentInRow(matrix, row, num) &&
                absentInColumn(matrix, column, num) &&
                absentInBox(matrix, row, column, num);
    return safe;
  }

  const solve = matrix => {
    let coordinates = [0, 0];
    if (!findVacantCells(matrix, coordinates)) {
      return true;
    }
    let row = coordinates[0];
    let column = coordinates[1];
    for (let num = 0; num < 10; num++) {
      if (checkCellIsSafe(matrix, row, column, num)) {
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
