// module.exports = function solveSudoku(matrix) {
  const matrix = [
    [5, 3, 4, 6, 7, 8, 9, 0, 0],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ];



  const coordinates = [];
  matrix.forEach((row, i) => {
    row.forEach((element, j) => {
      if (element == 0) {
        coordinates.push([i, j]);
      }
    });
  });
  coordinates


  const cell = coordinates[0]
  cell

  // console.log(numbers.includes(2));


  const checkRow = (matrix, rowIndex) => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rowVariants = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    matrix[rowIndex].forEach(item => {
      if (numbers.includes(item)) {
        rowVariants.splice(rowVariants.indexOf(item), 1);
      }
    });
    return rowVariants;
  }

  const transpose = maxtrix => {
    const transposed = [];
    matrix.forEach((row, i) => {
      transposed[i] = [];
      row.forEach((item, j) => {
        transposed[i][j] = matrix[j][i];
      });
    });
        return transposed;
  }





  const checkColumn = (rowIndex, columnIndex) => {
    let columnVariants = [1, 2, 3, 4, 5, 6, 7, 8, 9];


    // matrix.forEach(row => {
    //   row.forEach(item => {
    //     if (columnVariants.includes(item)) {
    //       columnVariants.splice(matrix.indexOf(item), 1);
    //     }
    //   });
    // });
    columnVariants
    return columnVariants;
  }

  // const findVariants = coordinates => {
  //   let rowVariants = checkRow(coordinates[0]);
  // }
  coordinates


  const makeSquaresFromRows = rows => {
    const squares = [];
    const makeSquare = (rows, shift) => {
      const square = [];
      rows.forEach(row => {
        for (var i = shift; i < shift + row.length - 6; i++) {
          square.push(row[i]);
        }
      });
      return square;
    }
    rows.forEach((row, i) => {
      squares.push(makeSquare(rows, i*3));
    });
    return squares;
  }

  const makeSquares = matrix => {
    const squares = [];
    for (var i = 0; i < 3; i++) {
      let square = makeSquaresFromRows(matrix.slice(i*3, 3+3*i));
      squares.push(square);
    }
    return squares;
  }

  makeSquares(matrix);

  const findVariants = (matrix, coordinates) => {

  }

  let variants = coordinates.map(cell => {
    return  { cell: cell,
              rowVariants: checkRow(matrix, cell[0]),
              columnVariants: checkRow(transpose(matrix), cell[1])
            }
    });
  variants

  const rowVariants = checkRow(matrix, cell[0]);
  const columnVariants = checkRow(transpose(matrix), cell[1]);
  rowVariants
  columnVariants
