/* eslint-disable no-console */

// 1. Вывести матрицу таблицы умножения

const generateMatrix = (rows, cols) => {
  const matrix = [];
  for (let i = 0; i < rows; i += 1) {
    const row = [];
    for (let j = 0; j < cols; j += 1) {
      row.push((i + 1) * (j + 1));
    }
    matrix.push(row);
  }
  return matrix;
};

const printMatrix = (matrix) => {
  for (let i = 0; i < matrix.length; i += 1) {
    let row = "";
    for (let j = 0; j < matrix.length; j += 1) {
      row += `${matrix[i][j]}\t`;
    }
    console.log(row);
  }
};

const mTable = generateMatrix(9, 9);
printMatrix(mTable);

// 1.1 Посчитать сумму чисел находящихся на главной диагонали

const mainDiagonal = (matrix) => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    sum += matrix[i][i];
  }
  return sum;
};

const sumMainDiagonal = mainDiagonal(mTable);
console.log(
  `Сумма чисел находящихся на главной диагонали = ${sumMainDiagonal}`
);

// 1.2 Посчитать сумму чисел находящихся на вспомогательной диагонали

const secondDiagonal = (matrix) => {
  let sum = 0;
  for (let i = 0; i < 9; i += 1) {
    sum += matrix[i][matrix.length - 1 - i];
  }
  return sum;
};

const sumSecondDiagonal = secondDiagonal(mTable);
console.log(
  `Сумма чисел находящихся на вспомогательной диагонали = ${sumSecondDiagonal}`
);

// 1.3 Посчитать среднее геометрическое чисел находящихся на вспомогательной диагонали

const averageSecondDiagonal = (matrix) => {
  let product = 1;
  let count = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    product *= matrix[i][matrix.length - 1 - i];
    count += 1;
  }
  const gAverage = product / count;
  return gAverage;
};

const gAverageSecondDiagonal = averageSecondDiagonal(mTable);
console.log(
  `Среднее геометрическое чисел находящихся на вспомогательной диагонали = ${gAverageSecondDiagonal}`
);

// 1.4 Посчитать сумму всех чисел четных столбцов

const allEvenCols = (matrix) => {
  let sum = 0;
  for (let i = 1; i < matrix.length; i += 2) {
    for (let j = 0; j < matrix.length; j += 1) {
      sum += matrix[i][j];
    }
  }
  return sum;
};

const sumAllEvenCols = allEvenCols(mTable);
console.log(`Сумма всех чисел четных столбцов = ${sumAllEvenCols}`);

// 1.5 Посчитать сумму всех чисел для каждого чётного столбца.

const everyEvenCol = (matrix) => {
  const sumCol = [];
  for (let i = 1; i < matrix.length; i += 2) {
    let sum = 0;
    for (let j = 0; j < matrix.length; j += 1) {
      sum += matrix[j][i];
    }
    sumCol.push(sum);
  }
  return sumCol;
};

const sumEveryEvenCol = everyEvenCol(mTable);
console.log(
  `Cумма всех элементов для каждого чётного столбца = ${sumEveryEvenCol}`
);

// 1.6 Посчитать среднее арифметическое сумм всех нечетных строк

const allOddRows = (matrix) => {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 2) {
      sum += matrix[i][j];
      count += 1;
    }
  }
  const average = sum / count;
  return average;
};

const averageAllOddRows = allOddRows(mTable);
console.log(
  `Среднее арифметическое сумм чисел всех нечетных строк = ${averageAllOddRows}`
);

// 1.7 Посчитать среднее арифметическое сумм каждой нечётной строки

const everyOddRow = (matrix) => {
  const average = [];
  for (let i = 0; i < matrix.length; i += 2) {
    let sum = 0;
    let count = 0;
    for (let j = 0; j < matrix.length; j += 1) {
      sum += matrix[i][j];
      count += 1;
    }
    average.push(sum / count);
  }
  return average;
};

