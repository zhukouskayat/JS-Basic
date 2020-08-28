/* eslint-disable no-console */

// 2.1 Вывести матрицу таблицы умножения.

console.log(`Задание 2.1`);

const Matrix = [];

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

console.log(`Задание 2.2`);

let SumMainDiag = 0;

for (let i = 0; i < 9; i += 1) {
    SumMainDiag += Matrix[i][i];
}

console.log(`Сумма чисел находящихся на главной диагонали = ${SumMainDiag}`);

// 2.3 Посчитать среднее геометрическое чисел находящихся на вспомогательной диагонали.

console.log(`Задание 2.3`);

let Product = 1;
let Count = 0;

for (let i = 0; i < 9; i += 1) {
    Product *= Matrix[i][8 - i];
    Count += 1;
}

const gAverage = Product / Count;

console.log(`Среднее геометрическое чисел находящихся на вспомогательной диагонали = ${gAverage}`);

// 2.4 Посчитать сумму всех элементов для каждого чётного столбца.

console.log(`Задание 2.4`);

let SumCol = 0;

for (let i = 1; i < 9; i += 2) {
    for (let j = 0; j < 9; j += 1) {
        SumCol += Matrix[i][j];
    }
}

console.log(`Сумма всех чисел четных столбцов = ${SumCol}`);

// 2.5 Посчитать среднее арифметическое сумм нечетных строк.

console.log(`Задание 2.5`);

let SumRow = 0;
let CountRow = 0;

for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 2) {
        SumRow += Matrix[i][j];
        CountRow += 1;
    }
}

const RowAverage = SumRow / CountRow;

console.log(`Среднее арифметическое сумм чисел нечетных строк = ${RowAverage}`);


// 2.6 Посчитать сумму всех чисел матрицы

console.log(`Задание 2.6`);

let SumMatrix = 0;

for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
        SumMatrix += Matrix[i][j];
    }
}

console.log(`Сумма всех чисел матрицы = ${SumMatrix}`);

// 2.7 Посчитать сумму чисел в верхнем треугольнике относительно главной диагонали не включая и включая саму диагональ

console.log(`Задание 2.7`);

const SumUpperTr = (SumMatrix - SumMainDiag) / 2;
const SumUpperTrDiag = SumUpperTr + SumMainDiag;

console.log(`Сумма чисел в верхнем треугольнике относительно главной диагонали (без главной диагонали) = ${SumUpperTr}`);
console.log(`Сумма чисел в верхнем треугольнике относительно главной диагонали (c главной диагональю) = ${SumUpperTrDiag}`);

// 2.8 Посчитать сумму чисел находящихся на вспомогательной диагонали

console.log(`Задание 2.8`);

let SumSecondDiag = 0;

for (let i = 0; i < 9; i += 1) {
    SumSecondDiag += Matrix[i][8 - i];
}

console.log(`Сумма чисел находящихся на вспомогательной диагонали = ${SumSecondDiag}`);

// 2.9 Посчитать сумму чисел в нижнем треугольнике относительно вспомогательной диагонали

console.log(`Задание 2.9`);

const SumDownTr = (SumMatrix - SumSecondDiag) / 2;
const SumDownTrDiag = SumDownTr + SumSecondDiag;

console.log(`Сумма чисел в нижнем треугольнике относительно вспомогательной диагонали (без главной диагонали) = ${SumDownTr}`);
console.log(`Сумма чисел в нижнем треугольнике относительно вспомогательной диагонали (c главной диагональю) = ${SumDownTrDiag}`);

// // 2.10 Найти максимальное и минимальное число для каждой строки.

console.log(`Задание 2.10`);

let MaxRow = Matrix[0];

for (let i = 1; i < Matrix.length; i += 1) {
    if (MaxRow < Matrix[i]) {
        MaxRow = Matrix[i];
    }
}

console.log(`Максимальные числа для каждой строки = ${MaxRow}`);

let MinRow = Matrix[0];

for (let i = 1; i < Matrix.length; i += 1) {
    if (MinRow > Matrix[i]) {
        MinRow = Matrix[i];
    }
}

console.log(`Минимальные числа для каждой строки = ${MinRow}`);