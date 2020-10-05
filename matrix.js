/* eslint-disable no-console */

// 2.1 Вывести матрицу таблицы умножения.

const Matrix = [];
console.log(`Матрица таблицы умножения`);

for (let i = 1; i <= 9; i += 1) {
    const row = [];
    for (let j = 1; j <= 9; j += 1) {
        row.push(i * j);
    }
    Matrix.push(row);
}

for (let i = 0; i < 9; i += 1) {
    let row = "";
    for (let j = 0; j < 9; j += 1) {
        row += `${Matrix[i][j].toString()}\t`;
    }
    console.log(row);
}

// 2.2 Посчитать сумму чисел находящихся на главной диагонали.

let SumMainDiag = 0;

for (let i = 0; i < 9; i += 1) {
    SumMainDiag += Matrix[i][i];
}

console.log(`Сумма чисел находящихся на главной диагонали = ${SumMainDiag}`);

// 2.3 Посчитать среднее геометрическое чисел находящихся на вспомогательной диагонали.

let Product = 1;
let Count = 0;

for (let i = 0; i < 9; i += 1) {
    Product *= Matrix[i][8 - i];
    Count += 1;
}

const gAverage = Product / Count;

console.log(`Среднее геометрическое чисел находящихся на вспомогательной диагонали = ${gAverage}`);

// 2.4 Посчитать сумму всех всех чисел четных столбцов.

let SumAllCol = 0;

for (let i = 1; i < 9; i += 2) {
    for (let j = 0; j < 9; j += 1) {
        SumAllCol += Matrix[i][j];
    }
}

console.log(`Сумма всех чисел четных столбцов = ${SumAllCol}`);

// 2.5 Посчитать сумму всех элементов для каждого чётного столбца.

const SumCol = [];
for (let i = 1; i < Matrix.length; i += 2) {
    let sum = 0;
    for (let j = 0; j < Matrix.length; j += 1) {
        sum += Matrix[j][i];
    }
    SumCol.push(sum);
}
console.log(`Cумма всех элементов для каждого чётного столбца = ${SumCol}`);

// 2.6 Посчитать среднее арифметическое сумм нечетных строк.

let SumAllRow = 0;
let CountAllRow = 0;

for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 2) {
        SumAllRow += Matrix[i][j];
        CountAllRow += 1;
    }
}

const RowAllAverage = SumAllRow / CountAllRow;

console.log(`Среднее арифметическое сумм чисел нечетных строк = ${RowAllAverage}`);

// 2.7 Посчитать среднее арифметическое сумм каждой нечётной строки

const RowAverage = [];

for (let i = 0; i < Matrix.length; i += 2) {
    let SumRow = 0;
    let CountRow = 0;
    for (let j = 0; j < Matrix.length; j += 1) {
        SumRow += Matrix[i][j];
        CountRow += 1;
    }
    RowAverage.push(SumRow / CountRow);
}

console.log(`Среднее арифметическое сумм чисел нечетных строк = ${RowAverage}`);

// 2.8 Посчитать сумму всех чисел матрицы

let SumMatrix = 0;

for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
        SumMatrix += Matrix[i][j];
    }
}

console.log(`Сумма всех чисел матрицы = ${SumMatrix}`);

// 2.9 Посчитать сумму чисел находящихся на вспомогательной диагонали

let SumSecondDiag = 0;

for (let i = 0; i < 9; i += 1) {
    SumSecondDiag += Matrix[i][8 - i];
}

console.log(`Сумма чисел находящихся на вспомогательной диагонали = ${SumSecondDiag}`);

// 2.10 Найти максимальное и минимальное число для всей матрицы и для каждой строки

let MaxMatrix = Matrix[0][0];
let MinMatrix = Matrix[0][0];

for (let i = 0; i < Matrix.length; i += 1) {
    for (let j = 0; j < Matrix.length; j += 1) {
        if (MaxMatrix < Matrix[i][j]) {
            MaxMatrix = Matrix[i][j];
        }
        if (MinMatrix > Matrix[i][j]) {
            MinMatrix = Matrix[i][j];
        }
    }
}

console.log(`Максимальное число для всей матрицы = ${MaxMatrix}`);
console.log(`Минимальное число для всей матрицы = ${MinMatrix}`);

let MaxRow = Matrix[0];
let MinRow = Matrix[0];

for (let i = 0; i < Matrix.length; i += 1) {
    if (MaxRow < Matrix[i]) {
        MaxRow = Matrix[i];
    }
}

for (let i = 0; i < Matrix.length; i += 1) {
    if (MinRow > Matrix[i]) {
        MinRow = Matrix[i];
    }
}

console.log(`Максимальные числа для каждой строки = ${MaxRow}`);
console.log(`Минимальные числа для каждой строки = ${MinRow}`);

// 2.11 Посчитать сумму чисел в верхнем треугольнике относительно главной диагонали

let SumUpperTriangle = 0;

for (let i = 0; i < 9; i += 1) {
    for (let j = i; j < 9; j += 1) {
        SumUpperTriangle += Matrix[j][i];
    }
}
console.log(`Сумма чисел в верхнем треугольнике относительно главной диагонали = ${SumUpperTriangle}`);

// 2.12 Посчитать сумму чисел в верхнем треугольнике относительно вспомогательной диагонали

let SumUpTriangle = 0;

for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9 - i; j += 1) {
        SumUpTriangle += Matrix[j][i];
    }
}

console.log(`Сумма чисел в верхнем треугольнике относительно вспомогательной диагонали = ${SumUpTriangle}`);