const averageEveryOddRow = everyOddRow(mTable);
console.log(
  `Среднее арифметическое сумм чисел нечетных строк = ${averageEveryOddRow}`
);

// 1.8 Посчитать сумму всех чисел матрицы

const sumWholeMatrix = (matrix) => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      sum += matrix[i][j];
    }
  }
  return sum;
};

const sumMatrix = sumWholeMatrix(mTable);
console.log(`Сумма всех чисел матрицы = ${sumMatrix}`);

// 1.9 Найти максимальное и минимальное число для всей матрицы

const maxMatrix = (matrix) => {
  let max = matrix[0][0];
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      max = matrix[i][j] > max ? matrix[i][j] : max;
    }
  }
  return max;
};

const maxValueMatrix = maxMatrix(mTable);
console.log(`Максимальное число для всей матрицы = ${maxValueMatrix}`);

const minMatrix = (matrix) => {
  let min = matrix[0][0];
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      if (min > matrix[i][j]) {
        min = matrix[i][j] < min ? matrix[i][j] : min;
      }
    }
  }
  return min;
};

const minValueMatrix = minMatrix(mTable);
console.log(`Минимальное число для всей матрицы = ${minValueMatrix}`);

// 1.10 Найти максимальное и минимальное число для каждого столбца

const maxColMatrix = (matrix) => {
  const maxCol = [];
  for (let i = 0; i < matrix.length; i += 1) {
    let max = matrix[i][0];
    for (let j = 0; j < matrix.length; j += 1) {
      max = matrix[j][i] > max ? matrix[j][i] : max;
    }
    maxCol.push(max);
  }
  return maxCol;
};

const maxValueColMatrix = maxColMatrix(mTable);
console.log(
  `Максимальное число для каждого столбца матрицы = ${maxValueColMatrix}`
);

const minColMatrix = (matrix) => {
  const minCol = [];
  for (let i = 0; i < matrix.length; i += 1) {
    let min = matrix[i][0];
    for (let j = 0; j < matrix.length; j += 1) {
      min = matrix[j][i] < min ? matrix[j][i] : min;
    }
    minCol.push(min);
  }
  return minCol;
};

const minValueColMatrix = minColMatrix(mTable);
console.log(
  `Минимальное число для каждого столбца матрицы = ${minValueColMatrix}`
);

// 1.11 Найти максимальное и минимально число для каждой строки

const maxRowMatrix = (matrix) => {
  const maxRow = [];
  for (let i = 0; i < matrix.length; i += 1) {
    let max = matrix[i][0];
    for (let j = 0; j < matrix.length; j += 1) {
      max = matrix[i][j] > max ? matrix[i][j] : max;
    }
    maxRow.push(max);
  }
  return maxRow;
};

const maxValueRowMatrix = maxRowMatrix(mTable);
console.log(
  `Максимальное число для каждой строки матрицы = ${maxValueRowMatrix}`
);

const minRowMatrix = (matrix) => {
  const minRow = [];
  for (let i = 0; i < matrix.length; i += 1) {
    let min = matrix[i][0];
    for (let j = 0; j < matrix.length; j += 1) {
      min = matrix[i][j] < min ? matrix[i][j] : min;
    }
    minRow.push(min);
  }
  return minRow;
};

const minValueRowMatrix = minRowMatrix(mTable);
console.log(
  `Минимальное число для каждой строки матрицы = ${minValueRowMatrix}`
);

// 1.12 Найти строку с наибольшим количеством чисел больше 50

const limit = 50;

const numbersGreater50 = (matrix) => {
  let maxLimit = 0;
  let rowNumber = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    let count = 0;
    for (let j = 0; j < matrix.length; j += 1) {
      if (matrix[i][j] > limit) {
        count += 1;
      }
    }
    if (count > maxLimit) {
      maxLimit = count;
      rowNumber = i;
    }
  }
  return rowNumber;
}

const rowNumbersGreater50 = numbersGreater50(mTable);
console.log(
  `Строка с наибольшим количеством чисел больше ${limit}  = ${rowNumbersGreater50}`
);

