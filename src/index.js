// module.exports = function solveSudoku(matrix) {

  const matrix = [
    [5, 3, 4, 6, 7, 8, 9, 0, 0],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ];

  const makeRange = length => {
    return [...Array(length).keys()];
  }

  const findEmptyLocation = (matrix, location) => {
    // matrix.forEach((row, i) => {
      // row.forEach((item, j) => {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
        if (matrix[i][j] === 0) {
          location[0] = i;
          location[1] = j;
          return true;
        }
      }
    }
      // });
    // });
    return false;
  }

  const usedInRow = (matrix, row, num) => {
    // matrix.forEach((row, i) => {
    for (let i = 0; i < 10; i++) {
      if (matrix[row][i] === num) {
        return true;
      }
    }
  // );
    return false;
  }

  const usedInColumn = (matrix, column, num) => {
    // matrix.forEach(item => {
    for (let i = 0; i < 9; i++) {
      if (matrix[i][column] === num) {
        return true;
      }
    }
  // );
    return false;
  }

  const usedInBox = (matrix, row, column, num) => {
    // makeRange(3).forEach(i => {
    for (let i = 0; i < 3; i++) {
      // makeRange(3).forEach(j => {
      for (let j = 0; j < 3; j++) {
        if (matrix[row + i][column + j] === num) {
          return true;
        }
      }
    // );
    }
  // );
    return false;
  }

  const checkLocationIsSafe = (matrix, row, column, num) => {
    const unsafe =  usedInRow(matrix, row, num) &&
                    usedInColumn(matrix, column, num) &&
                    usedInBox(matrix, row - row % 3, column - column % 3, num);
    console.log('unsafe = ', unsafe);
    return !unsafe;
  }

  const solveSudoku = matrix => {
    let location = [0, 0];
    if (!findEmptyLocation(matrix, location)) {
      console.log('location: ', location);
      console.log('empty location is not found');
      return true;
    }
    console.log('location', location);
    const row = location[0];
    const column = location[1];


    // makeRange(10).forEach(num => {
    for (let num = 0; num < 10; num++) {
      if (checkLocationIsSafe(matrix, row, column, num)) {
        matrix[row][column] = num;
        if (solveSudoku(matrix)) {
          return true;
        }
        matrix[row][column] = 0;
      }
    }
  // );
    return false;
  }


solveSudoku(matrix);
matrix
