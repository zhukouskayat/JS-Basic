/* eslint-disable no-console */

console.log(`Задание 1.`);

// 1. Найти расстояние между двумя точками

function distance(x1, y1, x2, y2) {
    console.log(`Расстояние между точками (${x1}; ${y1}), (${x2}; ${y2}) равно `);
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

const x1 = 3;
const y1 = -4;

const x2 = -6;
const y2 = 5;

console.log(distance(x1, y1, x2, y2));

// 2. Даны 3 числа. Убедиться, что они удовлетворяют теореме Пифагора.

function PythagoreanTheorem(a, b, c) {
    const t1 = a ** 2 === b ** 2 + c ** 2;
    const t2 = b ** 2 === a ** 2 + c ** 2;
    const t3 = c ** 2 === a ** 2 + b ** 2;
    const theorem = t1 || t2 || t3;
    console.log(`Числа ${a}, ${b}, ${c} теореме Пифагора`);
    return theorem ? "удолетворяют" : "не удовлетворяют";
}

const a = 3;
const b = 4;
const c = 5;

console.log(PythagoreanTheorem(a, b, c));

// 3. Даны 3 числа. Убедиться, что они могут являться сторонами треугольника.

function triangle(d, e, f) {
    const check1 = d + e > f;
    const check2 = e + f > d;
    const check3 = f + d > e;
    const check = check1 && check2 && check3;
    console.log(`Числа ${d}, ${e}, ${f} сторонами треугольника являться`);
    return check ? "могут" : "не могут";
}

const d = 11;
const e = 1;
const f = 1;

console.log(triangle(d, e, f));



console.log(`Задание 2.`);

// 2.1 Заполнить массив 20 числами, которые делятся на 3 или на 5, или на 15, и вывести его.

const arr = [];
let number = 3;

function array() {
    while (arr.length < 20) {
        if (number % 3 === 0 || number % 5 === 0 || number % 15 === 0) {
            arr.push(number);
        }
        number += 1;
    }
    console.log(`Массив из 20 чисел, которые делятся на 3 или на 5, или на 15`);
    return arr;
}

console.log(array());

// 1.2 Посчитать произведение всех элементов находящихся в каждой третьей позиции.

let product = 1;

function productArray() {
    for (let i = 2; i < arr.length; i += 3) {
        product *= arr[i];
    }
    console.log(`Произведение элементов каждой третьей позиции равно`);
    return product;
}

console.log(productArray());

// 1.3 Посчитать среднее арифметическое всех чисел.

let sum = 0;

function arrAverage() {
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i];
    }
    const average = sum / arr.length;
    console.log(`Среднее арифметическое всех чисел массива`);
    return average;
}

console.log(arrAverage());

// 1.4 Найти максимальное и минимальное число.

let max = arr[0];
let min = arr[0];

function maxValue() {
    for (let i = 1; i < arr.length; i += 1) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(`Максимальное число в массиве`);
    return max;
}

function minValue() {
    for (let i = 1; i < a.length; i += 1) {
        if (min > a[i]) {
            min = a[i];
        }
    }
    console.log(`Минимальное число в массиве`);
    return min;
}

console.log(maxValue());
console.log(minValue());