// 1.13 Обойти матрицу в шахматном порядке и все чёрные клеточки заменить на 0, а для всех белых найти среднее арифметическое и максимально число

const chess = (matrix) => {
  let sum = 0;
  let count = 0;
  let average = 0;
  let max = matrix[0][0];
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      const black = i % 2 === 0 ? j % 2 !== 0 : j % 2 === 0;
      if (black) {
        matrix[i][j] = 0;
      }
      sum += matrix[i][j];
      count += 1;
      average = sum / count;
      max = matrix[i][j] > max ? matrix[i][j] : max;
    }
  }
  return [average, max]
}

console.log(`Обойти матрицу в шахмотном порядке и все черные клеточки заменить на 0:`)
const matrixChess = chess(mTable);
printMatrix(mTable);
console.log(`Среднее арифметическое для всех белых клеток = ${matrixChess[0]}`);
console.log(`Максимальное число среди всех белых клеток = ${matrixChess[1]}`);

// 1.14 Посчитать сумму чисел в верхнем треугольнике относительно главной диагонали включая диагональ

const upperTriangleW = (matrix) => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = i; j < matrix.length; j += 1) {
      sum += matrix[j][i];
    }
  }
  return sum;
};

const sumUpperTriangleW = upperTriangleW(mTable);
console.log(
  `Сумма чисел в верхнем треугольнике относительно главной диагонали включая диагональ = ${sumUpperTriangleW}`
);

// 1.15 Посчитать сумму чисел в верхнем треугольнике относительно главной диагонали не включая диагональ

const upperTriangle = () => {
  const sumUpTriangle = sumUpperTriangleW - sumMainDiagonal;
  return sumUpTriangle;
};

const sumUpperTriangle = upperTriangle(mTable);
console.log(
  `Сумма чисел в верхнем треугольнике относительно главной диагонали не включая диагональ = ${sumUpperTriangle}`
);

// 1.16 Посчитать сумму чисел в верхнем треугольнике относительно вспомогательной диагонали включая диагональ

const upperSecondTriangleW = (matrix) => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length - i; j += 1) {
      sum += matrix[i][j];
    }
  }
  return sum;
};

const sumUpperSecondTriangleW = upperSecondTriangleW(mTable);
console.log(
  `Сумма чисел в верхнем треугольнике относительно вспомогательной диагонали включая диагональ = ${sumUpperSecondTriangleW}`
);

// 1.17 Посчитать сумму чисел в верхнем треугольнике относительно вспомогательной диагонали не включая диагональ

const upperSecondTriangle = () => {
  const sumUpSecondTriangle = sumUpperSecondTriangleW - sumSecondDiagonal;
  return sumUpSecondTriangle;
};

const sumUpperSecondTriangle = upperSecondTriangle(mTable);
console.log(
  `Сумма чисел в верхнем треугольнике относительно главной диагонали не включая диагональ = ${sumUpperSecondTriangle}`
);

// 1.18 Посчитать сумму чисел в нижнем треугольнике относительно вспомогательной диагонали включая диагональ

const downSecondTriangleW = () => {
  let sum = 0;
  sum = sumMatrix - sumUpperSecondTriangle;
  return sum;
};

const sumDownSecondTriangleW = downSecondTriangleW(mTable);
console.log(
  `Сумма чисел в нижнем треугольнике относительно вспомогательной диагонали включая диагональ = ${sumDownSecondTriangleW}`
);

// 1.18 Посчитать сумму чисел в нижнем треугольнике относительно вспомогательной диагонали не включая диагональ

const downSecondTriangle = () => {
  let sum = 0;
  sum = sumMatrix - sumUpperSecondTriangleW;
  return sum;
};

const sumDownSecondTriangle = downSecondTriangle(mTable);
console.log(
  `Сумма чисел в нижнем треугольнике относительно вспомогательной диагонали не включая диагональ = ${sumDownSecondTriangle}`
);