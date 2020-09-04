/* eslint-disable no-console */

console.log(`Задание 1.`);

// 1. Найти расстояние между двумя точками

const getDistance = (x1, y1, x2, y2) =>
    Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));

const showResult = (x1, y1, x2, y2, d) =>
    console.log(`Расстояние между точками (${x1}, ${y1}), (${x2}, ${y2}) равно ${d}`);

const px1 = 3;
const py1 = -4;

const px2 = -6;
const py2 = 5;

const distance = getDistance(px1, py1, px2, py2);
showResult(px1, py1, px2, py2, distance);

// 2. Даны 3 числа. Убедиться, что они удовлетворяют теореме Пифагора.

const getPythagoreanTheorem = (a, b, c) => {
    const pt1 = a ** 2 === b ** 2 + c ** 2;
    const pt2 = b ** 2 === a ** 2 + c ** 2;
    const pt3 = c ** 2 === a ** 2 + b ** 2;
    const theorem = pt1 || pt2 || pt3;
    return theorem;
}

const showResultTheorem = (a, b, c, theorem) => {
    const t = theorem ? "удолетворяют" : "не удовлетворяют";
    console.log(`Числа ${a}, ${b}, ${c} ${t} теореме Пифагора`);
}

const p1 = 3;
const p2 = 4;
const p3 = 5;

const PythagoreanTheorem = getPythagoreanTheorem(p1, p2, p3);
showResultTheorem(p1, p2, p3, PythagoreanTheorem);

// 3. Даны 3 числа. Убедиться, что они могут являться сторонами треугольника.

const getTriangle = (a, b, c) => {
    const check1 = a + b > c;
    const check2 = b + c > a;
    const check3 = c + a > b;
    const check = check1 && check2 && check3;
    return check;
}

const showResultTriangle = (a, b, c, check) => {
    const t = check ? "могут" : "не могут";
    console.log(`Числа ${a}, ${b}, ${c} ${t} являтьcя сторонами треугольника`);
}

const t1 = 11;
const t2 = 1;
const t3 = 1;

const triangle = getTriangle(t1, t2, t3);
showResultTriangle(t1, t2, t3, triangle);



console.log(`Задание 2.`);

// 2.1 Заполнить массив 20 числами, которые делятся на 3 или на 5, или на 15, и вывести его.

const generateArray = () => {
    const array = [];
    for (let i = 3; array.length < 20; i += 1) {
        if (i % 3 === 0 || i % 5 === 0 || i % 15 === 0) {
            array.push(i);
        }
    }
    return array;
}

const printArray = (array) => {
    for (let i = 0; i < array.length; i += 1) {
        console.log(`[${i}] = ${array[i]}`);
    }
}

const arr = generateArray();
printArray(arr);

// 1.2 Посчитать произведение всех элементов находящихся в каждой третьей позиции.

const productArray = (array) => {
    let product = 1;
    for (let i = 2; i < array.length; i += 3) {
        product *= array[i];
    }
    return product;
}

const product = productArray(arr);
console.log(`Произведение элементов каждой третьей позиции равно ${product}`);

// 1.3 Посчитать среднее арифметическое всех чисел.

const averageArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i += 1) {
        sum += array[i];
    }
    const average = sum / array.length;
    return average;
}

const average = averageArray(arr);
console.log(`Среднее арифметическое всех чисел массива равно ${average}`);

// 1.4 Найти максимальное и минимальное число.

const minArray = (array) => {
    let min = array[0];
    for (let i = 1; i < array.length; i += 1) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
}

const min = minArray(arr);
console.log(`Минимальное число в массиве - ${min}`);

const maxArray = (array) => {
    let max = array[0];
    for (let i = 1; i < array.length; i += 1) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}

const max = maxArray(arr);
console.log(`Максимальное число в массиве - ${max}`);